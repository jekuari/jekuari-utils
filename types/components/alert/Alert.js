"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAlert = exports.Alert = exports.AlertContext = void 0;
/* Ricardo Feregrino Ochoa 2022 (Jekuari)
 * https://github.com/jekuari
 * https://www.linkedin.com/in/ricardo-feregrino/ */
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var fi_1 = require("react-icons/fi");
exports.AlertContext = (0, react_1.createContext)({
    active: false,
    content: {
        title: "Success!",
        icon: fi_1.FiCheckCircle,
        iconBackground: "bg-green-500",
        textColor: "text-green-500",
        background: "bg-white",
    },
    setActive: function () { },
    setAlertContent: function () { },
    close: function () { },
    open: function () { },
    error: function () { },
    warning: function () { },
    success: function () { },
});
var Alert = function (_a) {
    var contents = _a.contents;
    return react_1.default.createElement(Alert.Contents, { contents: contents });
};
exports.Alert = Alert;
Alert.Provider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), alertActive = _b[0], setAlertActive = _b[1];
    var _c = (0, react_1.useState)({
        title: "Success!",
        icon: fi_1.FiCheckCircle,
        iconBackground: "bg-green-500",
        textColor: "text-green-500",
        background: "bg-white",
    }), alertContent = _c[0], setAlertContent = _c[1];
    var close = function () {
        setAlertActive(false);
        setAlertContent({
            title: "",
            icon: fi_1.FiCheckCircle,
            iconBackground: "bg-green-500",
            textColor: "text-green-500",
            background: "bg-white",
        });
    };
    var open = function (content) {
        if (typeof content === "string") {
            setAlertActive(true);
            setAlertContent({
                title: content,
                icon: fi_1.FiCheckCircle,
                iconBackground: "bg-green-500",
                textColor: "text-green-500",
                background: "bg-white",
            });
            return;
        }
        setAlertActive(true);
        setAlertContent(function (prev) {
            return __assign(__assign({}, prev), content);
        });
    };
    var error = function (content) {
        if (typeof content === "string") {
            setAlertActive(true);
            setAlertContent({
                title: content,
                icon: fi_1.FiXCircle,
                iconBackground: "bg-red-500",
                textColor: "text-red-500",
                background: "bg-red-100",
            });
            return;
        }
        setAlertActive(true);
        setAlertContent({
            title: content.title,
            icon: content.icon || fi_1.FiXCircle,
            iconBackground: "bg-red-500",
            textColor: "text-red-500",
            background: content.background || "bg-red-100",
        });
    };
    var warning = function (content) {
        if (typeof content === "string") {
            setAlertActive(true);
            setAlertContent({
                title: content,
                icon: fi_1.FiInfo,
                iconBackground: "bg-yellow-500",
                textColor: "text-yellow-500",
                background: "bg-yellow-100",
            });
            return;
        }
        setAlertActive(true);
        setAlertContent({
            title: content.title,
            icon: content.icon || fi_1.FiInfo,
            iconBackground: "bg-yellow-500",
            textColor: "text-yellow-500",
            background: content.background || "bg-yellow-100",
        });
    };
    var success = function (content) {
        if (typeof content === "string") {
            setAlertActive(true);
            setAlertContent({
                title: content,
                icon: fi_1.FiCheckCircle,
                iconBackground: "bg-green-500",
                textColor: "text-green-500",
                background: "bg-lime-100",
            });
            return;
        }
        setAlertActive(true);
        setAlertContent({
            title: content.title,
            icon: content.icon || fi_1.FiCheckCircle,
            iconBackground: "bg-green-500",
            textColor: "text-green-500",
            background: content.background || "bg-lime-100",
        });
    };
    return (react_1.default.createElement(exports.AlertContext.Provider, { value: {
            active: alertActive,
            content: alertContent,
            setActive: setAlertActive,
            setAlertContent: setAlertContent,
            close: close,
            open: open,
            error: error,
            warning: warning,
            success: success,
        } },
        children,
        react_1.default.createElement(framer_motion_1.AnimatePresence, { mode: "wait" }, alertActive && (react_1.default.createElement(Alert.Contents, { contents: alertContent })))));
};
Alert.Contents = function (_a) {
    var contents = _a.contents;
    var alertContext = (0, react_1.useContext)(exports.AlertContext);
    var _b = (0, framer_motion_1.useAnimate)(), scope = _b[0], animate = _b[1];
    var Icon = (0, react_1.forwardRef)(function (props, ref) {
        return react_1.default.createElement(contents.icon, __assign({}, props, { ref: ref }));
    });
    (0, react_1.useEffect)(function () {
        var enterAnimation = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, animate("path", { pathLength: 0 }, { duration: 0 })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, animate("polyline", { pathLength: 0, pathOffset: 1 }, { duration: 0 })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, animate("path", { pathLength: 1 }, { duration: 0.4 })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, animate("polyline", { pathLength: 1, pathOffset: 0 }, { duration: 0.4 })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        window.setTimeout(function () {
            enterAnimation();
        }, 200);
    }, []);
    (0, react_1.useEffect)(function () {
        var timeout;
        if (alertContext.active) {
            timeout = window.setTimeout(function () {
                alertContext.close();
            }, 3000);
        }
        return function () {
            window.clearTimeout(timeout);
        };
    }, [alertContext.active]);
    return (react_1.default.createElement(framer_motion_1.motion.div, { className: "flex h-16 w-max items-center justify-start ".concat(contents.background || "bg-white", " fixed left-1/2 top-4 z-[250] flex-shrink-0 flex-grow-0 gap-4 rounded-full px-2"), initial: { y: "-200%", scaleX: 0 }, animate: { y: "0%", scaleX: 1 }, exit: { y: "-200%", scaleX: 0 }, style: {
            translateX: "-50%",
        }, transition: { duration: 0.25, ease: "easeInOut" }, drag: "y", dragConstraints: { top: 0, bottom: 0 }, dragElastic: 0.5, onDragEnd: function (_, info) {
            if (Math.abs(info.offset.y) > 50) {
                alertContext.close();
            }
        }, onClick: function () {
            alertContext.close();
        } },
        react_1.default.createElement("div", { ref: scope, className: "h-12 w-12 rounded-full ".concat(contents.iconBackground, " p-3 ") },
            react_1.default.createElement(Icon, { className: "h-full w-full text-white", style: { pathLength: 0 } })),
        react_1.default.createElement("div", { className: "overflow-hidden pr-4" },
            react_1.default.createElement(framer_motion_1.motion.p, { className: "sm:text-xl ".concat(contents.textColor, " "), initial: { x: "-200%" }, animate: { x: "0%" }, transition: { duration: 0.4 } }, contents.title))));
};
var useAlert = function () {
    var alertContext = (0, react_1.useContext)(exports.AlertContext);
    return alertContext;
};
exports.useAlert = useAlert;
