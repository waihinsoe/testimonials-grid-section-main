import jonathanPhoto from "../assets/images/image-jonathan.jpg";

const JonathanProfile = () => {
  return (
    <div className="grid gap-3 grid-rows-[1fr,2fr] bg-veryDarkGrayishBlue desktop:col-span-3 rounded-lg p-5">
      <div className="flex gap-4 items-center">
        <img src={jonathanPhoto} alt="hello" className="w-12 rounded-full " />
        <div>
          <h2 className="text-white font-bold text-lg">Jonathan Walters</h2>
          <p className="text-sm text-lightGray font-semibold">
            Verified Graduate
          </p>
        </div>
      </div>
      <div className="grid">
        <h2 className="text-white font-bold xl:text-2xl text-xl">
          The team was very supportive and kept me motivated
        </h2>
        <p className=" text-lightGray font-semibolde">
          "I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I've made in myself.
        </p>
      </div>
    </div>
  );
};

export default JonathanProfile;
