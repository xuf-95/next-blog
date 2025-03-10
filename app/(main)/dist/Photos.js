'use client';
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Photos = void 0;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var react_1 = require("react");
function Photos(_a) {
    var photos = _a.photos;
    var _b = react_1["default"].useState(0), containerWidth = _b[0], setContainerWidth = _b[1];
    var _c = react_1["default"].useState(false), isCompact = _c[0], setIsCompact = _c[1];
    var _d = react_1["default"].useState(false), isHovering = _d[0], setIsHovering = _d[1];
    // 计算单个照片的尺寸（4:3比例）
    var photoSize = react_1["default"].useMemo(function () {
        var aspectRatio = 4 / 2;
        var baseWidth = isCompact ? containerWidth * 0.8 : 420; // 大屏固定400px宽
        return {
            width: baseWidth,
            height: baseWidth / aspectRatio,
            margin: isCompact ? 8 : 16 // 间距响应式
        };
    }, [containerWidth, isCompact]);
    // 响应式布局逻辑（优化版）
    react_1["default"].useEffect(function () {
        var handleResize = function () {
            var viewportWidth = window.innerWidth;
            setIsCompact(viewportWidth < 640);
            setContainerWidth(viewportWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return (react_1["default"].createElement(framer_motion_1.motion.div, { className: "mt-16 sm:mt-12", initial: { opacity: 0, scale: 0.925, y: 16 }, animate: { opacity: 1, scale: 1, y: 0 }, transition: { delay: 0.5, type: 'spring' } },
        react_1["default"].createElement("div", { className: "relative flex overflow-x-hidden overflow-y-visible w-auto", onMouseEnter: function () { return setIsHovering(true); }, onMouseLeave: function () { return setIsHovering(false); } },
            react_1["default"].createElement(framer_motion_1.motion.div, { className: "w-full py-4 flex whitespace-nowrap", animate: {
                    x: ['0%', '-100%'],
                    transition: {
                        duration: photos.length * 15,
                        repeat: Infinity,
                        ease: 'linear'
                    }
                }, style: {
                    animationPlayState: isHovering ? 'paused' : 'running',
                    width: photos.length * (photoSize.width + photoSize.margin * 2) + "px"
                } }, __spreadArrays(photos, photos).map(function (image, idx) { return (react_1["default"].createElement(framer_motion_1.motion.div, { key: image + "-" + idx, className: "inline-block", style: {
                    width: photoSize.width,
                    height: photoSize.height,
                    margin: "0 " + photoSize.margin + "px"
                }, animate: {
                    rotate: idx % 2 === 0 ? 2 : -1
                }, whileHover: {
                    scale: 1.05,
                    rotate: 0,
                    transition: {
                        duration: 0.3,
                        rotate: { type: 'spring', stiffness: 150 }
                    }
                }, transition: {
                    rotate: {
                        type: 'spring',
                        stiffness: 50,
                        damping: 10
                    }
                } },
                react_1["default"].createElement("div", { className: "relative w-full h-full overflow-hidden rounded-xl bg-zinc-100 ring-2 ring-lime-800/20 dark:bg-zinc-800 dark:ring-lime-300/10 md:rounded-3xl" },
                    " ",
                    react_1["default"].createElement(image_1["default"], { src: image, alt: "", fill // 使用Next.js的fill布局
                        : true, sizes: "(max-width: 640px) 50vw, 480px", className: "object-cover", style: {
                            filter: isHovering ? 'grayscale(0)' : 'grayscale(0.3)',
                            transition: 'filter 0.3s ease'
                        } })))); })))));
}
exports.Photos = Photos;
