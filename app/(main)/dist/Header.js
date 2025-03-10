'use client';
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Header = void 0;
var nextjs_1 = require("@clerk/nextjs");
var utils_1 = require("@zolplay/utils");
var framer_motion_1 = require("framer-motion");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var NavigationBar_1 = require("~/app/(main)/NavigationBar");
var ThemeSwitcher_1 = require("~/app/(main)/ThemeSwitcher");
var assets_1 = require("~/assets");
var Avatar_1 = require("~/components/Avatar");
var Container_1 = require("~/components/ui/Container");
var Tooltip_1 = require("~/components/ui/Tooltip");
var lib_1 = require("~/lib");
var math_1 = require("~/lib/math");
function Header() {
    var isHomePage = navigation_1.usePathname() === '/';
    var headerRef = react_1["default"].useRef(null);
    var avatarRef = react_1["default"].useRef(null);
    var isInitial = react_1["default"].useRef(true);
    var avatarX = framer_motion_1.useMotionValue(0);
    var avatarScale = framer_motion_1.useMotionValue(1);
    var avatarBorderX = framer_motion_1.useMotionValue(0);
    var avatarBorderScale = framer_motion_1.useMotionValue(1);
    react_1["default"].useEffect(function () {
        var _a, _b;
        var downDelay = (_b = (_a = avatarRef.current) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0;
        var upDelay = 64;
        function setProperty(property, value) {
            document.documentElement.style.setProperty(property, value);
        }
        function removeProperty(property) {
            document.documentElement.style.removeProperty(property);
        }
        function updateHeaderStyles() {
            if (!headerRef.current) {
                return;
            }
            var _a = headerRef.current.getBoundingClientRect(), top = _a.top, height = _a.height;
            var scrollY = math_1.clamp(window.scrollY, 0, document.body.scrollHeight - window.innerHeight);
            if (isInitial.current) {
                setProperty('--header-position', 'sticky');
            }
            setProperty('--content-offset', downDelay + "px");
            if (isInitial.current || scrollY < downDelay) {
                setProperty('--header-height', downDelay + height + "px");
                setProperty('--header-mb', -downDelay + "px");
            }
            else if (top + height < -upDelay) {
                var offset = Math.max(height, scrollY - upDelay);
                setProperty('--header-height', offset + "px");
                setProperty('--header-mb', height - offset + "px");
            }
            else if (top === 0) {
                setProperty('--header-height', scrollY + height + "px");
                setProperty('--header-mb', -scrollY + "px");
            }
            if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
                setProperty('--header-inner-position', 'fixed');
                removeProperty('--header-top');
                removeProperty('--avatar-top');
            }
            else {
                removeProperty('--header-inner-position');
                setProperty('--header-top', '0px');
                setProperty('--avatar-top', '0px');
            }
        }
        function updateAvatarStyles() {
            if (!isHomePage) {
                return;
            }
            var fromScale = 1;
            var toScale = 36 / 64;
            var fromX = 0;
            var toX = 2 / 16;
            var scrollY = downDelay - window.scrollY;
            var scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
            scale = math_1.clamp(scale, fromScale, toScale);
            var x = (scrollY * (fromX - toX)) / downDelay + toX;
            x = math_1.clamp(x, fromX, toX);
            avatarX.set(x);
            avatarScale.set(scale);
            var borderScale = 1 / (toScale / scale);
            avatarBorderX.set((-toX + x) * borderScale);
            avatarBorderScale.set(borderScale);
            setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0');
        }
        function updateStyles() {
            updateHeaderStyles();
            updateAvatarStyles();
            isInitial.current = false;
        }
        updateStyles();
        window.addEventListener('scroll', updateStyles, { passive: true });
        window.addEventListener('resize', updateStyles);
        return function () {
            window.removeEventListener('scroll', updateStyles);
            window.removeEventListener('resize', updateStyles);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHomePage]);
    var avatarTransform = framer_motion_1.useMotionTemplate(templateObject_1 || (templateObject_1 = __makeTemplateObject(["translate3d(", "rem, 0, 0) scale(", ")"], ["translate3d(", "rem, 0, 0) scale(", ")"])), avatarX, avatarScale);
    var avatarBorderTransform = framer_motion_1.useMotionTemplate(templateObject_2 || (templateObject_2 = __makeTemplateObject(["translate3d(", "rem, 0, 0) scale(", ")"], ["translate3d(", "rem, 0, 0) scale(", ")"])), avatarBorderX, avatarBorderScale);
    var _a = react_1["default"].useState(false), isShowingAltAvatar = _a[0], setIsShowingAltAvatar = _a[1];
    var onAvatarContextMenu = react_1["default"].useCallback(function (event) {
        event.preventDefault();
        setIsShowingAltAvatar(function (prev) { return !prev; });
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(framer_motion_1.motion.header, { className: utils_1.clsxm('pointer-events-none relative z-50 mb-[var(--header-mb,0px)] flex flex-col', isHomePage
                ? 'h-[var(--header-height,180px)]'
                : 'h-[var(--header-height,64px)]'), layout: true, layoutRoot: true },
            react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isHomePage && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("div", { ref: avatarRef, className: "order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" }),
                react_1["default"].createElement(Container_1.Container, { className: "top-0 order-last -mb-3 pt-3", style: {
                        position: 'var(--header-position)'
                    } },
                    react_1["default"].createElement(framer_motion_1.motion.div, { className: "top-[var(--avatar-top,theme(spacing.3))] w-full select-none", style: {
                            position: 'var(--header-inner-position)'
                        }, initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: {
                            type: 'spring',
                            damping: 30,
                            stiffness: 200
                        } },
                        react_1["default"].createElement(framer_motion_1.motion.div, { className: "relative inline-flex", layoutId: "avatar", layout: true, onContextMenu: onAvatarContextMenu },
                            react_1["default"].createElement(framer_motion_1.motion.div, { className: "absolute left-0 top-3 origin-left opacity-[var(--avatar-border-opacity,0)] transition-opacity", style: {
                                    transform: avatarBorderTransform
                                } },
                                react_1["default"].createElement(Avatar_1.Avatar, null)),
                            react_1["default"].createElement(framer_motion_1.motion.div, { className: "block h-16 w-16 origin-left", style: {
                                    transform: avatarTransform
                                } },
                                react_1["default"].createElement(Avatar_1.Avatar.Image, { large: true, alt: isShowingAltAvatar, className: "block h-full w-full" })))))))),
            react_1["default"].createElement("div", { ref: headerRef, className: "top-0 z-10 h-16 pt-6", style: {
                    position: 'var(--header-position)'
                } },
                react_1["default"].createElement(Container_1.Container, { className: "top-[var(--header-top,theme(spacing.6))] w-full", style: {
                        position: 'var(--header-inner-position)'
                    } },
                    react_1["default"].createElement("div", { className: "relative flex gap-4" },
                        react_1["default"].createElement(framer_motion_1.motion.div, { className: "flex flex-1", initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: {
                                type: 'spring',
                                damping: 30,
                                stiffness: 200
                            } },
                            react_1["default"].createElement(framer_motion_1.AnimatePresence, null, !isHomePage && (react_1["default"].createElement(framer_motion_1.motion.div, { layoutId: "avatar", layout: true, onContextMenu: onAvatarContextMenu },
                                react_1["default"].createElement(Avatar_1.Avatar, null,
                                    react_1["default"].createElement(Avatar_1.Avatar.Image, { alt: isShowingAltAvatar })))))),
                        react_1["default"].createElement("div", { className: "flex flex-1 justify-end md:justify-center" },
                            react_1["default"].createElement(NavigationBar_1.NavigationBar.Mobile, { className: "pointer-events-auto relative z-50 md:hidden" }),
                            react_1["default"].createElement(NavigationBar_1.NavigationBar.Desktop, { className: "pointer-events-auto relative z-50 hidden md:block" })),
                        react_1["default"].createElement(framer_motion_1.motion.div, { className: "flex justify-end gap-3 md:flex-1", initial: { opacity: 0, y: -20, scale: 0.95 }, animate: { opacity: 1, y: 0, scale: 1 } },
                            react_1["default"].createElement(UserInfo, null),
                            react_1["default"].createElement("div", { className: "pointer-events-auto" },
                                react_1["default"].createElement(ThemeSwitcher_1.ThemeSwitcher, null))))))),
        isHomePage && react_1["default"].createElement("div", { className: "h-[--content-offset]" })));
}
exports.Header = Header;
function UserInfo() {
    var _a;
    var _b = react_1["default"].useState(false), tooltipOpen = _b[0], setTooltipOpen = _b[1];
    var pathname = navigation_1.usePathname();
    var user = nextjs_1.useUser().user;
    var StrategyIcon = react_1["default"].useMemo(function () {
        var _a;
        var strategy = (_a = user === null || user === void 0 ? void 0 : user.primaryEmailAddress) === null || _a === void 0 ? void 0 : _a.verification.strategy;
        if (!strategy) {
            return null;
        }
        switch (strategy) {
            case 'from_oauth_github':
                return assets_1.GitHubBrandIcon;
            case 'from_oauth_google':
                return assets_1.GoogleBrandIcon;
            default:
                return assets_1.MailIcon;
        }
    }, [(_a = user === null || user === void 0 ? void 0 : user.primaryEmailAddress) === null || _a === void 0 ? void 0 : _a.verification.strategy]);
    return (react_1["default"].createElement(framer_motion_1.AnimatePresence, null,
        react_1["default"].createElement(nextjs_1.SignedIn, { key: "user-info" },
            react_1["default"].createElement(framer_motion_1.motion.div, { className: "pointer-events-auto relative flex h-10 items-center", initial: { opacity: 0, x: 25 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 25 } },
                react_1["default"].createElement(nextjs_1.UserButton, { afterSignOutUrl: lib_1.url(pathname).href, appearance: {
                        elements: {
                            avatarBox: 'w-9 h-9 ring-2 ring-white/20'
                        }
                    } }),
                StrategyIcon && (react_1["default"].createElement("span", { className: "pointer-events-none absolute -bottom-1 -right-1 flex h-4 w-4 select-none items-center justify-center rounded-full bg-white dark:bg-zinc-900" },
                    react_1["default"].createElement(StrategyIcon, { className: "h-3 w-3" }))))),
        react_1["default"].createElement(nextjs_1.SignedOut, { key: "sign-in" },
            react_1["default"].createElement(framer_motion_1.motion.div, { className: "pointer-events-auto", initial: { opacity: 0, x: 25 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 25 } },
                react_1["default"].createElement(Tooltip_1.Tooltip.Provider, { disableHoverableContent: true },
                    react_1["default"].createElement(Tooltip_1.Tooltip.Root, { open: tooltipOpen, onOpenChange: setTooltipOpen },
                        react_1["default"].createElement(nextjs_1.SignInButton, { mode: "modal", redirectUrl: lib_1.url(pathname).href },
                            react_1["default"].createElement(Tooltip_1.Tooltip.Trigger, { asChild: true },
                                react_1["default"].createElement("button", { type: "button", className: "group h-10 rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 text-sm shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20" },
                                    react_1["default"].createElement(assets_1.UserArrowLeftIcon, { className: "h-5 w-5" })))),
                        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, tooltipOpen && (react_1["default"].createElement(Tooltip_1.Tooltip.Portal, { forceMount: true },
                            react_1["default"].createElement(Tooltip_1.Tooltip.Content, { asChild: true },
                                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 } }, "\u767B\u5F55")))))))))));
}
var templateObject_1, templateObject_2;
