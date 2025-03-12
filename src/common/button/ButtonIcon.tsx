import { ButtonHTMLAttributes } from "react";
import Icon from "../icon/Icon";
import { IconName } from "../icon/IconType";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  bStyle?: "primary" | "secondary" | "transparent" | "danger";
  iconSide?: "left" | "right";
  color?: "primary" | "light";
  icon: IconName;
  size?: number;
  iconColor?: string;
  onClick: () => void;
}

const ButtonIcon = ({ text, bStyle, color, iconSide, icon, onClick, size = 22, iconColor }: ButtonProps) => {
  let style = (bStyle + " " + color) as string;
  if (iconSide == "left") style += " reverse";

  return (
    <button type="button" className={`btn-icon ${style}`} onClick={onClick}>
      {text}
      <Icon name={icon} size={size} color={iconColor} />
    </button>
  );
};

export default ButtonIcon;
