"use client";

import Icon from "@/src/common/icon/Icon";
import Pill from "@/src/common/pill/Pill";
import { useEffect, useState } from "react";

const ACTIVE = "active";
const HIDDEN = "hidden";
let dropdownMenuEl: HTMLDivElement | null = null;

const Notifications = () => {
  const [cssClass, setCSSClass] = useState("");

  useEffect(() => {
    dropdownMenuEl = document.querySelector("#dropdown-menu");
  }, []);

  function toggleMenu() {
    if (cssClass == ACTIVE) {
      setCSSClass(HIDDEN);
      setTimeout(() => {
        (dropdownMenuEl as HTMLDivElement).style.display = "none";
      }, 301);
    } else {
      dropdownMenuEl?.style.removeProperty("display");
      setCSSClass(ACTIVE);
    }
  }

  return (
    <button
      type="button"
      className="notification badge f a-c j-c"
      onClick={toggleMenu}
      data-count="2"
      data-pending="true"
    >
      <Icon name="create-account" />
      <div id="dropdown-notifications" className={cssClass}>
        <p>Notifications</p>
      </div>
    </button>
  );
};

export default Notifications;
