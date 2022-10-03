import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-XBKDOY5D.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-IE366Y5W.js";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "Random Quote Generator",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 23,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 24,
            columnNumber: 7
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 28,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 29,
            columnNumber: 5
          }, this),
          true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 30,
            columnNumber: 47
          }, this) : null
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 5
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        className: "navbar",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
          to: "/",
          className: "navLogo",
          children: "Random Quote"
        }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 40,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container",
        children
      }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  console.log(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Error"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 57,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: error.message
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 58,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary,
  App as default,
  meta
};
//# sourceMappingURL=/build/root-RVM6SE5D.js.map
