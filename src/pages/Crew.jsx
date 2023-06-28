import { crew } from "../constants/data.json";
import { useEffect, useState } from "react";

export const Crew = () => {
  const [member, setMember] = useState("Douglas Hurley");
  const [memberInfo, setMemberInfo] = useState();

  useEffect(() => {
    const memberData = crew.filter((data) => data.name === member);

    setMemberInfo(memberData[0]);
  }, [member]);

  const changeCrew = (member) => {
    setMember(member);
  };
  return (
    <section className="h-screen overflow-x-hidden bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop object-cover bg-cover bg-no-repeat pt-24 md:pt-32 lg:pt-[12.5rem]">
      <h5 className="text-lightWhite text-center font-barlow pb-8 tracking-[0.16875rem] md:text-left md:pb-5 md:w-full md:pl-10 md:tracking-[0.21094rem] lg:tracking-[0.29531rem] lg:pb-0 lg:pl-60">
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
            {crew.map((data) => (
              <a
                key={data.name}
                onClick={() => changeCrew(data.name)}
                className={
                  member === data.name ? "crew-menu-active" : "crew-menu"
                }
              />
            ))}
          </div>
          <div className="flex flex-col space-y-1 md:w-9/12 md:h-56 lg:w-full">
            <h4 className="font-bellafair text-lightWhite uppercase opacity-[0.4]">
              {memberInfo?.role}
            </h4>
            <h3 className="font-bellafair text-lightWhite uppercase">
              {memberInfo?.name}
            </h3>
            <p className="text-[0.9375rem] leading-[1.5625rem] font-barlow text-lightPurple md:text-[1rem] md:leading-[1.75rem] lg:text-[1.125rem] lg:w-[27.75rem] lg:leading-[2rem] px-10 pt-5 md:px-24 lg:px-0">
              {memberInfo?.bio}
            </p>
          </div>
          <div className="hidden md:flex flex-row space-x-5">
            {crew.map((data) => (
              <a
                key={data.name}
                onClick={() => changeCrew(data.name)}
                className={
                  member === data.name ? "crew-menu-active" : "crew-menu"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
