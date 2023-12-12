import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/web/search", text: "All" },
  { url: "/news/search", text: "News" },
  { url: "/images/search", text: "Images" },
  { url: "/videos/search", text: "Videos" },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          className={({ isActive }) => [
            isActive ? "font-bold text-blue-800 rounded p-2" : "p-2",
          ]}
          to={url}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
