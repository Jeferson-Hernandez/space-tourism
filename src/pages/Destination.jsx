import { destinations } from "../constants/data.json";
import { useEffect, useState } from "react";

export const Destination = () => {
  const [planet, setPlanet] = useState("Moon");
  const [planetInfo, setPlanetInfo] = useState();

  useEffect(() => {
    // const planetInfo = destinations.filter(
    //   (destination) => destination.name === planet
    // );
    const planetInfo = destinations.filter(
      (destination) => destination.name === planet
    );

    setPlanetInfo(planetInfo[0]);
  }, [planet]);

  const changePlanet = (planet) => {
    setPlanet(planet);
  };

  return (
    <section className="h-screen overflow-x-hidden bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop object-cover bg-cover bg-no-repeat pt-24 md:pt-32">
      <h5 className="text-lightWhite text-center font-barlow pb-8 tracking-[0.16875rem] md:text-left md:pb-14 md:w-full md:pl-10 md:tracking-[0.21094rem] lg:tracking-[0.29531rem] lg:pb-0 lg:pl-48">
        <span className="text-lightWhite font-barlow font-bold opacity-25 tracking-[0.16875rem] pr-5">
          01
        </span>
        PICK YOUR DESTINATION
      </h5>
      <div className="text-center flex flex-col justify-center items-center space-y-10 md:space-y-10 lg:flex-row lg:space-y-0 lg:justify-evenly lg:pt-28 lg:text-start">
        <div className="w-[12rem] h-[12rem] md:w-[19rem] md:h-[19rem] lg:w-[29rem] lg:h-[29rem]">
          <img src={planetInfo?.images.png} alt={planetInfo?.name} />
        </div>
        <div className="flex flex-col space-y-7 justify-center items-center lg:items-start lg:w-[30rem]">
          <div className="flex flex-row space-x-10 font-barlow text-lightPurple text-[0.875rem] tracking-[0.14763rem] md:text-[1rem] md:tracking-[0.16875rem]">
            {destinations.map((destination) => (
              <a
                key={destination.name}
                onClick={() => changePlanet(destination.name)}
                className={
                  planet === destination.name
                    ? "destination-menu-active"
                    : "destination-menu"
                }
              >
                {destination.name}
              </a>
            ))}
          </div>
          <div>
            <h2 className="font-bellafair text-lightWhite uppercase">
              {planetInfo?.name}
            </h2>
            <p className="text-[0.9375rem] leading-[1.5625rem] md:text-[1rem] lg:text-[1.125rem] md:leading-[1.75rem] font-barlow text-lightPurple  lg:leading-[2rem] px-10 md:px-24 lg:px-0 lg:w-[30rem]">
              {planetInfo?.description}
            </p>
          </div>
          <span className="w-10/12 md:w-9/12 lg:w-full  border-b border-[#383B4B]" />
          <div className="flex flex-col space-y-7 md:flex-row md:space-x-32 md:space-y-0">
            <div>
              <p className="text-lightPurple font-barlow text-[1rem] tracking-[0.16875rem]">
                AVG. DISTANCE
              </p>
              <span className="text-lightWhite text-[1.75rem] tracking-[0.16875rem] font-bellafair uppercase ">
                {planetInfo?.distance}
              </span>
            </div>
            <div>
              <p className="text-lightPurple font-barlow text-[1rem] tracking-[0.16875rem]">
                EST. TRAVEL TIME
              </p>
              <span className="text-lightWhite text-[1.75rem] tracking-[0.16875rem] font-bellafair uppercase ">
                {planetInfo?.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
