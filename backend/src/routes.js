import { createHash, randomInt, randomUUID } from "node:crypto";

const text = { type: "string", minLength: 1, maxLength: 8192 };
export const routes = [
  {
    path: "/api/tools/base64",
    tag: "Tools",
    summary: "Base64 encode / decode",
    properties: {
      text,
      action: { type: "string", enum: ["encode", "decode"], default: "encode" },
    },
    required: ["text"],
    run(input) {
      if (input.action === "encode")
        return {
          result: Buffer.from(input.text, "utf8").toString("base64"),
          action: "encode",
        };
      try {
        if (
          !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            input.text,
          )
        )
          throw new Error();
        const bytes = Buffer.from(input.text, "base64");
        if (bytes.toString("base64") !== input.text) throw new Error();
        return {
          result: new TextDecoder("utf-8", { fatal: true }).decode(bytes),
          action: "decode",
        };
      } catch {
        throw Object.assign(
          new Error("Input harus berupa Base64 UTF-8 yang valid."),
          { statusCode: 400 },
        );
      }
    },
  },
  {
    path: "/api/tools/hash",
    tag: "Tools",
    summary: "Hash SHA-256 / SHA-512",
    properties: {
      text,
      algorithm: {
        type: "string",
        enum: ["sha256", "sha512"],
        default: "sha256",
      },
    },
    required: ["text"],
    run: (input) => ({
      algorithm: input.algorithm,
      result: createHash(input.algorithm)
        .update(input.text, "utf8")
        .digest("hex"),
    }),
  },
  {
    path: "/api/tools/uuid",
    tag: "Tools",
    summary: "Generate UUID v4",
    properties: {
      count: { type: "integer", minimum: 1, maximum: 10, default: 1 },
    },
    required: [],
    run: (input) => ({
      version: 4,
      result: Array.from({ length: input.count }, () => randomUUID()),
    }),
  },
  {
    path: "/api/games/maths",
    tag: "Games",
    summary: "Soal matematika acak",
    properties: {
      level: {
        type: "string",
        enum: [
          "noob",
          "easy",
          "medium",
          "hard",
          "extreme",
          "impossible",
          "impossible2",
          "impossible3",
          "impossible4",
          "impossible5",
        ],
        default: "easy",
      },
    },
    required: [],
    run(input) {
      const limits = {
        noob: 10,
        easy: 20,
        medium: 100,
        hard: 1000,
        extreme: 10000,
        impossible: 20000,
        impossible2: 50000,
        impossible3: 100000,
        impossible4: 500000,
        impossible5: 1000000,
      };
      const a = randomInt(1, limits[input.level] + 1),
        b = randomInt(1, limits[input.level] + 1);
      const operation = input.level === "noob" ? 0 : randomInt(0, 4);
      const questions = [
        [`${a} + ${b}`, a + b],
        [`${a} - ${b}`, a - b],
        [`${a} × ${b}`, a * b],
        [`${a * b} ÷ ${b}`, a],
      ];
      return {
        level: input.level,
        question: questions[operation][0],
        answer: questions[operation][1],
      };
    },
  },
  {
    path: "/api/system/info",
    tag: "System",
    summary: "Informasi proses API Zyhuka",
    properties: {},
    required: [],
    run: () => ({
      service: "zyhuka-api",
      version: "0.1.0",
      uptime_seconds: Math.floor(process.uptime()),
      runtime: process.version,
      memory_rss_bytes: process.memoryUsage().rss,
    }),
  },
];

export function openapi(origin) {
  const paths = {};
  for (const route of routes) {
    const input = {
      type: "object",
      additionalProperties: false,
      properties: route.properties,
      required: route.required,
    };
    const base = {
      tags: [route.tag],
      summary: route.summary,
      responses: {
        200: {
          description: "Hasil endpoint; success=true dan data berisi hasil.",
        },
        400: { description: "Input tidak valid." },
        429: { description: "Terlalu banyak request." },
      },
    };
    paths[route.path] = {
      get: {
        ...base,
        parameters: Object.entries(route.properties).map(([name, schema]) => ({
          name,
          in: "query",
          required: route.required.includes(name),
          schema,
          example:
            schema.default ?? (name === "text" ? "Halo Zyhuka" : undefined),
        })),
      },
      post: {
        ...base,
        requestBody: {
          required: true,
          content: { "application/json": { schema: input } },
        },
      },
    };
  }
  return {
    openapi: "3.0.3",
    info: {
      title: "API ZYHUKA",
      version: "0.1.0",
      description:
        "Endpoint mandiri yang telah diimplementasikan. Tidak meneruskan request ke API referensi.",
    },
    servers: [{ url: origin }],
    paths,
  };
}
