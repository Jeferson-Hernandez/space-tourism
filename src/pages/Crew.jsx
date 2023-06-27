import { crew } from "../constants/data.json";
import { useEffect, useState } from "react";

export const Crew = () => {
  const [member, setMember] = useState("Douglas Hurley");
  const [memberInfo, setMemberInfo] = useState();

  useEffect(() => {
    // const planetInfo = destinations.filter(
    //   (destination) => destination.name === planet
    // );
    const memberData = crew.filter((data) => data.name === member);

    setMemberInfo(memberData[0]);
  }, [member]);
  console.log(memberInfo);

  const changeCrew = (member) => {
    setMember(member);
  };
  return (
    <section className="h-screen overflow-x-hidden bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop object-cover bg-cover bg-no-repeat pt-24 md:pt-32 lg:pt-[12.5rem]">
      <h5 className="text-lightWhite text-center font-barlow pb-8 text-[1rem] tracking-[0.16875rem] md:text-left md:pb-5 md:w-full md:pl-10 md:text-[1.25rem] md:tracking-[0.21094rem] lg:text-[1.75rem] lg:tracking-[0.29531rem] lg:pb-0 lg:pl-60">
        <span className="text-lightWhite font-barlow font-bold opacity-25 tracking-[0.16875rem] pr-5">
          02
        </span>
        MEET YOUR CREW
      </h5>
      <div className="text-center flex flex-col justify-center items-center md:flex-col-reverse lg:flex-row-reverse lg:space-y-0 lg:text-start lg:justify-evenly">
        <div className="relative flex justify-around items-end w-11/12 lg:w-auto md:mt-16 lg:mt-0">
          <img
            src={memberInfo?.images.png}
            alt={memberInfo?.name}
            className="w-[11rem] h-[16rem] md:w-[28rem] md:h-[35rem] lg:w-[35rem] lg:h-[44rem]"
          />
          <span className="absolute b-0 left-0 w-full border-b border-[#383B4B] md:hidden" />
        </div>

        <div className="flex flex-col space-y-7 pt-5 items-center lg:items-start lg:space-y-32 lg:pt-0 lg:w-[40rem]">
          <div className="flex flex-row space-x-5 md:hidden">
            <a
              onClick={() => changeCrew("Douglas Hurley")}
              className={
                member === "Douglas Hurley"
                  ? "cursor-pointer p-[0.35rem] bg-white rounded-full"
                  : "cursor-pointer p-[0.35rem] bg-white opacity-25  rounded-full hover:opacity-50"
              }
            />
            <a
              onClick={() => changeCrew("Mark Shuttleworth")}
              className={
                member === "Mark Shuttleworth"
                  ? "cursor-pointer p-[0.35rem] bg-white rounded-full"
                  : "cursor-pointer p-[0.35rem] bg-white opacity-25  rounded-full hover:opacity-50"
              }
            />
            <a
              onClick={() => changeCrew("Victor Glover")}
              className={
                member === "Victor Glover"
                  ? "cursor-pointer p-[0.35rem] bg-white rounded-full"
                  : "cursor-pointer p-[0.35rem] bg-white opacity-25  rounded-full hover:opacity-50"
              }
            />
            <a
              onClick={() => changeCrew("Anousheh Ansari")}
              className={
                member === "Anousheh Ansari"
                  ? "cursor-pointer p-[0.35rem] bg-white rounded-full"
                  : "cursor-pointer p-[0.35rem] bg-white opacity-25  rounded-full hover:opacity-50"
              }
            />
          </div>
          <div className="flex flex-col space-y-1 md:w-9/12 md:h-56 lg:w-full">
            <h4 className="text-[1rem] font-bellafair text-lightWhite uppercase opacity-[0.4] md:text-[1.5rem] lg:text-[2rem]">
              {memberInfo?.role}
            </h4>
            <h3 className="text-[1.5rem] font-bellafair text-lightWhite uppercase md:text-[2.5rem] lg:text-[3.5rem]">
              {memberInfo?.name}
            </h3>
            <p className="text-[0.9375rem] leading-[1.5625rem] font-barlow text-lightPurple md:text-[1rem] md:leading-[1.75rem] lg:text-[1.125rem] lg:w-[27.75rem] lg:leading-[2rem] px-10 pt-5 md:px-24 lg:px-0">
              {memberInfo?.bio}
            </p>
          </div>
          <div className="hidden md:flex flex-row space-x-5">
            <a
              onClick={() => changeCrew("Douglas Hurley")}
              className={
                member === "Douglas Hurley"
                  ? "cursor-pointer p-[0.35rem] bg-white rounded-full"
                  : "cursor-pointer p-[0.35rem] bg-white opacity-25  rounded-full hover:opacity-50"
              }
            />
            <a
              onClick={() => changeCrew("Mark Shuttleworth")}
              className={
                member === "Mark Shuttleworth"
                  ? "cursor-pointer p-[0.35rem] bg-white rounded-full"
                  : "cursor-pointer p-[0.35rem] bg-white opacity-25  rounded-full hover:opacity-50"
              }
            />
            <a
              onClick={() => changeCrew("Victor Glover")}
              className={
                member === "Victor Glover"
                  ? "cursor-pointer p-[0.35rem] bg-white rounded-full"
                  : "cursor-pointer p-[0.35rem] bg-white opacity-25  rounded-full hover:opacity-50"
              }
            />
            <a
              onClick={() => changeCrew("Anousheh Ansari")}
              className={
                member === "Anousheh Ansari"
                  ? "cursor-pointer p-[0.35rem] bg-white rounded-full"
                  : "cursor-pointer p-[0.35rem] bg-white opacity-25  rounded-full hover:opacity-50"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
