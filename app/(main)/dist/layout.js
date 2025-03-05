"use strict";
exports.__esModule = true;
require("./blog/[slug]/blog.css");
var react_1 = require("@vercel/analytics/react");
var react_2 = require("react");
var Footer_1 = require("~/app/(main)/Footer");
var Header_1 = require("~/app/(main)/Header");
var QueryProvider_1 = require("~/app/QueryProvider");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
function BlogLayout(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "pointer-events-none fixed inset-0 select-none bg-top bg-repeat]" }),
        React.createElement("span", { className: "pointer-events-none fixed top-0 block h-[800px] w-full select-none bg-[radial-gradient(103.72%_46.58%_at_50%_0%,rgba(5,5,5,0.045)_0%,rgba(0,0,0,0)_100%)] dark:bg-[radial-gradient(103.72%_46.58%_at_50%_0%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0)_100%)]" }),
        React.createElement(QueryProvider_1.QueryProvider, null,
            React.createElement("div", { className: "relative text-zinc-800 dark:text-zinc-200" },
                React.createElement(Header_1.Header, null),
                React.createElement("main", null, children),
                React.createElement(react_2.Suspense, null,
                    React.createElement(Footer_1.Footer, null)))),
        React.createElement(react_1.Analytics, null)));
}
exports["default"] = BlogLayout;
