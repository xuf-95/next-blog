"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.metadata = void 0;
var react_1 = require("react");
var Container_1 = require("~/components/ui/Container");
var infoConfig_1 = require("~/config/infoConfig");
var PortraitAbout_jpg_1 = require("~/assets/PortraitAbout.jpg");
var image_1 = require("next/image");
var queries_1 = require("~/sanity/queries");
exports.metadata = {
    title: 'About',
    description: 'I’m XuFei. I live in Hangzhou City, where I design the future. Currently in the stage of personal career exploration, seeking cooperation'
};
function About() {
    return __awaiter(this, void 0, void 0, function () {
        var aboutParagraphsSafe, settings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    aboutParagraphsSafe = infoConfig_1.aboutParagraphs || [];
                    return [4 /*yield*/, queries_1.getSettings()];
                case 1:
                    settings = _a.sent();
                    return [2 /*return*/, (react_1["default"].createElement(Container_1.Container, { className: "mt-16 sm:mt-32" },
                            react_1["default"].createElement("div", { className: "grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12" },
                                react_1["default"].createElement("div", { className: "lg:pl-20" },
                                    react_1["default"].createElement("div", { className: "max-w-xs px-2.5 lg:max-w-none" },
                                        react_1["default"].createElement(image_1["default"], { src: PortraitAbout_jpg_1["default"], alt: "", sizes: "(min-width: 1024px) 32rem, 20rem", className: "aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" })),
                                    react_1["default"].createElement("aside", { className: "space-y-10 lg:sticky lg:top-8 lg:h-fit lg:pl-16 xl:pl-20" },
                                        react_1["default"].createElement("div", { className: "flex flex-col gap-6 pt-6" }))),
                                react_1["default"].createElement("div", { className: "lg:order-first lg:row-span-2" },
                                    react_1["default"].createElement("h4", { className: "text-1xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100" }, infoConfig_1.aboutMeHeadline),
                                    react_1["default"].createElement("div", { className: "mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400" }, infoConfig_1.aboutParagraphs.map(function (section, index) {
                                        // 检查类型，如果是对象则渲染标题和内容
                                        if (typeof section === "object" && section.title) {
                                            return (react_1["default"].createElement("div", { key: index },
                                                react_1["default"].createElement("h2", { className: "text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100" }, section.title),
                                                react_1["default"].createElement("p", null, section.content)));
                                        }
                                    }))))))];
            }
        });
    });
}
exports["default"] = About;
