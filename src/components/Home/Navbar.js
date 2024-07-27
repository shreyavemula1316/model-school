import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaGraduationCap, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isAboutActive = location.pathname.startsWith("/about-tgms") || location.pathname.startsWith("/vision");

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "#", link: "About", dropdown: true },
    // { path: "/gallery", link: "Gallery" },
    { path: "/academics", link: "Academics" },
    { path: "/faculty", link: "Faculty" },
    { path: "/admissions", link: "Admissions" },
    { path: "/student-activities", link: "Student Activities" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="bg-light-gray shadow-lg text-white top-0 left-0 right-0 z-50">
      <div className="bg-custom-dark-blue text-white py-4 px-4 flex flex-col justify-center items-center min-h-[80px]">
        <a href="/" className="font-bold text-xl sm:text-4xl flex gap-4 items-center text-white uppercase">
          <FaGraduationCap className="w-6 h-6 sm:w-10 sm:h-8" />
          <span>Telangana Model School</span>
        </a>
        <p className="mt-1 text-sm sm:text-base pl-4 sm:pl-20">Mandepally, Sircilla</p>
      </div>

      <nav className="px-4 py-4 max-w-7xl mx-auto">
        <div className="md:hidden flex items-center justify-between">
          <button onClick={toggleMenu} className="cursor-pointer text-black p-2">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        <div className={`md:flex items-center ${isOpen ? "block" : "hidden"} md:block`}>
          <ul className={`flex flex-col md:flex-row justify-center md:justify-between w-full md:gap-4 ${isOpen ? "mt-4" : ""}`}>
            {navItems.map(({ path, link, dropdown }) => (
              <li
                className={`relative mb-2 md:mb-0 ${dropdown ? "group" : ""}`}
                key={link}
                onMouseEnter={dropdown ? handleMouseEnter : undefined}
                onMouseLeave={dropdown ? handleMouseLeave : undefined}
                ref={dropdown ? dropdownRef : null}
              >
                <NavLink
                  className={({ isActive, isPending }) =>
                    `block uppercase font-bold transition-all duration-300 ${
                      link === "About" 
                        ? `text-black ${isAboutActive ? "text-violet-700 underline" : "hover:text-violet-700 hover:underline"}` 
                        : `text-black ${isActive ? "underline text-violet-700" : isPending ? "text-gray-400" : "hover:underline hover:text-violet-700"}`
                    }`
                  }
                  to={path}
                  onClick={(e) => {
                    if (dropdown) {
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                    }
                  }}
                >
                  {link}
                </NavLink>
                {dropdown && (
                  <ul 
                    className={`absolute top-full left-0 mt-2 bg-muted-blue rounded-lg shadow-lg w-48 z-20 transition-all duration-300 ease-in-out transform ${
                      isDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    <li>
                      <NavLink
                        to="/about-tgms"
                        className="block px-4 py-2 hover:bg-dark-muted-blue text-white rounded-lg transition-colors duration-300 ease-in-out"
                        onClick={handleDropdownItemClick}
                      >
                        About TGMS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/vision"
                        className="block px-4 py-2 hover:bg-dark-muted-blue text-white rounded-lg transition-colors duration-300 ease-in-out"
                        onClick={handleDropdownItemClick}
                      >
                        Vision
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;