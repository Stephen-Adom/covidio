import React, { useRef } from 'react';
// import { RiMenu4Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const ul = useRef();

  const openMenu = () => {
    if (ul.current.classList.contains('w-0')) {
      ul.current.classList.remove('w-0');
      ul.current.classList.add('w-full');
    } else {
      ul.current.classList.remove('w-full');
      ul.current.classList.add('w-0');
    }
  };

  return (
    <header className="nav-header relative md:w-[30%] xl:w-[20%] md:fixed top-0 md:h-screen md:overflow-y-scroll">
      <nav className="fixed top-0 z-50 flex items-center justify-between w-full p-5 bg-slate-950 md:mt-0 md:justify-center">
        <button
          type="button"
          className="bg-transparent menu-btn md:hidden"
          onClick={openMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
        {/* <Link to="/" className="font-bold uppercase md:text-xl lg:text-2xl">
          Covid-Metrics
        </Link> */}
      </nav>
      <ul className="w-0 menu-list" ref={ul}>
        <li className="item-list">
          <NavLink
            to="/dashboard"
            className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`}
            onClick={openMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink
            to="/continents/Africa"
            className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`}
            onClick={openMenu}
          >
            Africa
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink
            to="/continents/Asia"
            className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`}
            onClick={openMenu}
          >
            Asia
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink
            to="/continents/Australia-Oceania"
            className="flex-col nav-link"
            onClick={openMenu}
          >
            Australia/Oceania
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink
            to="/continents/Europe"
            className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`}
            onClick={openMenu}
          >
            Europe
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink
            to="/continents/North America"
            className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`}
            onClick={openMenu}
          >
            North America
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink
            to="/continents/South America"
            className={`nav-link ${(isActive) => (isActive ? 'active' : '')}`}
            onClick={openMenu}
          >
            South America
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
