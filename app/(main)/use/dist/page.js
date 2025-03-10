"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var Container_1 = require("~/components/ui/Container");
var Card_1 = require("../projects/Card");
require("./stack.css");
var title = 'AMA 一对一咨询';
var description = 'Cali 提供一对一的咨询服务（Ask Me Anything）。我有前端开发、全栈开发、UI/UX 设计、创业经验、英语技能、美国留学与工作、内容创作等经验，可以为你解答相关的问题，我也支持纯英语沟通。';
exports.metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description
    },
    twitter: {
        title: title,
        description: description,
        card: 'summary_large_image'
    }
};
function AskMeAnythingPage() {
    return (React.createElement(Container_1.Container, { className: "mt-16 sm:mt-24" },
        React.createElement("header", { className: "max-w-2xl" },
            React.createElement("h3", { className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl" }, "Fouces WC")),
        React.createElement("div", { className: "mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 border-t border-zinc-100 py-8 dark:border-zinc-700/40" },
            React.createElement(Card_1["default"], null))));
}
exports["default"] = AskMeAnythingPage;
