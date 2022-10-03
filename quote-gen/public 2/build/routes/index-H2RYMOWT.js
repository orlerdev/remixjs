import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-TKUQC4AV.js";

// app/routes/index.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function QuoteCard() {
  const { quotes } = useLoaderData();
  const [index, setIndex] = (0, import_react.useState)(Math.floor(Math.random() * quotes.length));
  const [quote, setQuote] = (0, import_react.useState)("Your new quote will go here");
  const [author, setAuthor] = (0, import_react.useState)("The author of your new quote will go here");
  const randomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
    setQuote(quotes[index].quoteText);
    setAuthor(quotes[index].quoteAuthor);
    console.log(quote, author);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    id: "quote-box",
    className: "quote-box",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Here's your random quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 107,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        id: "quote",
        children: quote
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 108,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        id: "author",
        children: author
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 109,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        id: "new-quote",
        className: "new-quote",
        onClick: randomQuote,
        children: "New Quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 110,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
        id: "tweet-quote",
        href: "twitter.com/intent/tweet",
        className: "tweet-quote",
        children: "Tweet Quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 111,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}
export {
  QuoteCard as default
};
//# sourceMappingURL=/build/routes/index-H2RYMOWT.js.map
