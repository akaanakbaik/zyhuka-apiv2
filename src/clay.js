import { b as React } from "./vendor-DHMKXF-P.js";
const h = React.createElement;

export function ClayHero({ setPage }) {
  const [tab, setTab] = React.useState("response");
  const [copied, setCopied] = React.useState(false);
  const [notice, setNotice] = React.useState("");
  const timer = React.useRef();
  React.useEffect(() => () => clearTimeout(timer.current), []);
  const code =
    tab === "response"
      ? '{\n  "success": true,\n  "message": "Hello, possibilities.",\n  "ready_to_build": true\n}'
      : 'fetch("https://api.siputzx.my.id/api/ai/duckai?prompt=Hello")\n  .then(res => res.json())\n  .then(data => console.log(data));';
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setNotice("Contoh kode berhasil disalin.");
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setCopied(false);
        setNotice("");
      }, 2000);
    } catch {
      setCopied(false);
      setNotice(
        "Belum bisa menyalin. Pilih dan salin teks kode secara manual.",
      );
    }
  }
  return h(
    "header",
    { className: "clay-hero", "aria-label": "Hero banner" },
    h(
      "div",
      { className: "clay-hero-grid" },
      h(
        "div",
        { className: "clay-hero-copy" },
        h(
          "span",
          { className: "clay-eyebrow" },
          h("span", { className: "clay-dot", "aria-hidden": true }),
          "A LITTLE SOFTER. A LOT POSSIBLE.",
        ),
        h(
          "h1",
          null,
          "NO LOGIN.",
          h("br"),
          "NO KEY.",
          h("br"),
          h("span", null, "JUST PURE API."),
        ),
        h(
          "p",
          { className: "clay-intro" },
          "Ide besar, mulai dari request kecil. Jelajahi API gratis untuk AI, pencarian, dan kreativitas—langsung dari playground, tanpa registrasi.",
        ),
        h(
          "div",
          { className: "clay-actions" },
          h(
            "button",
            { className: "clay-primary", onClick: () => setPage("playground") },
            "Browse Endpoints",
            h("span", { "aria-hidden": true }, "↗"),
          ),
          h(
            "button",
            { className: "clay-secondary", onClick: () => setPage("monitor") },
            "Lihat Monitor",
            h("span", { "aria-hidden": true }, "↗"),
          ),
        ),
        h(
          "div",
          { className: "clay-benefits" },
          h("span", null, "✦ Gratis digunakan"),
          h("span", null, "✦ Tanpa API key"),
          h("span", null, "✦ Siap bereksperimen"),
        ),
      ),
      h(
        "div",
        { className: "clay-studio" },
        h("div", {
          className: "clay-orbit clay-orbit-one",
          "aria-hidden": true,
        }),
        h("div", {
          className: "clay-orbit clay-orbit-two",
          "aria-hidden": true,
        }),
        h(
          "div",
          { className: "clay-float clay-float-code", "aria-hidden": true },
          "</>",
        ),
        h(
          "div",
          { className: "clay-float clay-float-star", "aria-hidden": true },
          "✦",
        ),
        h(
          "div",
          { className: "clay-console" },
          h(
            "div",
            { className: "clay-console-top" },
            h(
              "span",
              { className: "clay-window-dots", "aria-hidden": true },
              "● ● ●",
            ),
            h("span", null, "a space to build"),
          ),
          h(
            "div",
            { className: "clay-console-label" },
            h("span", { className: "clay-method" }, "GET"),
            h("span", null, "your next idea"),
          ),
          h(
            "div",
            {
              className: "clay-tabs",
              role: "group",
              "aria-label": "Contoh kode",
            },
            ...["request", "response"].map((item) =>
              h(
                "button",
                {
                  key: item,
                  onClick: () => setTab(item),
                  "aria-pressed": tab === item,
                },
                item === "request" ? "Request" : "Response",
              ),
            ),
            h(
              "button",
              {
                className: "clay-copy",
                onClick: copy,
                "aria-label": "Salin contoh kode",
              },
              copied ? "Tersalin ✓" : "Salin ⧉",
            ),
          ),
          h("pre", { className: "clay-code", key: tab }, h("code", null, code)),
          h(
            "div",
            { className: "clay-console-bottom" },
            h(
              "span",
              null,
              h("span", { className: "clay-dot", "aria-hidden": true }),
              "Contoh respons",
            ),
            h("span", null, "JSON · endless possibilities"),
          ),
        ),
        h(
          "div",
          { className: "clay-studio-note" },
          "Less friction. More creation.",
          h("span", { "aria-hidden": true }, "〰"),
        ),
      ),
    ),
    h(
      "div",
      { className: "clay-toast", role: "status", "aria-live": "polite" },
      notice,
    ),
  );
}
