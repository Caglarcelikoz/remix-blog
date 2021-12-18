import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-6ZQ6M4IZ.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/routes/posts/$postId.jsx?browser
init_react();

// app/routes/posts/$postId.jsx
init_react();
var import_db = __toModule(require_db());
function Post() {
  const { post } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, post.title), /* @__PURE__ */ React.createElement(Link, {
    to: "/posts",
    className: "btn btn-reverse"
  }, "Back")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }, post.body), /* @__PURE__ */ React.createElement("div", {
    className: "page-footer"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-delete"
  }, "Delete"))));
}
var postId_default = Post;
export {
  postId_default as default
};
//# sourceMappingURL=/build/routes/posts/$postId-LWYGLGAM.js.map
