"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.techIcons = exports.socialLinks = exports.aboutParagraphs = exports.githubUsername = exports.aboutMeHeadline = exports.email = void 0;
__exportStar(require("./projects"), exports);
exports.email = 'sherlock.xpf@gmail.com';
// about page
exports.aboutMeHeadline = "Hi ~";
exports.githubUsername = 'xuf-95';
exports.aboutParagraphs = [
    // "<strong>I'm XuFei, a bigdata engineer based in Hangzhou, China.</strong>",
    {
        title: " ",
        content: "Offline and digital nomads keep working with each other and are exploring more possibilities for the combination of AI and data engineering."
    },
    {
        title: " ",
        content: "From data engineering related projects in Shanghai, the main obligations include overseas data delivery, government cloud projects and data governance."
    },
    {
        title: " ",
        content: "Grew up in HeBei. Always curious, eventually skipped two years of high school to learn on my own.."
    },
];
exports.socialLinks = [
    {
        name: 'X',
        icon: 'x',
        href: 'https://x.com/xuf'
    },
    {
        name: 'Bsky',
        icon: 'bsky',
        href: 'https://bsky.app/profile/pfxu.bsky.social'
    },
    {
        name: 'Jike',
        icon: 'pill',
        href: 'https://okjk.co/P7c1zU'
    },
    {
        name: 'Github',
        icon: 'github',
        href: 'https://github.com/xuf-95'
    },
    // {
    //     name: 'Wechat',
    //     icon: 'wechat',
    //     href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ'
    // },
    {
        name: 'Discord',
        icon: 'discord',
        href: 'https://discord.gg/xTxRg3Ej'
    },
    {
        name: 'Ko-fi',
        icon: 'coffee',
        href: 'https://ko-fi.com/xuf'
    }
];
// https://simpleicons.org/
exports.techIcons = [
    "typescript",
    "javascript",
    "supabase",
    "cloudflare",
    "java",
    "oracle",
    "mysql",
    "react",
    "nodedotjs",
    "nextdotjs",
    "prisma",
    "postgresql",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "androidstudio",
    "ios",
    "apple",
    "wechat"
];
