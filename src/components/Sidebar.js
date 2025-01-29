import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 bg-white">
    <ul className="space-y-2">
      <li className="hover:bg-gray-100 p-2 rounded-lg">
        <Link to="/" className="flex items-center space-x-2">
          <span>🏠</span>
          <span>Home</span>
        </Link>
      </li>
      <li className="hover:bg-gray-100 p-2 rounded-lg">🎥 Shorts</li>
      <li className="hover:bg-gray-100 p-2 rounded-lg">📹 Videos</li>
      <li className="hover:bg-gray-100 p-2 rounded-lg">🔴 Live</li>
    </ul>

    <h1 className="font-bold pt-5 text-gray-700">Subscriptions</h1>
    <ul className="space-y-2">
      <li className="hover:bg-gray-100 p-2 rounded-lg">🎵 Music</li>
      <li className="hover:bg-gray-100 p-2 rounded-lg">⚽ Sports</li>
      <li className="hover:bg-gray-100 p-2 rounded-lg">🎮 Gaming</li>
      <li className="hover:bg-gray-100 p-2 rounded-lg">🎬 Movies</li>
    </ul>

    <h1 className="font-bold pt-5 text-gray-700">Watch Later</h1>
    <ul className="space-y-2">
      <li className="hover:bg-gray-100 p-2 rounded-lg">🎵 Music</li>
      <li className="hover:bg-gray-100 p-2 rounded-lg">⚽ Sports</li>
      <li className="hover:bg-gray-100 p-2 rounded-lg">🎮 Gaming</li>
      <li className="hover:bg-gray-100 p-2 rounded-lg">🎬 Movies</li>
    </ul>
  </div>
  );
};

export default Sidebar;