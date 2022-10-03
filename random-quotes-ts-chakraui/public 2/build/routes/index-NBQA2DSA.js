import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Text
} from "/build/_shared/chunk-NCYQB4WO.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-ULLK2H73.js";

// app/routes/index.tsx
var import_react3 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/fa/index.esm.js
function FaTwitter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" } }] })(props);
}

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function QuoteCard() {
  const { quotes } = useLoaderData();
  const [index, setIndex] = (0, import_react3.useState)(Math.floor(Math.random() * quotes.length));
  const [quote, setQuote] = (0, import_react3.useState)("This app is amazing!");
  const [author, setAuthor] = (0, import_react3.useState)("Everyone");
  function randomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
    setQuote(quotes[index].quoteText);
    setAuthor(quotes[index].quoteAuthor);
    console.log(quote, author);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
      id: "quote-box",
      className: "quote-box",
      maxW: "100%",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            textAlign: "center",
            fontSize: "5xl",
            id: "quote",
            w: "100%",
            mx: "auto",
            children: [
              '"',
              quote,
              '"'
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 118,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            textAlign: "right",
            fontSize: "3xl",
            id: "author",
            children: [
              "- ",
              author
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 119,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonGroup, {
            alignSelf: "center",
            variant: "outline",
            spacing: "6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                id: "new-quote",
                colorScheme: "whiteAlpha",
                variant: "outline",
                size: "lg",
                onClick: randomQuote,
                children: "New Quote"
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 121,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                id: "tweet-quote",
                href: "https://www.twitter.com/intent/tweet",
                target: "_blank",
                className: "tweet-quote",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                  size: "lg",
                  colorScheme: "whiteAlpha",
                  variant: "solid",
                  leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
                    as: FaTwitter
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 122,
                    columnNumber: 186
                  }, this),
                  children: "Tweet Quote"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 122,
                  columnNumber: 117
                }, this)
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 122,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 120,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}
export {
  QuoteCard as default
};
//# sourceMappingURL=/build/routes/index-NBQA2DSA.js.map
