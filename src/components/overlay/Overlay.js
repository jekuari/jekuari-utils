import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useContext, createContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
export const OverlayContext = createContext({
    active: false,
    content: null,
    setActive: () => { },
    setOverlayContent: () => { },
    close: () => { },
    open: () => { },
});
const Overlay = ({ children }) => {
    const overlayContext = useContext(OverlayContext);
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                overlayContext.close();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);
    return (_jsx(AnimatePresence, { mode: "wait", children: overlayContext.active && _jsx(Overlay.Contents, { children: children }) }));
};
Overlay.Provider = ({ children }) => {
    const [overlayActive, setOverlayActive] = useState(false);
    const [overlayContent, setOverlayContent] = useState(null);
    const close = () => {
        setOverlayActive(false);
        setOverlayContent(null);
    };
    const open = (content) => {
        setOverlayActive(true);
        setOverlayContent(content);
    };
    return (_jsxs(OverlayContext.Provider, { value: {
            active: overlayActive,
            content: overlayContent,
            setActive: setOverlayActive,
            setOverlayContent: setOverlayContent,
            close: close,
            open: open,
        }, children: [children, _jsx(Overlay, { children: overlayContent })] }));
};
Overlay.Contents = ({ children }) => {
    return (_jsx(motion.div, { className: " z-[101] fixed w-full h-full bg-black/70 flex items-center justify-center p-4  top-0 left-0", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.1 }, onDragOver: (e) => {
            e.stopPropagation();
            e.preventDefault();
        }, children: _jsx("div", { className: "w-full h-full flex items-center justify-center ", children: children }) }));
};
export { Overlay };
