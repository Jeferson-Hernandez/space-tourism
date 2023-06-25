import { NavItem } from "./NavItem";

export const Navbar = () => {
  return (
    <nav className="absolute overflow-x-hidden w-full flex flex-row justify-between items-center lg:mt-8">
      <div className="p-5 md:px-8 lg:px-14">
        <img src="./src/assets/shared/logo.svg" alt="" />
      </div>

      <div className="p-5 cursor-pointer md:hidden ">
        <img src="./src/assets/shared/icon-hamburger.svg" alt="" />
      </div>
      <div className="hidden md:flex lg:hidden flex-row space-x-10 px-20 nav-transparent">
        <NavItem text="home" number="00" />
        <NavItem text="destination" number="01" />
        <NavItem text="crew" number="02" />
        <NavItem text="technology" number="03" />
      </div>
      <div className="relative hidden md:hidden lg:flex flex-row space-x-16 pl-28 pr-36 nav-transparent">
        <NavItem text="home" number="00" showNumber />
        <NavItem text="destination" number="01" showNumber />
        <NavItem text="crew" number="02" showNumber />
        <NavItem text="technology" number="03" showNumber />
        <span className="hidden lg:absolute lg:block -left-[34rem] top-[50%] border-b border-lightWhite opacity-30 px-64" />
      </div>
    </nav>
  );
};
