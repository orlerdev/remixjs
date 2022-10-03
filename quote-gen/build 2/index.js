var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

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

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-S4FDM4XE.css";

// app/root.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Random Quote Generator",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 28,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 29,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 33,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 34,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 35,
            columnNumber: 47
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 5
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        className: "navbar",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: "Random Quote Generator with Remix"
        }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container",
        children
      }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Error"
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 60,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: error.message
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 61,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => QuoteCard,
  loader: () => loader
});
var import_react3 = require("react"), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = () => ({
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
  let { quotes } = (0, import_react4.useLoaderData)(), [index, setIndex] = (0, import_react3.useState)(Math.floor(Math.random() * quotes.length)), [quote, setQuote] = (0, import_react3.useState)("This app is amazing!"), [author, setAuthor] = (0, import_react3.useState)("Everyone");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    id: "quote-box",
    className: "quote-box",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-3xl font-bold underline",
        children: "Your Random Quote"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 107,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        id: "quote",
        children: [
          '"',
          quote,
          '"'
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 108,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        id: "author",
        children: [
          "- ",
          author
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 109,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        id: "new-quote",
        className: "new-quote",
        onClick: () => {
          let random = Math.floor(Math.random() * quotes.length);
          setIndex(random), setQuote(quotes[index].quoteText), setAuthor(quotes[index].quoteAuthor), console.log(quote, author);
        },
        children: "New Quote"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 110,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
        id: "tweet-quote",
        href: "twitter.com/intent/tweet",
        target: "_blank",
        className: "tweet-quote",
        children: "Tweet Quote"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 111,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b317fdcb", entry: { module: "/build/entry.client-6V5NBQMO.js", imports: ["/build/_shared/chunk-SDTBA6VD.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ATSH3NMI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-G3GATFL7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-B317FDCB.js" };

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
