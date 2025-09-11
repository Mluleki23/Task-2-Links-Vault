import React from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  return (
    <div className="searchbutton">
      <FaSearch size="20px" />
      <input
        type="text"
        id="search"
        placeholder="Search by title or tag..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
  