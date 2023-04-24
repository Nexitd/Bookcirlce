import { ReactNode } from "react";
import cn from 'classnames';

type ColorableTagPropsType = {
    text: string;
    icon?: ReactNode;
    className?: string;
}

const ColorableTag = ({ text = '', icon = <></>, className = '' }: ColorableTagPropsType) => {
    return <div className={cn("color__container", className)} >
        {icon} <span className="color__container_text" > {text}</span>
    </div >
}

export default ColorableTag