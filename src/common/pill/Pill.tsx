import Icon from "../icon/Icon";
import { IconName } from "../icon/IconType";
import "./pill.css";

const Pill = ({ text, iconName }: { text: string; iconName?: IconName }) => {
  const PillIcon = () => (iconName ? <Icon name={iconName} /> : null);

  const className = iconName ? "pill-icon" : "pill-sm";

  return (
    <span className={className}>
      <PillIcon />
      <p>{text}</p>
    </span>
  );
};

export default Pill;
