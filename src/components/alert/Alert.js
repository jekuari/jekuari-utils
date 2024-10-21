var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* Ricardo Feregrino Ochoa 2022 (Jekuari)
 * https://github.com/jekuari
 * https://www.linkedin.com/in/ricardo-feregrino/ */
import { useState, useEffect, useContext, createContext, forwardRef, } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi";
export const AlertContext = createContext({
    active: false,
    content: {
        title: "Success!",
        icon: FiCheckCircle,
        iconBackground: "bg-green-500",
        textColor: "text-green-500",
        background: "bg-white",
    },
    setActive: () => { },
    setAlertContent: () => { },
    close: () => { },
    open: () => { },
    error: () => { },
    warning: () => { },
    success: () => { },
});
const Alert = ({ contents }) => {
    return _jsx(Alert.Contents, { contents: contents });
};
Alert.Provider = ({ children }) => {
    const [alertActive, setAlertActive] = useState(false);
    const [alertContent, setAlertContent] = useState({
        title: "Success!",
        icon: FiCheckCircle,
        iconBackground: "bg-green-500",
        textColor: "text-green-500",
        background: "bg-white",
    });
    const close = () => {
        setAlertActive(false);
        setAlertContent({
            title: "",
            icon: FiCheckCircle,
            iconBackground: "bg-green-500",
            textColor: "text-green-500",
            background: "bg-white",
        });
    };
    const open = (content) => {
        if (typeof content === "string") {
            setAlertActive(true);
            setAlertContent({
                title: content,
                icon: FiCheckCircle,
                iconBackground: "bg-green-500",
                textColor: "text-green-500",
                background: "bg-white",
            });
            return;
        }
        setAlertActive(true);
        setAlertContent((prev) => {
            return Object.assign(Object.assign({}, prev), content);
        });
    };
    const error = (content) => {
        if (typeof content === "string") {
            setAlertActive(true);
            setAlertContent({
                title: content,
                icon: FiXCircle,
                iconBackground: "bg-red-500",
                textColor: "text-red-500",
                background: "bg-red-100",
            });
            return;
        }
        setAlertActive(true);
        setAlertContent({
            title: content.title,
            icon: content.icon || FiXCircle,
            iconBackground: "bg-red-500",
            textColor: "text-red-500",
            background: content.background || "bg-red-100",
        });
    };
    const warning = (content) => {
        if (typeof content === "string") {
            setAlertActive(true);
            setAlertContent({
                title: content,
                icon: FiInfo,
                iconBackground: "bg-yellow-500",
                textColor: "text-yellow-500",
                background: "bg-yellow-100",
            });
            return;
        }
        setAlertActive(true);
        setAlertContent({
            title: content.title,
            icon: content.icon || FiInfo,
            iconBackground: "bg-yellow-500",
            textColor: "text-yellow-500",
            background: content.background || "bg-yellow-100",
        });
    };
    const success = (content) => {
        if (typeof content === "string") {
            setAlertActive(true);
            setAlertContent({
                title: content,
                icon: FiCheckCircle,
                iconBackground: "bg-green-500",
                textColor: "text-green-500",
                background: "bg-lime-100",
            });
            return;
        }
        setAlertActive(true);
        setAlertContent({
            title: content.title,
            icon: content.icon || FiCheckCircle,
            iconBackground: "bg-green-500",
            textColor: "text-green-500",
            background: content.background || "bg-lime-100",
        });
    };
    return (_jsxs(AlertContext.Provider, { value: {
            active: alertActive,
            content: alertContent,
            setActive: setAlertActive,
            setAlertContent: setAlertContent,
            close: close,
            open: open,
            error: error,
            warning: warning,
            success: success,
        }, children: [children, _jsx(AnimatePresence, { mode: "wait", children: alertActive && (_jsx(Alert.Contents, { contents: alertContent })) })] }));
};
Alert.Contents = ({ contents, }) => {
    const alertContext = useContext(AlertContext);
    const [scope, animate] = useAnimate();
    const Icon = forwardRef((props, ref) => {
        return _jsx(contents.icon, Object.assign({}, props, { ref: ref }));
    });
    useEffect(() => {
        const enterAnimation = () => __awaiter(void 0, void 0, void 0, function* () {
            yield animate("path", { pathLength: 0 }, { duration: 0 });
            yield animate("polyline", { pathLength: 0, pathOffset: 1 }, { duration: 0 });
            yield animate("path", { pathLength: 1 }, { duration: 0.4 });
            yield animate("polyline", { pathLength: 1, pathOffset: 0 }, { duration: 0.4 });
        });
        window.setTimeout(() => {
            enterAnimation();
        }, 200);
    }, []);
    useEffect(() => {
        let timeout;
        if (alertContext.active) {
            timeout = window.setTimeout(() => {
                alertContext.close();
            }, 3000);
        }
        return () => {
            window.clearTimeout(timeout);
        };
    }, [alertContext.active]);
    return (_jsxs(motion.div, { className: `flex h-16 w-max items-center justify-start ${contents.background || "bg-white"} fixed left-1/2 top-4 z-[250] flex-shrink-0 flex-grow-0 gap-4 rounded-full px-2`, initial: { y: "-200%", scaleX: 0 }, animate: { y: "0%", scaleX: 1 }, exit: { y: "-200%", scaleX: 0 }, style: {
            translateX: "-50%",
        }, transition: { duration: 0.25, ease: "easeInOut" }, drag: "y", dragConstraints: { top: 0, bottom: 0 }, dragElastic: 0.5, onDragEnd: (_, info) => {
            if (Math.abs(info.offset.y) > 50) {
                alertContext.close();
            }
        }, onClick: () => {
            alertContext.close();
        }, children: [_jsx("div", { ref: scope, className: `h-12 w-12 rounded-full ${contents.iconBackground} p-3 `, children: _jsx(Icon, { className: "h-full w-full text-white", style: { pathLength: 0 } }) }), _jsx("div", { className: "overflow-hidden pr-4", children: _jsx(motion.p, { className: `sm:text-xl ${contents.textColor} `, initial: { x: "-200%" }, animate: { x: "0%" }, transition: { duration: 0.4 }, children: contents.title }) })] }));
};
export { Alert };
export const useAlert = () => {
    const alertContext = useContext(AlertContext);
    return alertContext;
};
