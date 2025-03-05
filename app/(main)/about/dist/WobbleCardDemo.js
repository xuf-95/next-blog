"use client";
"use strict";
exports.__esModule = true;
exports.WobbleCardDemo = void 0;
var image_1 = require("next/image");
var react_1 = require("react");
var wobble_card_1 = require("~/components/ui/wobble-card");
function WobbleCardDemo() {
    return (react_1["default"].createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full" },
        react_1["default"].createElement(wobble_card_1.WobbleCard, { containerClassName: "col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]", className: "" },
            react_1["default"].createElement("div", { className: "max-w-xs" },
                react_1["default"].createElement("h2", { className: "text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white" }, "Design Web, Daily Coffee, Enjoy Bike"),
                react_1["default"].createElement("p", { className: "mt-4 text-left  text-base/6 text-neutral-200" }, "I believe that the measure of life is not time, but experience. So I've been exploring")),
            react_1["default"].createElement(image_1["default"], { src: "/hero-landing.avif", width: 400, height: 400, alt: "linear demo image", className: "absolute -right-4 lg:-right-[10%] -bottom-10 rounded-2xl" })),
        react_1["default"].createElement(wobble_card_1.WobbleCard, { containerClassName: "col-span-1 min-h-[300px]" },
            react_1["default"].createElement("h2", { className: "max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white" }, "Gigital Nomad, No Boss, Only Free"),
            react_1["default"].createElement("p", { className: "mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200" }, "Digital nomad is my ideal living situation, I can work and live anywhere I want \uD83C\uDFAF")),
        react_1["default"].createElement(wobble_card_1.WobbleCard, { containerClassName: "col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]" },
            react_1["default"].createElement("div", { className: "max-w-sm" },
                react_1["default"].createElement("h2", { className: "max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white" }, "My Digital Garden & Wiki"),
                react_1["default"].createElement("p", { className: "mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200" }, "The data knowledge base built in my spare time helps me understand and think about the process of learning")),
            react_1["default"].createElement(image_1["default"], { src: "/wiki.png", width: 500, height: 500, alt: "linear demo image", className: "absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl" }))));
}
exports.WobbleCardDemo = WobbleCardDemo;
