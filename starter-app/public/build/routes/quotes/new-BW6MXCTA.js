import {
  require_db
} from "/build/_shared/chunk-DWVSHSKJ.js";
import {
  Link
} from "/build/_shared/chunk-4WXTC2HF.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-MLBUYSNZ.js";

// app/routes/quotes/new.jsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NewQuote() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "New Quote"
          }, void 0, false, {
            fileName: "app/routes/quotes/new.jsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: "/quotes",
            className: "btn btn-reverse",
            children: "Back"
          }, void 0, false, {
            fileName: "app/routes/quotes/new.jsx",
            lineNumber: 22,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/quotes/new.jsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-content",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "form-control",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "quote",
                  children: "Quote"
                }, void 0, false, {
                  fileName: "app/routes/quotes/new.jsx",
                  lineNumber: 30,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                  name: "quote",
                  id: "quote"
                }, void 0, false, {
                  fileName: "app/routes/quotes/new.jsx",
                  lineNumber: 31,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/quotes/new.jsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "form-control",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "author",
                  children: "Author"
                }, void 0, false, {
                  fileName: "app/routes/quotes/new.jsx",
                  lineNumber: 34,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  name: "author",
                  id: "author"
                }, void 0, false, {
                  fileName: "app/routes/quotes/new.jsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/quotes/new.jsx",
              lineNumber: 33,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "btn btn-block",
              children: "Submit"
            }, void 0, false, {
              fileName: "app/routes/quotes/new.jsx",
              lineNumber: 37,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/quotes/new.jsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/quotes/new.jsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/quotes/new.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  NewQuote as default
};
//# sourceMappingURL=/build/routes/quotes/new-BW6MXCTA.js.map
