"use client";

import { useState } from "react";
import s from "./searchbar.module.css";
import Icon from "../icon/Icon";

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <div className="py-lg">
      <div id={s.searchBar}>
        <Icon name="chart" />
        <input
          type="text"
          placeholder="Search payment by details"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
