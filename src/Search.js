import React from "react";
import { useState } from "react";
import "./Search.css";

export default function Search({ nameSearch }) {
  const [inputName, setInputName] = useState("");

  const searchCaracter = (name) => {
    setInputName(name);
    nameSearch(name);
  };

  return (
    <div className="search-section">
      <form>
        <input
          className="search"
          type="text"
          placeholder="Search by Character Name"
          value={inputName}
          onChange={(e) => searchCaracter(e.target.value)}
        />
      </form>
    </div>
  );
}
