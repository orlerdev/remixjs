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

// app/styles/global.css
var global_default = "/build/_assets/global-Q42Y4PMN.css";

// app/root.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: global_default }], meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
  description: "Basic app using Remix.js",
  keywords: "remix, react, javascript, beginner"
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
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
            to: "/",
            className: "logo",
            children: "Random Quote Generator"
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            className: "nav",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
                to: "/quotes",
                children: "Quotes"
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 51,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 50,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 49,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container",
        children
      }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 56,
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
            lineNumber: 69,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: error.message
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 70,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

// app/routes/quotes.jsx
var quotes_exports = {};
__export(quotes_exports, {
  default: () => Quotes
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Quotes() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/quotes.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/quotes.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/quotes/$quoteId.jsx
var quoteId_exports = {};
__export(quoteId_exports, {
  action: () => action,
  default: () => Quote,
  loader: () => loader
});
var import_react4 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), db = global.__db;

// app/routes/quotes/$quoteId.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async ({ params }) => {
  let quote = await db.quote.findUnique({
    where: { id: params.quoteId }
  });
  if (!quote)
    throw new Error("Quote not found");
  return { quote };
}, action = async ({ request, params }) => {
  if ((await request.formData()).get("_method") === "delete") {
    if (!await db.quote.findUnique({
      where: { id: params.quoteId }
    }))
      throw new Error("Quote not found");
    return await db.quote.delete({ where: { id: params.quoteId } }), (0, import_node2.redirect)("/quotes");
  }
};
function Quote() {
  let { quote } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: quote.quoteText
          }, void 0, !1, {
            fileName: "app/routes/quotes/$quoteId.jsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
            to: "/quotes",
            className: "btn btn-reverse",
            children: "Back"
          }, void 0, !1, {
            fileName: "app/routes/quotes/$quoteId.jsx",
            lineNumber: 36,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/quotes/$quoteId.jsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-content",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: quote.quoteAuthor
        }, void 0, !1, {
          fileName: "app/routes/quotes/$quoteId.jsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/quotes/$quoteId.jsx",
        lineNumber: 40,
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
            }, void 0, !1, {
              fileName: "app/routes/quotes/$quoteId.jsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "btn btn-delete",
              children: "Delete"
            }, void 0, !1, {
              fileName: "app/routes/quotes/$quoteId.jsx",
              lineNumber: 46,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/quotes/$quoteId.jsx",
          lineNumber: 44,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/quotes/$quoteId.jsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/quotes/$quoteId.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/quotes/index.jsx
var quotes_exports2 = {};
__export(quotes_exports2, {
  action: () => action2,
  default: () => QuoteItems,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react"), import_node3 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action2 = () => (0, import_node3.redirect)("/posts/new"), loader2 = async () => ({
  quotes: await db.quote.findMany({
    take: 5,
    select: { id: !0, quoteText: !0, quoteAuthor: !0 },
    orderBy: { createdAt: "desc" }
  })
});
function QuoteItems() {
  let { quotes } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Quotes"
          }, void 0, !1, {
            fileName: "app/routes/quotes/index.jsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
            to: "/quotes/new",
            className: "btn",
            children: "New Quote"
          }, void 0, !1, {
            fileName: "app/routes/quotes/index.jsx",
            lineNumber: 26,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/quotes/index.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        className: "posts-list",
        children: quotes.map((quote) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
            to: quote.id,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                children: quote.quoteText
              }, void 0, !1, {
                fileName: "app/routes/quotes/index.jsx",
                lineNumber: 34,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: quote.quoteAuthor
              }, void 0, !1, {
                fileName: "app/routes/quotes/index.jsx",
                lineNumber: 35,
                columnNumber: 15
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/quotes/index.jsx",
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, quote.id, !1, {
          fileName: "app/routes/quotes/index.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/quotes/index.jsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/quotes/index.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/quotes/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action3,
  default: () => NewQuote
});
var import_react6 = require("@remix-run/react"), import_node4 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  let form = await request.formData(), quoteText = form.get("quote"), quoteAuthor = form.get("author"), fields = { quoteText, quoteAuthor }, quote = await db.quote.create({ data: fields });
  return (0, import_node4.redirect)(`/quotes/${quote.id}`);
};
function NewQuote() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "New Quote"
          }, void 0, !1, {
            fileName: "app/routes/quotes/new.jsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Link, {
            to: "/quotes",
            className: "btn btn-reverse",
            children: "Back"
          }, void 0, !1, {
            fileName: "app/routes/quotes/new.jsx",
            lineNumber: 22,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
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
                }, void 0, !1, {
                  fileName: "app/routes/quotes/new.jsx",
                  lineNumber: 30,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                  name: "quote",
                  id: "quote"
                }, void 0, !1, {
                  fileName: "app/routes/quotes/new.jsx",
                  lineNumber: 31,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
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
                }, void 0, !1, {
                  fileName: "app/routes/quotes/new.jsx",
                  lineNumber: 34,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  name: "author",
                  id: "author"
                }, void 0, !1, {
                  fileName: "app/routes/quotes/new.jsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/quotes/new.jsx",
              lineNumber: 33,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "btn btn-block",
              children: "Submit"
            }, void 0, !1, {
              fileName: "app/routes/quotes/new.jsx",
              lineNumber: 37,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/quotes/new.jsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/quotes/new.jsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/quotes/new.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      children: "Random Quote Generator"
    }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "cc0df62a", entry: { module: "/build/entry.client-6FSMFW6F.js", imports: ["/build/_shared/chunk-5XRGLJCI.js", "/build/_shared/chunk-MLBUYSNZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-S5VNKLXP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-FG4F2Q6B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/quotes": { id: "routes/quotes", parentId: "root", path: "quotes", index: void 0, caseSensitive: void 0, module: "/build/routes/quotes-NUOZSKW7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/quotes/$quoteId": { id: "routes/quotes/$quoteId", parentId: "routes/quotes", path: ":quoteId", index: void 0, caseSensitive: void 0, module: "/build/routes/quotes/$quoteId-CDWBY47G.js", imports: ["/build/_shared/chunk-DWVSHSKJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/quotes/index": { id: "routes/quotes/index", parentId: "routes/quotes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/quotes/index-DFVF2LCD.js", imports: ["/build/_shared/chunk-DWVSHSKJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/quotes/new": { id: "routes/quotes/new", parentId: "routes/quotes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/quotes/new-MATVU2YQ.js", imports: ["/build/_shared/chunk-DWVSHSKJ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-CC0DF62A.js" };

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
  "routes/quotes": {
    id: "routes/quotes",
    parentId: "root",
    path: "quotes",
    index: void 0,
    caseSensitive: void 0,
    module: quotes_exports
  },
  "routes/quotes/$quoteId": {
    id: "routes/quotes/$quoteId",
    parentId: "routes/quotes",
    path: ":quoteId",
    index: void 0,
    caseSensitive: void 0,
    module: quoteId_exports
  },
  "routes/quotes/index": {
    id: "routes/quotes/index",
    parentId: "routes/quotes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: quotes_exports2
  },
  "routes/quotes/new": {
    id: "routes/quotes/new",
    parentId: "routes/quotes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
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
