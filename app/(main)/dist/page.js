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
exports.revalidate = void 0;
var react_1 = require("react");
var BlogPosts_1 = require("~/app/(main)/blog/BlogPosts");
var Headline_1 = require("~/app/(main)/Headline");
var Photos_1 = require("~/app/(main)/Photos");
var Resume_1 = require("~/app/(main)/Resume");
var Education_1 = require("~/app/(main)/Education");
var assets_1 = require("~/assets");
var assets_2 = require("~/assets");
var Container_1 = require("~/components/ui/Container");
var queries_1 = require("~/sanity/queries");
var WobbleCardDemo_1 = require("~/components/ui/WobbleCardDemo");
function BlogHomePage() {
    return __awaiter(this, void 0, void 0, function () {
        var settings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, queries_1.getSettings()];
                case 1:
                    settings = _a.sent();
                    return [2 /*return*/, (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(Container_1.Container, { className: "mt-10" },
                                react_1["default"].createElement(Headline_1.Headline, null)),
                            (settings === null || settings === void 0 ? void 0 : settings.heroPhotos) && react_1["default"].createElement(Photos_1.Photos, { photos: settings.heroPhotos }),
                            react_1["default"].createElement(Container_1.Container, { className: "mt-12 md:mt-28" },
                                react_1["default"].createElement("div", { className: "mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 border-t border-zinc-100 py-8 dark:border-zinc-700/40" },
                                    react_1["default"].createElement(WobbleCardDemo_1.WobbleCardDemo, null)),
                                react_1["default"].createElement("div", { className: "mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2" },
                                    react_1["default"].createElement("div", { className: "flex flex-col gap-6 pt-6" },
                                        react_1["default"].createElement("h2", { className: "flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100" },
                                            react_1["default"].createElement(assets_1.PencilSwooshIcon, { className: "h-5 w-5 flex-none" }),
                                            react_1["default"].createElement("span", { className: "ml-2" }, "Recent Posts")),
                                        react_1["default"].createElement(BlogPosts_1.BlogPosts, null)),
                                    react_1["default"].createElement("aside", { className: "space-y-10 lg:sticky lg:top-8 lg:h-fit lg:pl-16 xl:pl-20" },
                                        react_1["default"].createElement("div", { className: "flex flex-col gap-6 pt-6" },
                                            react_1["default"].createElement("h2", { className: "flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100" },
                                                react_1["default"].createElement(assets_2.SunIcon, { className: "h-5 w-5 flex-none" }),
                                                react_1["default"].createElement("span", { className: "ml-2" }, "Experience")),
                                            (settings === null || settings === void 0 ? void 0 : settings.resume) && react_1["default"].createElement(Resume_1.Resume, { resume: settings.resume }),
                                            (settings === null || settings === void 0 ? void 0 : settings.education) && react_1["default"].createElement(Education_1.Education, { education: settings.education })))))))];
            }
        });
    });
}
exports["default"] = BlogHomePage;
exports.revalidate = 60;
