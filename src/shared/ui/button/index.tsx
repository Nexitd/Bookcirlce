import { FC } from "react";
import cn from 'classnames';

interface IButton {
    type?: "submit" | 'reset' | 'button';
    text: string;
    onClick?: () => void;
    className?: string;
}

const Button: FC<IButton> = ({ text = 'click', type = 'button', onClick = () => { }, className = '' }) => {
    return <button className={cn('btn', className)} onClick={onClick} type={type}>{text}</button>
}

export default Button