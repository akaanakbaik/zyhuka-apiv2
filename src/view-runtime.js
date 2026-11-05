import { b as React } from "./vendor-DHMKXF-P.js";

// Keep the lazy Monitor independent of the application entry module.
const element = (type, props, key) =>
  React.createElement(type, key === undefined ? props : { ...props, key });
export const view = { jsx: element, jsxs: element, Fragment: React.Fragment };
