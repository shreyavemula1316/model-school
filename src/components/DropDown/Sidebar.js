import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRightIcon } from '@heroicons/react/20/solid'; // Import an arrow icon from Heroicons or another icon library

const Sidebar = () => {
  const location = useLocation();
  const [activeDropdownItem, setActiveDropdownItem] = useState(null);

  useEffect(() => {
    // Highlight the active dropdown item based on the current location
    if (location.pathname.startsWith("/about-tgms") || location.pathname === "/vision") {
      setActiveDropdownItem(location.pathname === "/about-tgms" ? "About TGMS" : "Vision");
    } else {
      setActiveDropdownItem(null);
    }
  }, [location]);

  const handleDropdownItemClick = (item) => {
    setActiveDropdownItem(item);
  };

  // Determine if "About" is active based on child items
  const isAboutActive = location.pathname.startsWith("/about-tgms") || activeDropdownItem === "About TGMS" || activeDropdownItem === "Vision";

  return (
    <div className="w-64 bg-gray-200 p-4">
      <ul className="space-y-2">
        <li className="relative">
          <NavLink
            to="/about-tgms"
            className={`block p-2 text-lg font-semibold transition-transform duration-300 ${
              isAboutActive
                ? "text-black bg-gray-300"
                : "text-black bg-transparent hover:bg-gray-100 hover:scale-105"
            }`}
          >
            About
          </NavLink>
          <ul className="mt-2 ml-4 space-y-2">
            <li>
              <NavLink
                to="/about-tgms"
                className={({ isActive }) =>
                  `flex items-center p-2 text-lg transition-transform duration-300 ${
                    isActive || activeDropdownItem === "About TGMS"
                      ? "text-black underline"
                      : "text-black hover:underline"
                  }`
                }
                onClick={() => handleDropdownItemClick("About TGMS")}
              >
                About TGMS
                {activeDropdownItem === "About TGMS" && (
                  <ChevronRightIcon className="ml-2 w-5 h-5 text-black" />
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vision"
                className={({ isActive }) =>
                  `flex items-center p-2 text-lg transition-transform duration-300 ${
                    isActive || activeDropdownItem === "Vision"
                      ? "text-black underline"
                      : "text-black hover:underline"
                  }`
                }
                onClick={() => handleDropdownItemClick("Vision")}
              >
                Vision
                {activeDropdownItem === "Vision" && (
                  <ChevronRightIcon className="ml-2 w-5 h-5 text-black" />
                )}
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Add more sections here if needed */}
        
      </ul>
    </div>
  );
};

export default Sidebar;
