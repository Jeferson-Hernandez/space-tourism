import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="absolute w-full flex flex-row justify-between items-center ">
      <div className="p-5">
        <img src="./src/assets/shared/logo.svg" alt="" />
      </div>
      <div className="p-5 cursor-pointer">
        <img src="./src/assets/shared/icon-hamburger.svg" alt="" />
      </div>
      <div className="hidden flex-row space-x-5 p-10 nav-transparent bg-lightWhite">
        <Link to={"/"}>HOME</Link>
        <Link to={"/"}>DESTINATION</Link>
        <Link to={"/"}>CREW</Link>
        <Link to={"/"}>TECHNOLOGY</Link>
      </div>
    </nav>
  );
};
