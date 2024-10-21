import React from "react";
interface AlertContents {
    title: string;
    icon: React.FunctionComponent<any>;
    iconBackground: string;
    textColor: string;
    background: string;
}
export declare const AlertContext: React.Context<{
    active: boolean;
    content: {
        title?: string;
        icon?: React.FunctionComponent<any>;
        iconBackground?: string;
        textColor?: string;
        background?: string;
    };
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    setAlertContent: React.Dispatch<React.SetStateAction<AlertContents>>;
    close: () => void;
    open: (content: {
        title?: string;
        icon?: React.FunctionComponent<any>;
        iconBackground?: string;
        textColor?: string;
    } | string) => void;
    error: (content: {
        title: string;
        icon?: React.FunctionComponent<any>;
        background?: string;
    } | string) => void;
    warning: (content: {
        title: string;
        icon?: React.FunctionComponent<any>;
        background?: string;
    } | string) => void;
    success: (content: {
        title: string;
        icon?: React.FunctionComponent<any>;
        background?: string;
    } | string) => void;
}>;
declare const Alert: {
    ({ contents }: {
        contents: AlertContents;
    }): React.JSX.Element;
    Provider({ children }: {
        children: React.ReactNode;
    }): React.JSX.Element;
    Contents({ contents, }: {
        contents: {
            title: string;
            icon: React.FunctionComponent<any>;
            iconBackground: string;
            textColor: string;
            background: string;
        };
    }): React.JSX.Element;
};
export { Alert };
export declare const useAlert: () => {
    active: boolean;
    content: {
        title?: string;
        icon?: React.FunctionComponent<any>;
        iconBackground?: string;
        textColor?: string;
        background?: string;
    };
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    setAlertContent: React.Dispatch<React.SetStateAction<AlertContents>>;
    close: () => void;
    open: (content: {
        title?: string;
        icon?: React.FunctionComponent<any>;
        iconBackground?: string;
        textColor?: string;
    } | string) => void;
    error: (content: {
        title: string;
        icon?: React.FunctionComponent<any>;
        background?: string;
    } | string) => void;
    warning: (content: {
        title: string;
        icon?: React.FunctionComponent<any>;
        background?: string;
    } | string) => void;
    success: (content: {
        title: string;
        icon?: React.FunctionComponent<any>;
        background?: string;
    } | string) => void;
};
