import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="h-screen overflow-x-hidden bg-home-mobile md:bg-home-tablet lg:bg-home-desktop object-cover bg-cover bg-no-repeat ">
      <div className="flex flex-col justify-evenly items-center pt-20 lg:flex-row lg:pt-96">
        <div className="text-center py-20 md:py-28 lg:py-0 md:px-20 lg:px-36 lg:flex-1 lg:text-left">
          <h5 className="text-[1rem] md:text-[1.25rem] tracking-[0.16875rem] font-barlow  text-lightPurple lg:text-[1.75rem] lg:tracking-[0.29531rem">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="text-[5rem] md:text-[9.375rem] font-bellafair text-lightWhite">
            SPACE
          </h1>
          <p className="text-[0.9375rem] leading-[1.5625rem] md:text-[1rem] lg:md:text-[1.125rem] md:leading-[1.75rem] md:px-32  font-barlow text-lightPurple px-6 lg:w-[35rem] lg:pl-0 lg:leading-[2rem]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        {/* <div className="bg-white h-[9.375rem] w-[9.375rem] rounded-full flex justify-center items-center cursor-pointer">
        <Link to={"/"} className="text-[1.25rem] font-bellafair">
          EXPLORE
        </Link>
      </div> */}
        <div className="bg-white px-9 py-16 mt-5 md:px-14 md:py-24 lg:px-[4.5rem] lg:py-28 rounded-full cursor-pointer lg:mx-48 lg:mt-20">
          <Link
            to={"/"}
            className="text-[1.25rem] md:text-[2rem] font-bellafair"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </section>
  );
};
