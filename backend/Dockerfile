# syntax=docker/dockerfile:1
FROM node:22-bookworm-slim
WORKDIR /app
COPY --chmod=0644 package.json package-lock.json ./
RUN --mount=type=secret,id=proxy_ca \
    if [ -f /run/secrets/proxy_ca ]; then export NODE_EXTRA_CA_CERTS=/run/secrets/proxy_ca; fi; \
    npm ci --omit=dev --strict-ssl=true && npm cache clean --force
COPY --chown=node:node src ./src
USER node
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3100
EXPOSE 3100
CMD ["node", "src/server.js"]
