import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import routesConfig from "../../navigation/routesConfig";

const fuse = new Fuse(routesConfig, {
  keys: ["label", "path"],
  threshold: 0.3,
});

const GlobalSearch = ({ handleHideOverlay }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    if (inputValue) {
      const results = fuse.search(inputValue);
      setSuggestions(results.map((result) => result.item));
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (path) => {
    navigate(path);
    setSuggestions([]);
    setQuery("");
  };

  return (
    <div className="overlay-header">
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
          />
          <i className="fa fa-close" onClick={handleHideOverlay} />
        </div>

        {/* Suggestions List */}
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSelect(suggestion.path)}>
                {suggestion.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GlobalSearch;
