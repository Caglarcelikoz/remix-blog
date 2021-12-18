import {
  LiveReload,
  Meta,
  import_react_router_dom
} from "/build/_shared/chunk-KBF6V6V2.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();
var meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "remix, react, javascript";
  return {
    description,
    keywords
  };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement("title", null, title ? title : "Remix Blog")), /* @__PURE__ */ React.createElement("body", null, children, true ? /* @__PURE__ */ React.createElement(LiveReload, null) : null));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-MXBUWLVQ.js.map
