import React from "react";
import patrickPhoto from "../assets/images/image-patrick.jpg";

const PatrickProfile = () => {
  return (
    <div className=" desktop:col-span-6 rounded-lg bg-veryDarkBlackishBlue p-5 grid grid-rows-[1fr,3fr]">
      <div className="flex gap-4 items-center">
        <img src={patrickPhoto} alt="hello" className="w-12 rounded-full " />
        <div>
          <h2 className="text-white font-bold text-lg">Patrick Abrams</h2>
          <p className="text-sm text-lightGray font-semibold">
            Verified Graduate
          </p>
        </div>
      </div>
      <div className="grid ">
        <h2 className="text-white font-bold xl:text-2xl text-xl">
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.{" "}
        </h2>
        <p className=" text-lightGray font-semibolde ">
          "The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people.
        </p>
      </div>
    </div>
  );
};

export default PatrickProfile;
