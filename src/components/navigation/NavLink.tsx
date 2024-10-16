"use client";

import Icon from "@/src/common/icon/Icon";
import { IconName } from "@/src/common/icon/IconType";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({
    icon,
    title,
    href,
}: {
    icon: IconName;
    title: string;
    href: string;
}) => {
    const pathname = usePathname();

    return (
      <Link href={href} className={pathname === href ? "active nav-link" : "nav-link"}>
        <Icon name={icon} color="var(--dim)" />
        {title}
      </Link>
    );
};

export default NavLink;
