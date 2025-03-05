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
exports.GET = exports.revalidate = exports.runtime = void 0;
var cheerio = require("cheerio");
var og_1 = require("next/og");
var server_1 = require("next/server");
var redis_1 = require("~/lib/redis");
exports.runtime = 'edge';
exports.revalidate = 259200; // 3 days
function getKey(url) {
    return "favicon:" + url;
}
var faviconMapper = {
    '((?:zolplay.cn)|(?:zolplay.com)|(?:cn.zolplay.com))': 'https://cali.so/favicons/zolplay.png',
    '(?:github.com)': 'https://cali.so/favicons/github.png',
    '((?:t.co)|(?:twitter.com)|(?:x.com))': 'https://cali.so/favicons/twitter.png',
    'coolshell.cn': 'https://cali.so/favicons/coolshell.png',
    'vercel.com': 'https://cali.so/favicons/vercel.png',
    'nextjs.org': 'https://cali.so/favicons/nextjs.png'
};
function getPredefinedIconForUrl(url) {
    for (var regexStr in faviconMapper) {
        var regex = new RegExp("^(?:https?://)?(?:[^@/\\n]+@)?(?:www.)?" + regexStr);
        if (regex.test(url)) {
            return faviconMapper[regexStr];
        }
    }
    return undefined;
}
var width = 32;
var height = width;
function renderFavicon(url) {
    return new og_1.ImageResponse((
    // eslint-disable-next-line @next/next/no-img-element
    React.createElement("img", { src: url, alt: url + " \u7684\u56FE\u6807", width: width, height: height })), {
        width: width,
        height: height
    });
}
function GET(req) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var searchParams, url, success, iconUrl, predefinedIcon, cachedFavicon, res, html, $, appleTouchIcon, favicon, shortcutFavicon, finalFavicon, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    searchParams = new URL(req.url).searchParams;
                    url = searchParams.get('url');
                    if (!url) {
                        return [2 /*return*/, server_1.NextResponse.error()];
                    }
                    return [4 /*yield*/, redis_1.ratelimit.limit('favicon' + ("_" + ((_a = req.ip) !== null && _a !== void 0 ? _a : '')))];
                case 1:
                    success = (_c.sent()).success;
                    if (!success) {
                        return [2 /*return*/, server_1.NextResponse.error()];
                    }
                    iconUrl = 'https://cali.so/favicon_blank.png';
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 8, , 9]);
                    predefinedIcon = getPredefinedIconForUrl(url);
                    if (predefinedIcon) {
                        return [2 /*return*/, renderFavicon(predefinedIcon)];
                    }
                    return [4 /*yield*/, redis_1.redis.get(getKey(url))];
                case 3:
                    cachedFavicon = _c.sent();
                    if (cachedFavicon) {
                        return [2 /*return*/, renderFavicon(cachedFavicon)];
                    }
                    return [4 /*yield*/, fetch(new URL("https://" + url).href, {
                            headers: {
                                'Content-Type': 'text/html'
                            },
                            cache: 'force-cache'
                        })];
                case 4:
                    res = _c.sent();
                    if (!res.ok) return [3 /*break*/, 6];
                    return [4 /*yield*/, res.text()];
                case 5:
                    html = _c.sent();
                    $ = cheerio.load(html);
                    appleTouchIcon = $('link[rel="apple-touch-icon"]').attr('href');
                    favicon = $('link[rel="icon"]').attr('href');
                    shortcutFavicon = $('link[rel="shortcut icon"]').attr('href');
                    finalFavicon = (_b = appleTouchIcon !== null && appleTouchIcon !== void 0 ? appleTouchIcon : favicon) !== null && _b !== void 0 ? _b : shortcutFavicon;
                    if (finalFavicon) {
                        iconUrl = new URL(finalFavicon, new URL("https://" + url).href).href;
                    }
                    _c.label = 6;
                case 6: return [4 /*yield*/, redis_1.redis.set(getKey(url), iconUrl, { ex: exports.revalidate })];
                case 7:
                    _c.sent();
                    return [2 /*return*/, renderFavicon(iconUrl)];
                case 8:
                    e_1 = _c.sent();
                    console.error(e_1);
                    return [3 /*break*/, 9];
                case 9: return [4 /*yield*/, redis_1.redis.set(getKey(url), iconUrl, { ex: exports.revalidate })];
                case 10:
                    _c.sent();
                    return [2 /*return*/, renderFavicon(iconUrl)];
            }
        });
    });
}
exports.GET = GET;
