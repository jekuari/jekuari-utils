"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = exports.OverlayContext = void 0;
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
exports.OverlayContext = (0, react_1.createContext)({
    active: false,
    content: null,
    setActive: function () { },
    setOverlayContent: function () { },
    close: function () { },
    open: function () { },
});
var Overlay = function (_a) {
    var children = _a.children;
    var overlayContext = (0, react_1.useContext)(exports.OverlayContext);
    (0, react_1.useEffect)(function () {
        var handleEsc = function (e) {
            if (e.key === "Escape") {
                overlayContext.close();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return function () {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, { mode: "wait" }, overlayContext.active && react_1.default.createElement(Overlay.Contents, null, children)));
};
exports.Overlay = Overlay;
Overlay.Provider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), overlayActive = _b[0], setOverlayActive = _b[1];
    var _c = (0, react_1.useState)(null), overlayContent = _c[0], setOverlayContent = _c[1];
    var close = function () {
        setOverlayActive(false);
        setOverlayContent(null);
    };
    var open = function (content) {
        setOverlayActive(true);
        setOverlayContent(content);
    };
    return (react_1.default.createElement(exports.OverlayContext.Provider, { value: {
            active: overlayActive,
            content: overlayContent,
            setActive: setOverlayActive,
            setOverlayContent: setOverlayContent,
            close: close,
            open: open,
        } },
        children,
        react_1.default.createElement(Overlay, null, overlayContent)));
};
Overlay.Contents = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(framer_motion_1.motion.div, { className: " z-[101] fixed w-full h-full bg-black/70 flex items-center justify-center p-4  top-0 left-0", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.1 }, onDragOver: function (e) {
            e.stopPropagation();
            e.preventDefault();
        } },
        react_1.default.createElement("div", { className: "w-full h-full flex items-center justify-center " }, children)));
};
