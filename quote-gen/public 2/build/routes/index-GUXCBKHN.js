import {
  __toESM,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-TKUQC4AV.js";

// app/routes/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function QuoteCard() {
  const quotes = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "quote-box",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Here's your random quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text",
        children: "Quote Text"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "author",
        children: "Quote Author"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        className: "new-quote",
        children: "New Quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
        href: "twitter.com/intent/tweet",
        className: "tweet-quote",
        children: "Tweet Quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
export {
  QuoteCard as default
};
//# sourceMappingURL=/build/routes/index-GUXCBKHN.js.map
