var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: chunks.styles,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@emotion/react"), import_react6 = require("@chakra-ui/react"), import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let cookies = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.ChakraProvider, {
      theme: import_react6.theme,
      colorModeManager: typeof cookies == "string" ? (0, import_react6.cookieStorageManagerSSR)(cookies) : import_react6.localStorageManager,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var loader = async ({ request }) => request.headers.get("cookie") ?? "", links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
], Document = (0, import_react5.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverStyleData = (0, import_react4.useContext)(ServerStyleContext), clientStyleData = (0, import_react4.useContext)(ClientStyleContext);
    (0, import_react4.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []);
    let theme2 = (0, import_react6.extendTheme)({ colors: {
      brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac"
      }
    } });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 76,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 77,
              columnNumber: 9
            }, this),
            serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
              "data-emotion": `${key} ${ids.join(" ")}`,
              dangerouslySetInnerHTML: { __html: css }
            }, key, !1, {
              fileName: "app/root.tsx",
              lineNumber: 79,
              columnNumber: 11
            }, this))
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 88,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 89,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 90,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 86,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this);
  }
);

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => QuoteCard,
  loader: () => loader2
});
var import_react8 = require("react"), import_react9 = require("@remix-run/react"), import_react10 = require("@chakra-ui/react"), import_fa = require("react-icons/fa"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = () => ({
  quotes: [
    {
      quoteText: "All our dreams can come true, if we have the courage to pursue them.",
      quoteAuthor: "Walt Disney"
    },
    {
      quoteText: "The secret of getting ahead is getting started.",
      quoteAuthor: "Mark Twain"
    },
    {
      quoteText: "I\u2019ve missed more than 9,000 shots in my career. I\u2019ve lost almost 300 games. 26 times I\u2019ve been trusted to take the game winning shot and missed. I\u2019ve failed over and over and over again in my life, and that is why I succeed.",
      quoteAuthor: "Michael Jordan"
    },
    {
      quoteText: "The best time to plant a tree was 20 years ago. The second best time is now.",
      quoteAuthor: "Chinese Proverb"
    },
    {
      quoteText: "It\u2019s hard to beat a person who never gives up.",
      quoteAuthor: "Babe Ruth"
    },
    {
      quoteText: "You\u2019ve gotta dance like there\u2019s nobody watching, love like you\u2019ll never be hurt, sing like there\u2019s nobody listening, and live like it\u2019s heaven on earth.",
      quoteAuthor: "William W. Purkey"
    },
    {
      quoteText: "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
      quoteAuthor: "Socrates"
    },
    {
      quoteText: "Whatever you are, be a good one.",
      quoteAuthor: "Abraham Lincoln"
    },
    {
      quoteText: "If something is important enough, even if the odds are stacked against you, you should still do it.",
      quoteAuthor: "Elon Musk"
    },
    {
      quoteText: "Hold the vision, trust the process.",
      quoteAuthor: "Unknown"
    },
    {
      quoteText: "One day or day one. You decide.",
      quoteAuthor: "Unknown"
    },
    {
      quoteText: "Work like there is someone working 24 hours a day to take it away from you.",
      quoteAuthor: "Mark Cuban"
    },
    {
      quoteText: "Hustle in silence and let your success make the noise.",
      quoteAuthor: "Unknown"
    },
    {
      quoteText: "Some people want it to happen, some wish it would happen, others make it happen.",
      quoteAuthor: "Michael Jordan"
    },
    {
      quoteText: "Great things are done by a series of small things brought together.",
      quoteAuthor: "Vincent Van Goh"
    },
    {
      quoteText: "If you hire people just because they can do a job, they\u2019ll work for your money. But if you hire people who believe what you believe, they\u2019ll work for you with blood and sweat and tears.",
      quoteAuthor: "Simon Sinek"
    },
    {
      quoteText: "Keep your eyes on the stars, and your feet on the ground.",
      quoteAuthor: "Theodore Roosevelt"
    },
    {
      quoteText: "Wake up determined, go to bed satisfied.",
      quoteAuthor: "Dwayne Johnson"
    },
    {
      quoteText: "The best way to appreciate your job is to imagine yourself without one.",
      quoteAuthor: "Oscar Wilde"
    },
    {
      quoteText: "The miracle is not that we do this work, but that we are happy to do it.",
      quoteAuthor: "Mother Teresa"
    }
  ]
});
function QuoteCard() {
  let { quotes } = (0, import_react9.useLoaderData)(), random = Math.floor(Math.random() * quotes.length), [quote, setQuote] = (0, import_react8.useState)(quotes[random].quoteText), [author, setAuthor] = (0, import_react8.useState)(quotes[random].quoteAuthor);
  function randomQuote() {
    let index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index].quoteText), setAuthor(quotes[index].quoteAuthor), console.log(quote, author);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Box, {
      id: "quote-box",
      className: "quote-box",
      maxW: "100%",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Flex, {
        flexDirection: "column",
        m: "40px",
        maxW: "35%",
        boxShadow: "2xl",
        rounded: "lg",
        mx: "auto",
        bg: "blue.900",
        color: "white",
        p: "20px",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Text, {
            textAlign: "center",
            fontSize: "4xl",
            id: "quote",
            w: "100%",
            mx: "auto",
            children: [
              '"',
              quote,
              '"'
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 118,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Text, {
            textAlign: "right",
            fontSize: "2xl",
            id: "author",
            children: [
              "- ",
              author
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 119,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.ButtonGroup, {
            alignSelf: "center",
            variant: "outline",
            spacing: "6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Button, {
                id: "new-quote",
                colorScheme: "whiteAlpha",
                variant: "outline",
                size: "lg",
                onClick: randomQuote,
                children: "New Quote"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 121,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                id: "tweet-quote",
                href: "https://www.twitter.com/intent/tweet",
                target: "_blank",
                rel: "noreferrer",
                className: "twitter-share-button",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Button, {
                  size: "lg",
                  colorScheme: "whiteAlpha",
                  variant: "solid",
                  leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Icon, {
                    as: import_fa.FaTwitter
                  }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 122,
                    columnNumber: 212
                  }, this),
                  children: "Tweet Quote"
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 122,
                  columnNumber: 143
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 122,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 120,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8362c127", entry: { module: "/build/entry.client-CJESHATQ.js", imports: ["/build/_shared/chunk-7G7KN2XZ.js", "/build/_shared/chunk-ULLK2H73.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-62SCIIOB.js", imports: ["/build/_shared/chunk-NCYQB4WO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-K6AOHALW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-8362C127.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
