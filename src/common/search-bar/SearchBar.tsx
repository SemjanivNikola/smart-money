"use client";

import { useEffect, useState } from "react";
import s from "./searchbar.module.css";
import Icon from "../icon/Icon";

const SearchBar = ({ fetchAPI }: { fetchAPI: (query: string) => void }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    const runSearchFetch = async () => {
      if (!debouncedQuery) return;

      try {
        fetchAPI(debouncedQuery);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      }
    };

    runSearchFetch();
  }, [debouncedQuery]);

  return (
    <div className="py-lg">
      <div id={s.searchBar}>
        <Icon name="chart" />
        <input
          type="text"
          placeholder="Search payment by details"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
