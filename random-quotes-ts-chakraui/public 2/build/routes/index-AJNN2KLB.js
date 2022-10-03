import {
  Box,
  Button,
  Container,
  Text
} from "/build/_shared/chunk-XS2YI7ZK.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-ULLK2H73.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function QuoteCard() {
  const { quotes } = useLoaderData();
  const [index, setIndex] = (0, import_react.useState)(Math.floor(Math.random() * quotes.length));
  const [quote, setQuote] = (0, import_react.useState)("This app is amazing!");
  const [author, setAuthor] = (0, import_react.useState)("Everyone");
  function randomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
    setQuote(quotes[index].quoteText);
    setAuthor(quotes[index].quoteAuthor);
    console.log(quote, author);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
      maxW: "lg",
      bg: "blue.600",
      color: "white",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        id: "quote-box",
        className: "quote-box",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            fontSize: "5xl",
            id: "quote",
            children: [
              '"',
              quote,
              '"'
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 116,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            id: "author",
            children: [
              "- ",
              author
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 117,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
            id: "new-quote",
            colorScheme: "teal",
            size: "md",
            onClick: randomQuote,
            children: "New Quote"
          }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 118,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            id: "tweet-quote",
            href: "twitter.com/intent/tweet",
            target: "_blank",
            className: "tweet-quote",
            children: "Tweet Quote"
          }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 119,
            columnNumber: 7
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 115,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 114,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}
export {
  QuoteCard as default
};
//# sourceMappingURL=/build/routes/index-AJNN2KLB.js.map
