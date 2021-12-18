import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-6ZQ6M4IZ.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// empty-module:~/utils/db.server
var require_db = __commonJS({
  "empty-module:~/utils/db.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/routes/posts/index.jsx?browser
init_react();

// app/routes/posts/index.jsx
init_react();
var import_db = __toModule(require_db());
function PostItems() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement(Link, {
    to: "/posts/new",
    className: "btn"
  }, "New Post")), /* @__PURE__ */ React.createElement("ul", {
    className: "posts-list"
  }, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.id
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.id
  }, /* @__PURE__ */ React.createElement("h3", null, post.title), new Date(post.createdAt).toLocaleString())))));
}
var posts_default = PostItems;
export {
  posts_default as default
};
//# sourceMappingURL=/build/routes/posts/index-4E6CQQUG.js.map
