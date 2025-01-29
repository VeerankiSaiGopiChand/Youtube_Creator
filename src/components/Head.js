import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

    const dispatch = useDispatch();

  
    useEffect(() => {
        const timer = setTimeout(() => {
          if (searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery]);
          } else {
            getSearchSugsestions();
          }
        }, 200);
        return () => {
          clearTimeout(timer);
        };
      }, [searchQuery]);
      
      const getSearchSugsestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        //console.log(json[1]);
        setSuggestions(json[1]);
        // update cache
        dispatch(
          cacheResults({
            [searchQuery]: json[1],
          })
        );
      };

    const toggleMenuHandler = () => {
      dispatch(toggleMenu());
    };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg bg-white items-center">
    <div className="flex col-span-1 items-center">
      <img
        onClick={() => toggleMenuHandler()}
        className="h-10 cursor-pointer"
        alt="menu"
        src="https://shorturl.at/0Pu7y"
      />
      <a href="/">
        <img
          className="h-12 mx-3"
          alt="youtube-logo"
          src={LOGO}
        />
      </a>
    </div>

    <div className="col-span-10 px-10">
      <div className="flex items-center relative">
        <input
          className="w-2/3 border border-gray-300 p-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button
          className="border border-gray-300 px-6 py-3 rounded-r-full bg-gray-200 hover:bg-gray-300"
        >
          🔍
        </button>
        {showSuggestions && (
          <div className="absolute top-12 bg-white py-2 px-2 w-2/3 shadow-lg rounded-lg border border-gray-200 z-10">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

    <div className="col-span-1 flex justify-end">
      <img
        className="h-10 rounded-full border border-gray-300"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
    </div>
  </div>
  );
};

export default Head;