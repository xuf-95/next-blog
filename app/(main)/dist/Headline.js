'use client';
"use strict";
exports.__esModule = true;
exports.Headline = void 0;
var framer_motion_1 = require("framer-motion");
// import { PeekabooLink } from '~/components/links/PeekabooLink'
var SocialLink_1 = require("~/components/links/SocialLink");
// function Developer() {
//   return (
//     <span className="group">
//       <span className="font-mono">&lt;</span>开发者
//       <span className="font-mono">/&gt;</span>
//       <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
//     </span>
//   )
// }
function Designer() {
    return (React.createElement("span", { className: "group relative bg-black/5 p-1 dark:bg-white/5" },
        React.createElement("span", { className: "pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90" },
            React.createElement("span", { className: "absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" }),
            React.createElement("span", { className: "absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" }),
            React.createElement("span", { className: "absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" }),
            React.createElement("span", { className: "absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" })),
        "Building in Public"));
}
function Headline() {
    return (React.createElement("div", { className: "flex flex-col gap-4" },
        React.createElement("div", { className: "flex flex-col" },
            React.createElement(framer_motion_1.motion.h1, { className: "text-4xl md:text-5xl font-bold", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } },
                React.createElement(framer_motion_1.motion.span, { className: "inline-block" }, "Hey there, I'm "),
                React.createElement("span", { className: "block h-2" }),
                React.createElement(framer_motion_1.motion.span, { className: "inline-block ml-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-transparent bg-clip-text", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 0.5 } }, "XuFei & \u8BB8\u98DB"),
                React.createElement(framer_motion_1.motion.span, { className: "inline-block", initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.6, duration: 0.5 } })),
            React.createElement(framer_motion_1.motion.p, { className: "text-gray-400 mt-4 text-lg", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.8, duration: 0.5 } },
                React.createElement("b", null, "Data engineer,digital nomad explorer.Currently in the stage of personal career exploration, seeking cooperation")),
            React.createElement(framer_motion_1.motion.p, { className: "text-gray-400 mt-2 text-lg", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1, duration: 0.5 } },
                React.createElement("b", null, "Enjoy cycling, coffee & coding,"),
                React.createElement(Designer, null),
                React.createElement("b", null, ", DATA + AI")),
            React.createElement(framer_motion_1.motion.div, { className: "mt-6 flex gap-6", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: {
                    type: 'spring',
                    damping: 50,
                    stiffness: 90,
                    duration: 0.35,
                    delay: 0.25
                } },
                React.createElement(SocialLink_1.SocialLink, { href: "https://x.com/pfx95", "aria-label": "\u63A8\u7279", platform: "x" }),
                React.createElement(SocialLink_1.SocialLink, { href: "https://github.com/xuf-95", "aria-label": "GitHub", platform: "github" }),
                React.createElement(SocialLink_1.SocialLink, { href: "https://t.me/xuf_95", "aria-label": "Telegram", platform: "telegram" }),
                React.createElement(SocialLink_1.SocialLink, { href: "https://www.instagram.com/xufei_sherlock/", "aria-label": "wiki", platform: "ufo" }),
                React.createElement(SocialLink_1.SocialLink, { href: "/feed.xml", platform: "rss", "aria-label": "RSS \u8BA2\u9605" }),
                React.createElement(SocialLink_1.SocialLink, { href: "sherlock.xpf@gmail.com", "aria-label": "\u6211\u7684\u90AE\u7BB1", platform: "mail" })))));
}
exports.Headline = Headline;
;
exports["default"] = Headline;
