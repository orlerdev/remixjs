import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-IE366Y5W.js";

// app/routes/index.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var quotes = [
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
];
function QuoteCard() {
  const [index, setIndex] = (0, import_react.useState)();
  const [quote, setQuote] = (0, import_react.useState)("Your new quote will go here");
  const [author, setAuthor] = (0, import_react.useState)("The author of your new quote will go here");
  const randomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
    setQuote(quotes[index].quoteText);
    setAuthor(quotes[index].author);
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
        lineNumber: 102,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        id: "quote",
        children: quote
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 103,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        id: "author",
        children: author
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 104,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        id: "new-quote",
        className: "new-quote",
        onClick: randomQuote,
        children: "New Quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 105,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
        id: "tweet-quote",
        href: "twitter.com/intent/tweet",
        className: "tweet-quote",
        children: "Tweet Quote"
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 106,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
export {
  QuoteCard as default
};
//# sourceMappingURL=/build/routes/index-OXVL65GT.js.map
