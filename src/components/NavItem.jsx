/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const NavItem = ({ text, number = 0, showNumber = false }) => {
  return (
    <Link
      to={text === "home" ? "" : text}
      className="py-9 text-lightWhite font-barlow tracking-[0.16875rem] border-b-transparent border-b-2 hover:border-b-2 hover:border-b-current hover:border-b-white hover:border-opacity-30"
    >
      {showNumber ? (
        <div className="uppercase">
          <span className="font-bold pr-2">{number}</span> {text}
        </div>
      ) : (
        <div className="uppercase">{text}</div>
      )}
    </Link>
  );
};
