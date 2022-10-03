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

// app/routes/quotes/$quoteId.jsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Quote() {
  const { quote } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: quote.quoteText
          }, void 0, false, {
            fileName: "app/routes/quotes/$quoteId.jsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: "/quotes",
            className: "btn btn-reverse",
            children: "Back"
          }, void 0, false, {
            fileName: "app/routes/quotes/$quoteId.jsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/quotes/$quoteId.jsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-content",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: quote.quoteAuthor
        }, void 0, false, {
          fileName: "app/routes/quotes/$quoteId.jsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/quotes/$quoteId.jsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-footer",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "_method",
              value: "delete"
            }, void 0, false, {
              fileName: "app/routes/quotes/$quoteId.jsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "btn btn-delete",
              children: "Delete"
            }, void 0, false, {
              fileName: "app/routes/quotes/$quoteId.jsx",
              lineNumber: 44,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/quotes/$quoteId.jsx",
          lineNumber: 42,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/quotes/$quoteId.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/quotes/$quoteId.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export {
  Quote as default
};
//# sourceMappingURL=/build/routes/quotes/$quoteId-TCX6KNZX.js.map
