"use client";

import Icon from "@/src/common/icon/Icon";
import { IconName } from "@/src/common/icon/IconType";

// TODO: How to make sign out without using "use client" component
const NavButton = ({ icon, title }: { icon: IconName; title: string }) => {
    function logout() {}

    return (
        <button onClick={logout} className="nav-btn">
            <Icon name={icon} color="#141414" />
            <span>{title}</span>
        </button>
    );
};

export default NavButton;
