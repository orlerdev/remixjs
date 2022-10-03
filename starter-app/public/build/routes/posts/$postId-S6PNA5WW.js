import {
  useParams
} from "/build/_shared/chunk-7JTCNXYO.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-MLBUYSNZ.js";

// app/routes/posts/$postId.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Post() {
  const params = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      children: [
        "Post ",
        params.postId
      ]
    }, void 0, true, {
      fileName: "app/routes/posts/$postId.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/$postId.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
export {
  Post as default
};
//# sourceMappingURL=/build/routes/posts/$postId-S6PNA5WW.js.map
