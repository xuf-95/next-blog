"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var Snowfall = function () {
    var _a = react_1.useState([]), flakes = _a[0], setFlakes = _a[1];
    react_1.useEffect(function () {
        var generateFlakes = function () {
            var newFlakes = Array.from({ length: 150 }, function (_, i) { return ({
                id: i,
                left: Math.random() * 100 + "%",
                size: Math.random() * 12 + 3 + "px",
                duration: Math.random() * 6 + 4,
                delay: Math.random() * 5,
                opacity: Math.random() * 0.4 + 0.6,
                blur: Math.random() * 2
            }); });
            setFlakes(newFlakes);
        };
        generateFlakes();
    }, []);
    return (React.createElement("div", { className: "fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]" }, flakes.map(function (_a) {
        var id = _a.id, left = _a.left, size = _a.size, duration = _a.duration, delay = _a.delay, opacity = _a.opacity, blur = _a.blur;
        return (React.createElement(framer_motion_1.motion.div, { key: id, initial: { y: "-10vh", opacity: 0, x: 0 }, animate: {
                y: "110vh",
                opacity: opacity,
                x: [0, Math.random() * 10 - 5, Math.random() * 10 - 5]
            }, transition: {
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }, className: "absolute rounded-full", style: {
                left: left,
                width: size,
                height: size,
                filter: "blur(" + blur + "px)",
                backgroundColor: "rgba(255, 255, 255, " + opacity + ")",
                boxShadow: "0 0 " + size + " rgba(255, 255, 255, 0.8)",
                mixBlendMode: "lighten"
            } }));
    })));
};
exports["default"] = Snowfall;
