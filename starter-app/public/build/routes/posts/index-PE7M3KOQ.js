import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-4WXTC2HF.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-MLBUYSNZ.js";

// app/routes/posts/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostItems() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Posts"
          }, void 0, false, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 122,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: "/posts/new",
            className: "btn",
            children: "New Post"
          }, void 0, false, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 123,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 121,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        className: "posts-list",
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: post.id,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                children: post.quoteText
              }, void 0, false, {
                fileName: "app/routes/posts/index.jsx",
                lineNumber: 131,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: post.quoteAuthor
              }, void 0, false, {
                fileName: "app/routes/posts/index.jsx",
                lineNumber: 132,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 130,
            columnNumber: 13
          }, this)
        }, post.id, false, {
          fileName: "app/routes/posts/index.jsx",
          lineNumber: 129,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 127,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/index.jsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
}
export {
  PostItems as default
};
//# sourceMappingURL=/build/routes/posts/index-PE7M3KOQ.js.map
