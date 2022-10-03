import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-TKUQC4AV.js";

// app/routes/index.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function QuoteCard() {
  const quotes = useLoaderData();
  const [index, setIndex] = (0, import_react.useState)();
  const randomIndex = () => {
    const index2 = Math.floor(Math.random() * quotes.length);
    setIndex(index2);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    id: "quote-box",
    className: "quote-box",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Here's your random quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        id: "text",
        className: "text",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          children: quotes[index] && quotes[index].quoteText
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 25,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        id: "author",
        className: "author",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: quotes[index] && quotes[index].author
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 26,
          columnNumber: 43
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        id: "new-quote",
        className: "new-quote",
        onClick: randomIndex,
        children: "New Quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
        id: "tweet-quote",
        href: "twitter.com/intent/tweet",
        className: "tweet-quote",
        children: "Tweet Quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
export {
  QuoteCard as default
};
//# sourceMappingURL=/build/routes/index-MGOAZ3MP.js.map
