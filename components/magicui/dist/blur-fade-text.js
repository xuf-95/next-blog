"use client";
"use strict";
exports.__esModule = true;
var utils_1 = require("~/lib/utils");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var BlurFadeText = function (_a) {
    var text = _a.text, className = _a.className, variant = _a.variant, _b = _a.characterDelay, characterDelay = _b === void 0 ? 0.03 : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.yOffset, yOffset = _d === void 0 ? 8 : _d, _e = _a.animateByCharacter, animateByCharacter = _e === void 0 ? false : _e;
    var defaultVariants = {
        hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
        visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" }
    };
    var combinedVariants = variant || defaultVariants;
    var characters = react_1.useMemo(function () { return Array.from(text); }, [text]);
    if (animateByCharacter) {
        return (React.createElement("div", { className: "flex" },
            React.createElement(framer_motion_1.AnimatePresence, null, characters.map(function (char, i) { return (React.createElement(framer_motion_1.motion.span, { key: i, initial: "hidden", animate: "visible", exit: "hidden", variants: combinedVariants, transition: {
                    yoyo: Infinity,
                    delay: delay + i * characterDelay,
                    ease: "easeOut"
                }, className: utils_1.cn("inline-block", className), style: { width: char.trim() === "" ? "0.2em" : "auto" } }, char)); }))));
    }
    return (React.createElement("div", { className: "flex" },
        React.createElement(framer_motion_1.AnimatePresence, null,
            React.createElement(framer_motion_1.motion.span, { initial: "hidden", animate: "visible", exit: "hidden", variants: combinedVariants, transition: {
                    yoyo: Infinity,
                    delay: delay,
                    ease: "easeOut"
                }, className: utils_1.cn("inline-block", className) }, text))));
};
exports["default"] = BlurFadeText;
