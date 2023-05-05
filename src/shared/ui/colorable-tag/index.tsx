import { ReactNode } from "react";
import cn from "classnames";

type ColorableTagPropsType = {
  text: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
};

const ColorableTag = ({
  text = "",
  icon = <></>,
  className = "",
  onClick,
}: ColorableTagPropsType) => {
  return (
    <div className={cn("color__container", className)} onClick={onClick}>
      {icon} <span className="color__container_text"> {text}</span>
    </div>
  );
};

export default ColorableTag;
