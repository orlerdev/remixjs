import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-SW6QLKHY.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3CPB4T5C.js";
import {
  __toESM
} from "/build/_shared/chunk-42Z7WWMI.js";

// app/styles/global.css
var global_default = "/build/_assets/global-UKUOS44S.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [{ rel: "stylesheet", href: global_default }];
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
  description: "Basic app using Remix.js",
  keywords: "remix, react, javascript, beginner"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 17,
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
            lineNumber: 29,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 30,
            columnNumber: 7
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 34,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 35,
            columnNumber: 5
          }, this),
          true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 36,
            columnNumber: 47
          }, this) : null
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 5
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        className: "navbar",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: "/",
            className: "logo",
            children: "Remix"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            className: "nav",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                to: "/posts",
                children: "Posts"
              }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 52,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 51,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 50,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container",
        children
      }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 57,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-CAIOGV5K.js.map