import {
  require_db
} from "/build/_shared/chunk-DWVSHSKJ.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-5XRGLJCI.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-MLBUYSNZ.js";

// app/routes/quotes/index.jsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function QuoteItems() {
  const { quotes } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Quotes"
          }, void 0, false, {
            fileName: "app/routes/quotes/index.jsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: "/quotes/new",
            className: "btn",
            children: "New Quote"
          }, void 0, false, {
            fileName: "app/routes/quotes/index.jsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/quotes/index.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        className: "posts-list",
        children: quotes.map((quote) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: quote.id,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                children: quote.quoteText
              }, void 0, false, {
                fileName: "app/routes/quotes/index.jsx",
                lineNumber: 35,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: quote.quoteAuthor
              }, void 0, false, {
                fileName: "app/routes/quotes/index.jsx",
                lineNumber: 36,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/quotes/index.jsx",
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, quote.id, false, {
          fileName: "app/routes/quotes/index.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: "app/routes/quotes/index.jsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/quotes/index.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  QuoteItems as default
};
//# sourceMappingURL=/build/routes/quotes/index-BO5XJH4U.js.map
