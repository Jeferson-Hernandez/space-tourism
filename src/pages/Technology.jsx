import { technology } from "../constants/data.json";
import { useEffect, useState } from "react";

export const Technology = () => {
  const [tech, setTech] = useState("Launch vehicle");
  const [techInfo, setTechInfo] = useState();

  useEffect(() => {
    const techData = technology.filter((data) => data.name === tech);

    setTechInfo(techData[0]);
  }, [tech]);

  const changeTech = (tech) => {
    setTech(tech);
  };

  return (
    <section className="h-screen overflow-x-hidden bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop object-cover bg-cover bg-no-repeat pt-24 md:pt-32 lg:pt-[12.5rem]">
      <h5 className="text-lightWhite text-center font-barlow pb-8 tracking-[0.16875rem] md:text-left md:pb-5 md:w-full md:pl-10 md:tracking-[0.21094rem] lg:tracking-[0.29531rem] lg:pb-0 lg:pl-60">
        <span className="text-lightWhite font-barlow font-bold opacity-25 tracking-[0.16875rem] pr-5">
          03
        </span>
        SPACE LAUNCH 101
      </h5>
      <div className="text-center flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-between lg:text-left">
        <div className="">
          <img
            src={techInfo?.images.landscape}
            alt={techInfo?.name}
            className="w-screen object-cover lg:hidden"
          />
          <img
            src={techInfo?.images.portrait}
            alt={techInfo?.name}
            className="hidden lg:block object-cover "
          />
        </div>

        <div className="flex flex-col space-y-10 pt-10 items-center lg:flex-row lg:space-y-0 lg:space-x-10  lg:pl-60">
          <div className="flex flex-row space-x-5 lg:flex-col lg:space-x-0 lg:space-y-10">
            {technology.map((data, index) => (
              <a
                key={data.name}
                onClick={() => changeTech(data.name)}
                className={
                  tech === data.name
                    ? "technology-menu-active"
                    : "technology-menu"
                }
              >
                {index + 1}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-1 ">
            <h6 className="tracking-[0.05rem] font-bellafair text-lightPurple uppercase">
              The terminology ...
            </h6>
            <h3 className="font-bellafair text-lightWhite uppercase">
              {techInfo?.name}
            </h3>
            <p className="text-[0.9375rem] leading-[1.5625rem] font-barlow text-lightPurple md:text-[1rem] md:leading-[1.75rem] lg:text-[1.125rem] lg:w-[27.75rem] lg:leading-[2rem] px-10 pt-5 md:px-24 lg:px-0">
              {techInfo?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
