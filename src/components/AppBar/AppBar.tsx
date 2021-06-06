import { PropsWithChildren } from "react";

interface IAppBarProps {
    title?: string | JSX.Element | JSX.Element[];
}

export const AppBar = (props: PropsWithChildren<IAppBarProps>) => {
    const { children, title } = props;

    return (
        <div>
            <div>
                {title}
            </div>
            { children }
        </div>
    );
};
