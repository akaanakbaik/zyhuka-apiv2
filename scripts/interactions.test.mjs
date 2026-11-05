import test from "node:test";
import assert from "node:assert/strict";
import { Window } from "happy-dom";
import { readFile } from "node:fs/promises";

const tick = () => new Promise((resolve) => setTimeout(resolve, 35));
test("navigation, theme, menus, FAQ, notifications, loading and API console interactions", async () => {
  const window = new Window({ url: "http://localhost:3000" });
  for (const key of [
    "window",
    "document",
    "navigator",
    "location",
    "history",
    "localStorage",
    "sessionStorage",
    "HTMLElement",
    "Element",
    "Node",
    "DOMParser",
    "MutationObserver",
    "CustomEvent",
    "Event",
    "MouseEvent",
    "KeyboardEvent",
    "HTMLInputElement",
    "HTMLButtonElement",
    "HTMLFormElement",
    "HTMLVideoElement",
    "HTMLAudioElement",
    "HTMLImageElement",
    "getComputedStyle",
  ]) {
    Object.defineProperty(globalThis, key, {
      configurable: true,
      writable: true,
      value:
        typeof window[key] === "function" && key === "getComputedStyle"
          ? window[key].bind(window)
          : window[key],
    });
  }
  globalThis.requestAnimationFrame = (cb) =>
    setTimeout(() => cb(performance.now()), 10);
  globalThis.cancelAnimationFrame = clearTimeout;
  window.scrollTo = () => {};
  window.matchMedia = () => ({
    matches: false,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
  });
  window.document.body.innerHTML = '<div id="root"></div>';
  const spec = JSON.parse(
    await readFile(new URL("../public/openapi.snapshot.json", import.meta.url)),
  );
  window.ZYHUKA_CONFIG = {
    specUrl: "https://test.invalid/spec",
    websocketUrl: "wss://test.invalid/ws",
    catalogFallback: false,
  };
  let completeCatalog;
  let completeRequest;
  let latestSocket;
  globalThis.WebSocket = class {
    constructor(url) {
      this.url = url;
      latestSocket = this;
    }
    close() {}
  };
  window.HTMLCanvasElement.prototype.getContext = () => null;
  globalThis.fetch = async (url) => {
    if (url === window.ZYHUKA_CONFIG.specUrl)
      return await new Promise((resolve) => {
        completeCatalog = () =>
          resolve(
            new Response(JSON.stringify(spec), {
              headers: { "Content-Type": "application/json" },
            }),
          );
      });
    return await new Promise((resolve) => {
      completeRequest = () =>
        resolve(
          new Response(
            JSON.stringify({ success: true, result: "test response" }),
            {
              headers: {
                "Content-Type": "application/json",
                "x-test": "verified",
              },
            },
          ),
        );
    });
  };
  let clipboard = "";
  Object.defineProperty(window.navigator, "clipboard", {
    value: {
      writeText: async (text) => {
        clipboard = text;
      },
    },
  });
  const text = () => document.body.textContent;
  const buttons = () => [...document.querySelectorAll("button")];
  const button = (label) =>
    buttons().find((b) => {
      const clone = b.cloneNode(true);
      clone
        .querySelectorAll('[aria-hidden="true"]')
        .forEach((node) => node.remove());
      return clone.textContent.trim() === label;
    });
  const until = async (fn, label) => {
    for (let i = 0; i < 60; i++) {
      if (fn()) return;
      await tick();
    }
    assert.fail(label);
  };
  try {
    await import("../dist/assets/app.js");
    await until(() => text().includes("NO LOGIN"), "home renders");
    assert.ok(text().includes("API ZYHUKA"));
    assert.ok(!text().includes("SIPUTZX"));
    button("Request").click();
    await tick();
    assert.ok(
      document.querySelector(".clay-code").textContent.includes("fetch("),
    );
    button("Response").click();
    await tick();
    assert.ok(
      document
        .querySelector(".clay-code")
        .textContent.includes("ready_to_build"),
    );
    document.querySelector('[aria-label="Salin contoh kode"]').click();
    await tick();
    assert.ok(
      document
        .querySelector('[role="status"]')
        .textContent.includes("berhasil disalin"),
    );
    assert.ok(clipboard.includes("ready_to_build"));
    const faq = buttons().find((b) =>
      b.textContent.includes("Benar-benar gratis?"),
    );
    assert.equal(faq.getAttribute("aria-expanded"), "false");
    faq.click();
    await tick();
    assert.equal(faq.getAttribute("aria-expanded"), "true");
    faq.click();
    await tick();
    assert.equal(faq.getAttribute("aria-expanded"), "false");
    document.querySelector('[aria-label="Switch to dark mode"]').click();
    await tick();
    document.querySelector('[aria-label="Switch to light mode"]').click();
    await tick();
    assert.ok(document.documentElement.classList.contains("light"));
    assert.equal(localStorage.getItem("zyhuka-theme"), "light");
    document.querySelector('[aria-label="Switch to dark mode"]').click();
    await tick();
    assert.ok(document.documentElement.classList.contains("dark"));
    button("Community").click();
    await tick();
    assert.ok(
      button("Community").closest("nav").textContent.includes("Telegram"),
    );
    document.body.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    await tick();
    document.querySelector('[aria-label="Open menu"]').click();
    await tick();
    assert.equal(document.body.style.overflow, "hidden");
    assert.ok(document.querySelector(".translate-x-0"));
    document.querySelector('[aria-label="Close menu"]').click();
    await tick();
    assert.equal(document.body.style.overflow, "auto");
    button("Browse Endpoints").click();
    await until(
      () => location.pathname === "/playground" && completeCatalog,
      "playground navigation",
    );
    assert.ok(text().includes("Connecting to V2 Server..."));
    assert.ok(document.querySelector(".spinner"));
    assert.equal(
      document.querySelector(".swal2-container"),
      null,
      "no unsolicited sponsor popup",
    );
    assert.doesNotMatch(text(), /bihost|atlantic/i);
    completeCatalog();
    await until(
      () =>
        document.querySelector('[placeholder="FILTER ENDPOINTS..."]') &&
        !text().includes("Connecting to V2 Server..."),
      "catalog loaded",
    );
    const filter = document.querySelector(
      '[placeholder="FILTER ENDPOINTS..."]',
    );
    const setInput = (value) => {
      Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value",
      ).set.call(filter, value);
      filter.dispatchEvent(new window.Event("input", { bubbles: true }));
    };
    setInput("zzzz-no-matching-endpoint");
    await tick();
    assert.ok(!buttons().some((b) => b.textContent.includes("/api/ai/duckai")));
    setInput("duckai");
    await tick();
    const endpoint = buttons().find((b) =>
      b.textContent.includes("/api/ai/duckai"),
    );
    assert.ok(endpoint, "search finds endpoint");
    endpoint.click();
    await tick();
    assert.ok(button("EXECUTE REQUEST"));
    assert.ok(document.querySelector("input[placeholder]"));
    button("EXECUTE REQUEST").click();
    await tick();
    assert.ok(button("EXECUTING...").disabled);
    assert.ok(text().includes("Processing..."));
    completeRequest();
    await tick();
    assert.ok(text().includes("test response"));
    assert.ok(text().includes("200"));
    button("HEADERS").click();
    await tick();
    assert.ok(text().includes("x-test"));
    button("CURL").click();
    await tick();
    assert.ok(text().includes("curl -X GET"));
    document.querySelector('[title="Copy cURL"]').click();
    await tick();
    assert.ok(clipboard.startsWith("curl -X GET"));
    button("Clear").click();
    await tick();
    assert.ok(!text().includes("test response"));
    button("Privacy").click();
    await tick();
    assert.equal(location.pathname, "/privacy");
    button("Terms").click();
    await tick();
    assert.equal(location.pathname, "/terms");
    button("Monitor").click();
    await tick();
    assert.equal(location.pathname, "/monitor");
    assert.ok(text().includes("Connecting to WebSocket..."));
    assert.equal(latestSocket.url, window.ZYHUKA_CONFIG.websocketUrl);
    latestSocket.onopen();
    latestSocket.onmessage({
      data: JSON.stringify({
        type: "stats",
        healthy_nodes: 0,
        total_nodes: 0,
        nodes: [],
        endpoint_catalog: Array.from({ length: 6 }, (_, i) => ({
          endpoint: `/api/test/${i}`,
          requests: 10,
          success_rate: 100,
          error_rate: 0,
          aether: {
            bayesian_confidence: 1,
            kalman_uncertainty: 0,
            lyapunov_exponent: 0,
            stability_class: "stable",
          },
          nodes: [],
        })),
        data: {
          metrics: { total_hits: 60, total_requests: 60, request_history: {} },
          attacks: { total: 0, attack_history: {} },
          errors: { total: 0, by_endpoint: {}, error_history: {} },
          traffic: {
            recent_requests: [],
            status_buckets: {},
            endpoint_hits: {},
            endpoint_hourly_24h: {},
          },
          updatedAt: new Date().toISOString(),
        },
      }),
    });
    await tick();
    assert.ok(text().includes("System Monitor"));
    assert.ok(text().includes("LIVE"));
    assert.ok(localStorage.getItem("zyhuka-monitor-cache-v3"));
    assert.ok(button("PREV 5").disabled);
    button("NEXT 5").click();
    await tick();
    assert.ok(text().includes("/api/test/5"));
    assert.ok(button("NEXT 5").disabled);
    const row = [...document.querySelectorAll("tbody tr")].find((row) =>
      row.textContent.includes("/api/test/5"),
    );
    row.click();
    await tick();
    assert.equal(document.body.style.overflow, "hidden");
    window.dispatchEvent(
      new window.KeyboardEvent("keydown", { key: "Escape" }),
    );
    await tick();
    assert.equal(document.body.style.overflow, "auto");
    button("Home").click();
    await tick();
    assert.equal(location.pathname, "/");
  } finally {
    await window.happyDOM.abort();
    window.close();
  }
});
