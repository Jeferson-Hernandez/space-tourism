import { useEffect, useState } from "react";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  const getCurrentDimension = () => window.innerWidth;

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenWidth(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    if (screenWidth >= 768) {
      setToggleMenu(false);
    }

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenWidth]);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="relative">
      <nav className="absolute overflow-x-hidden w-full flex flex-row justify-between items-center lg:mt-8">
        <div className="p-5 md:px-8 lg:px-14">
          <img src="/assets/shared/logo.svg" alt="" />
        </div>
        {toggleMenu ? (
          <div
            onClick={handleToggleMenu}
            className="p-5 cursor-pointer md:hidden z-40"
          >
            <img src="/assets/shared/icon-close.svg" alt="" />
          </div>
        ) : (
          <div
            onClick={handleToggleMenu}
            className="p-5 cursor-pointer md:hidden"
          >
            <img src="/assets/shared/icon-hamburger.svg" alt="" />
          </div>
        )}

        <div className="relative hidden md:flex flex-row space-x-16 pl-28 pr-36 md:space-x-10 md:px-20 nav-transparent">
          <NavItem text="home" number="00" />
          <NavItem text="destination" number="01" />
          <NavItem text="crew" number="02" />
          <NavItem text="technology" number="03" />
          <span className="hidden lg:absolute lg:block -left-[34rem] top-[50%] border-b border-lightWhite opacity-30 px-64" />
        </div>
      </nav>

      {/* mobile menu */}
      {toggleMenu && (
        <div className="absolute h-screen w-8/12 flex flex-col pt-36 pl-10 top-0 right-0 z-20 bg-white nav-transparent">
          <NavItem text="home" number="00" toggleMenu={handleToggleMenu} />
          <NavItem
            text="destination"
            number="01"
            toggleMenu={handleToggleMenu}
          />
          <NavItem text="crew" number="02" toggleMenu={handleToggleMenu} />
          <NavItem
            text="technology"
            number="03"
            toggleMenu={handleToggleMenu}
          />
        </div>
      )}
    </div>
  );
};
