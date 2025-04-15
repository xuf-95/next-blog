"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var BlurFade = function (_a) {
    var children = _a.children, className = _a.className, variant = _a.variant, _b = _a.duration, duration = _b === void 0 ? 0.4 : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.yOffset, yOffset = _d === void 0 ? 6 : _d, _e = _a.inView, inView = _e === void 0 ? false : _e, _f = _a.inViewMargin, inViewMargin = _f === void 0 ? "-50px" : _f, _g = _a.blur, blur = _g === void 0 ? "6px" : _g;
    var ref = react_1.useRef(null);
    var inViewResult = framer_motion_1.useInView(ref, { once: true, margin: inViewMargin });
    var isInView = !inView || inViewResult;
    var defaultVariants = {
        hidden: { y: yOffset, opacity: 0, filter: "blur(" + blur + ")" },
        visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" }
    };
    var combinedVariants = variant || defaultVariants;
    return (React.createElement(framer_motion_1.AnimatePresence, null,
        React.createElement(framer_motion_1.motion.div, { ref: ref, initial: "hidden", animate: isInView ? "visible" : "hidden", exit: "hidden", variants: combinedVariants, transition: {
                delay: 0.04 + delay,
                duration: duration,
                ease: "easeOut"
            }, className: className }, children)));
};
exports["default"] = BlurFade;
