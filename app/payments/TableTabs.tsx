"use client";

import { useState } from "react";
import s from "./table-tabs.module.css";

const Tab = ({ text, onClick, active = false }: { text: string; onClick: () => void; active?: boolean }) => (
  <button className={`${s.tab} ${active ? s.active : ""}`} onClick={onClick}>
    {text}
  </button>
);

const TableTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  function handleClick(tab: number) {
    setActiveTab(tab);
  }
  return (
    <div className="f a-c gap-s">
      <Tab text="Transactions" active onClick={() => handleClick(0)} />
      <Tab text="Requests" onClick={() => handleClick(1)} />
      <Tab text="Drafts" onClick={() => handleClick(2)} />
      <Tab text="My recipient" onClick={() => handleClick(3)} />
    </div>
  );
};

export default TableTabs;
