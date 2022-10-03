import {
  require_db
} from "/build/_shared/chunk-DWVSHSKJ.js";
import {
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
    className: "",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      children: quote.quoteText
    }, void 0, false, {
      fileName: "app/routes/quotes/$quoteId.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/quotes/$quoteId.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  Quote as default
};
//# sourceMappingURL=/build/routes/quotes/$quoteId-KN7BOZFM.js.map
