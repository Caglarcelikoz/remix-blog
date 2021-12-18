var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_remix2 = __toModule(require("remix"));

// app/styles/global.css
var global_default = "/build/_assets/global-UQHSMI2K.css";

// route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/root.jsx
var links = () => [{ rel: "stylesheet", href: global_default }];
var meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "remix, react, javascript";
  return {
    description,
    keywords
  };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), /* @__PURE__ */ React.createElement("title", null, title ? title : "Remix Blog")), /* @__PURE__ */ React.createElement("body", null, children, process.env.NODE_ENV === "development" ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    className: "logo"
  }, "Remix"), /* @__PURE__ */ React.createElement("ul", {
    className: "nav"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/posts"
  }, "Posts")))), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, children));
}
function ErrorBoundary({ error }) {
  console.log(error);
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message)));
}

// route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
function Home() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, "Remix is a full stack web framework by the creators of React Router. This is a simple blog app from the Traversy Media Remix crash course."));
}
var routes_default = Home;

// route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/routes/posts.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default
});
var import_remix3 = __toModule(require("remix"));
function Posts() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null));
}
var posts_default = Posts;

// route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/routes/posts/$postId.jsx
var postId_exports = {};
__export(postId_exports, {
  action: () => action,
  default: () => postId_default,
  loader: () => loader
});
var import_remix4 = __toModule(require("remix"));

// app/utils/db.server.ts
var import_client = __toModule(require("@prisma/client"));
var db;
if (process.env.NODE_ENV === "production") {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/routes/posts/$postId.jsx
var loader = async ({ params }) => {
  const post = await db.post.findUnique({
    where: { id: params.postId }
  });
  if (!post)
    throw new Error("Post not found");
  const data = { post };
  return data;
};
var action = async ({ request, params }) => {
  const form = await request.formData();
  if (form.get("_method") === "delete") {
    const post = await db.post.findUnique({
      where: { id: params.postId }
    });
    if (!post)
      throw new Error("Post not found");
    await db.post.delete({ where: { id: params.postId } });
    return (0, import_remix4.redirect)("/posts");
  }
};
function Post() {
  const { post } = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, post.title), /* @__PURE__ */ React.createElement(import_remix4.Link, {
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

// route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/routes/posts/index.jsx
var posts_exports2 = {};
__export(posts_exports2, {
  default: () => posts_default2,
  loader: () => loader2
});
var import_remix5 = __toModule(require("remix"));
var loader2 = async () => {
  const data = {
    posts: await db.post.findMany({
      take: 20,
      select: { id: true, title: true, createdAt: true },
      orderBy: { createdAt: "desc" }
    })
  };
  return data;
};
function PostItems() {
  const { posts } = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/posts/new",
    className: "btn"
  }, "New Post")), /* @__PURE__ */ React.createElement("ul", {
    className: "posts-list"
  }, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.id
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: post.id
  }, /* @__PURE__ */ React.createElement("h3", null, post.title), new Date(post.createdAt).toLocaleString())))));
}
var posts_default2 = PostItems;

// route-module:/Users/caglar/Documents/prive/remix/remix-blog/app/routes/posts/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => new_default
});
var import_remix6 = __toModule(require("remix"));
var action2 = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");
  const fields = { title, body };
  const post = await db.post.create({ data: fields });
  return (0, import_remix6.redirect)(`/posts/${post.id}`);
};
function New() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "New Post"), /* @__PURE__ */ React.createElement(import_remix6.Link, {
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

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/posts/$postId": {
    id: "routes/posts/$postId",
    parentId: "routes/posts",
    path: ":postId",
    index: void 0,
    caseSensitive: void 0,
    module: postId_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "routes/posts",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: posts_exports2
  },
  "routes/posts/new": {
    id: "routes/posts/new",
    parentId: "routes/posts",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
