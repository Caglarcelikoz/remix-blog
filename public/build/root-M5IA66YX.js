import {
  Link,
  LiveReload,
  import_react_router_dom
} from "/build/_shared/chunk-TSY53ECP.js";
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
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("title", null, title ? title : "Remix Blog")), /* @__PURE__ */ React.createElement("body", null, children, true ? /* @__PURE__ */ React.createElement(LiveReload, null) : null));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "logo"
  }, "Remix"), /* @__PURE__ */ React.createElement("ul", {
    className: "nav"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/posts"
  }, "Posts")))), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, children));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-M5IA66YX.js.map
