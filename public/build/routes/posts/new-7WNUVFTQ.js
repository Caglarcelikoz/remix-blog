import {
  Link
} from "/build/_shared/chunk-6ZQ6M4IZ.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/routes/posts/new.jsx?browser
init_react();

// app/routes/posts/new.jsx
init_react();
function New() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "New Post"), /* @__PURE__ */ React.createElement(Link, {
    to: "/posts",
    className: "btn btn-reverse"
  }, "Back")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "body"
  }, "Post Body"), /* @__PURE__ */ React.createElement("textarea", {
    name: "body",
    id: "body"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-block"
  }, "Add Post"))));
}
var new_default = New;
export {
  new_default as default
};
//# sourceMappingURL=/build/routes/posts/new-7WNUVFTQ.js.map
