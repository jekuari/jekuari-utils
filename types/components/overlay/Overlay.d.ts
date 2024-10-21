import React from "react";
export declare const OverlayContext: React.Context<{
    active: boolean;
    content: React.ReactNode;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    setOverlayContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    close: () => void;
    open: (content: React.ReactNode) => void;
}>;
declare const Overlay: {
    ({ children }: {
        children: React.ReactNode;
    }): React.JSX.Element;
    Provider({ children }: {
        children: React.ReactNode;
    }): React.JSX.Element;
    Contents({ children }: {
        children: React.ReactNode;
    }): React.JSX.Element;
};
export { Overlay };
