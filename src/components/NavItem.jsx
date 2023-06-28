/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export const NavItem = ({ text, number = 0, toggleMenu = () => {} }) => {
  return (
    <NavLink
      to={text === "home" ? "" : text}
      onClick={() => toggleMenu(false)}
      className={({ isActive }) =>
        isActive
          ? "my-3 py-1 border-r-4 text-lightWhite  tracking-[0.16875rem] md:my-0 md:border-b-2 md:py-9 md:border-r-0"
          : "my-3 py-1 border-r-4 border-r-transparent  text-lightWhite  tracking-[0.16875rem] md:border-b-transparent md:border-b-2 md:border-r-0 md:my-0 md:py-9 md:hover:border-b-2 md:hover:border-b-current md:hover:border-b-white md:hover:border-opacity-30"
      }
    >
      <div className="uppercase font-barlow text-[1rem] tracking-[0.16875rem] md:text-[0.875rem] md:tracking-[0.14763rem] lg:text-[1rem] lg:tracking-[0.16875rem]">
        <span className="pr-2 md:hidden lg:inline-block">{number}</span>
        {text}
      </div>
    </NavLink>
  );
};
