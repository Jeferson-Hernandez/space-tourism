import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="h-screen bg-home-mobile md:bg-home-tablet lg:bg-home-desktop object-cover bg-no-repeat flex flex-col space-y-32 justify-center items-center pt-15">
      <div className="text-center">
        <h5 className="text-[1rem] tracking-[0.16875rem] font-barlow  text-lightPurple">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className="text-[5rem] font-bellafair text-lightWhite">SPACE</h1>
        <p className="text-[0.9375rem] font-barlow text-lightPurple px-5">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="bg-white h-[9.375rem] w-[9.375rem] rounded-full flex justify-center items-center cursor-pointer">
        <Link to={"/"} className="text-[1.25rem] font-bellafair">
          EXPLORE
        </Link>
      </div>
    </section>
  );
};
