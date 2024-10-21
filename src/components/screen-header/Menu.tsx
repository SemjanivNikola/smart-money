"use client";

import Icon from "@/src/common/icon/Icon";
import Pill from "@/src/common/pill/Pill";
import { useEffect, useState } from "react";

const ACTIVE = "active";
const HIDDEN = "hidden";
let dropdownMenuEl: HTMLDivElement | null = null;

const Menu = () => {
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
    <button id="menu" type="button" onClick={toggleMenu} data-count="2" data-pending="true">
      <div className="f a-c gap-s">
        <span className="avatar-placeholder" data-pending="true">
          NS
        </span>
        <p>Nikola Semjaniv</p>
        <Icon name="chevron-left" size={16} />
      </div>
      <div id="dropdown-menu" className={cssClass}>
        <div
          className="header f a-c gap-m px-m"
          style={{ borderBottom: "2px solid var(--extra-dim)", paddingBottom: "var(--m)", margin: "12px 0 var(--m)" }}
        >
          <div className="user-profile-img">
            <img src="" alt="" />
          </div>
          <div className="f col a-s gap-s">
            <h2>Nikola Semjaniv</h2>
            <p className="profile-id">@nsemjaniv</p>
          </div>
        </div>
        <ul className="px-m py-s">
          <li className="f a-c j-sb">
            <div className="f a-c gap-m">
              <div className="avatar-placeholder">
                <Icon name="cog-outlined" />
              </div>
              <span>Profile</span>
            </div>
            <Icon name="plus-circle" size={18} />
          </li>
          <li className="f a-c j-sb">
            <div className="f a-c gap-m">
              <div className="avatar-placeholder">
                <Icon name="cog-outlined" />
              </div>
              <span>New features</span>
            </div>
            <Icon name="plus-circle" size={18} />
          </li>
          <li className="f a-c j-sb">
            <div className="f a-c gap-m">
              <div className="avatar-placeholder">
                <Icon name="cog-outlined" />
              </div>
              <span>Settings</span>
            </div>
            <Icon name="plus-circle" size={18} />
          </li>
          <li className="f a-c j-sb">
            <div className="f a-c gap-m">
              <div className="avatar-placeholder">
                <Icon name="cog-outlined" />
              </div>
              <span>Security & privacy</span>
            </div>
            <Icon name="plus-circle" size={18} />
          </li>
          <li className="f a-c j-sb">
            <div className="f a-c gap-m">
              <div className="avatar-placeholder">
                <Icon name="cog-outlined" />
              </div>
              <span>About us</span>
            </div>
            <Icon name="plus-circle" size={18} />
          </li>
        </ul>
        <ul className="menu-section acc-section px-m">
          <li className="f gap-s">
            <div className="user-profile-img" style={{ width: 44, height: 44 }}>
              <img src="./img.png" alt="" />
            </div>
            <div className="f col a-s j-c">
              <div className="f a-c gap-xs">
                <p>SkyFleet</p>
                <Pill text="Business" />
              </div>
              <p className="profile-id">@SkyFleet</p>
            </div>
          </li>
          <li className="f gap-s">
            <div className="user-profile-img" style={{ width: 44, height: 44 }}>
              <img src="./img.png" alt="" />
            </div>
            <div className="f col a-s j-c">
              <div className="f a-c gap-xs">
                <p>SkyFleet</p>
                <Pill text="Business" />
              </div>
              <p className="profile-id">@SkyFleet</p>
            </div>
          </li>
        </ul>
        <ul className="menu-section px-m">
          <li className="f a-c j-sb">
            <div className="f a-c gap-m">
              <div className="avatar-placeholder">
                <Icon name="cog-outlined" />
              </div>
              <span>Mode</span>
            </div>
            <Icon name="plus-circle" />
          </li>
          <li className="f a-c j-sb">
            <div className="f a-c gap-m">
              <div className="avatar-placeholder">
                <Icon name="cog-outlined" />
              </div>
              <span>Language</span>
            </div>
            <div
              className="f a-c gap-xs px-s py-s"
              style={{ backgroundColor: "var(--dark-light)", borderRadius: "var(--border-radius-m)" }}
            >
              <span>English</span>
              <Icon name="english-flag" />
            </div>
          </li>
          <li className="f a-c j-sb">
            <div className="f a-c gap-m">
              <div className="avatar-placeholder">
                <Icon name="cog-outlined" />
              </div>
              <span>Logo out</span>
            </div>
            <Icon name="plus-circle" />
          </li>
        </ul>
      </div>
    </button>
  );
};

export default Menu;
