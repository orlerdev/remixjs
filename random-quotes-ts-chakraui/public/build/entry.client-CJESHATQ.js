import {
  ClientStyleContext
} from "/build/_shared/chunk-7G7KN2XZ.js";
import {
  RemixBrowser,
  __commonJS,
  __toESM,
  require_emotion_cache_cjs,
  require_emotion_react_cjs,
  require_jsx_dev_runtime,
  require_react,
  require_react_dom
} from "/build/_shared/chunk-ULLK2H73.js";

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// app/entry.client.tsx
var import_client = __toESM(require_client());
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_emotion_react_cjs());

// app/createEmotionCache.ts
var import_cache = __toESM(require_emotion_cache_cjs());
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ClientCacheProvider({ children }) {
  const [cache, setCache] = (0, import_react2.useState)(createEmotionCache());
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientStyleContext.Provider, {
    value: { reset },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.CacheProvider, {
      value: cache,
      children
    }, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
(0, import_client.hydrateRoot)(
  document,
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientCacheProvider, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 29,
    columnNumber: 3
  }, this)
);
//# sourceMappingURL=/build/entry.client-CJESHATQ.js.map
