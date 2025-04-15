"use strict";
exports.__esModule = true;
exports.ProjectCard = void 0;
var badge_1 = require("~/components/ui/badge");
var card_c1_1 = require("~/components/ui/card-c1");
var utils_1 = require("~/lib/utils");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_markdown_1 = require("react-markdown");
function ProjectCard(_a) {
    var title = _a.title, href = _a.href, description = _a.description, dates = _a.dates, tags = _a.tags, link = _a.link, image = _a.image, video = _a.video, links = _a.links, className = _a.className;
    return (React.createElement(card_c1_1.Card, { className: "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full" },
        React.createElement(link_1["default"], { href: href || "#", className: utils_1.cn("block cursor-pointer", className) },
            video && (React.createElement("video", { src: video, autoPlay: true, loop: true, muted: true, playsInline: true, className: "pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
             })),
            image && (React.createElement(image_1["default"], { src: image, alt: title, width: 500, height: 300, className: "h-40 w-full overflow-hidden object-cover object-top" }))),
        React.createElement(card_c1_1.CardHeader, { className: "px-2" },
            React.createElement("div", { className: "space-y-1" },
                React.createElement(card_c1_1.CardTitle, { className: "mt-1 text-base" }, title),
                React.createElement("time", { className: "font-sans text-xs" }, dates),
                React.createElement("div", { className: "hidden font-sans text-xs underline print:visible" }, link === null || link === void 0 ? void 0 : link.replace("https://", "").replace("www.", "").replace("/", "")),
                React.createElement(react_markdown_1["default"], { className: "prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert" }, description))),
        React.createElement(card_c1_1.CardContent, { className: "mt-auto flex flex-col px-2" }, tags && tags.length > 0 && (React.createElement("div", { className: "mt-2 flex flex-wrap gap-1" }, tags === null || tags === void 0 ? void 0 : tags.map(function (tag) { return (React.createElement(badge_1.Badge, { className: "px-1 py-0 text-[10px]", variant: "secondary", key: tag }, tag)); })))),
        React.createElement(card_c1_1.CardFooter, { className: "px-2 pb-2" }, links && links.length > 0 && (React.createElement("div", { className: "flex flex-row flex-wrap items-start gap-1" }, links === null || links === void 0 ? void 0 : links.map(function (link, idx) { return (React.createElement(link_1["default"], { href: link === null || link === void 0 ? void 0 : link.href, key: idx, target: "_blank" },
            React.createElement(badge_1.Badge, { key: idx, className: "flex gap-2 px-2 py-1 text-[10px]" },
                link.icon,
                link.type))); }))))));
}
exports.ProjectCard = ProjectCard;
