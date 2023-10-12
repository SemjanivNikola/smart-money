import { IconName } from "./IconType";
import getIcon from "./getIcon";

const DEFAULT_ICON_SIZE = 24;

type IconType = {
    name: IconName;
    size?: number;
    color?: string;
};

const Icon = ({
    name,
    size = DEFAULT_ICON_SIZE,
    color = "rgb(255, 255, 255)",
}: IconType) => {
    return (
        <div
            className="icon-wrapper"
            style={{ width: size + "px", height: size + "px" }}
        >
            {getIcon(name, color)}
        </div>
    );
};

export default Icon;
