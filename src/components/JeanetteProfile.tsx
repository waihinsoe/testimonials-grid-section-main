import jeanettePhoto from "../assets/images/image-jeanette.jpg";

const JeanetteProfile = () => {
  return (
    <div className=" desktop:col-span-3  p-5 rounded-lg bg-white grid grid-rows-[1fr,2fr]">
      <div className="flex gap-4 items-center">
        <img src={jeanettePhoto} alt="hello" className="w-12 rounded-full " />
        <div>
          <h2 className="text-black font-bold text-lg">Kira Whittle</h2>
          <p className="text-sm text-gray-500">Verified Graduate</p>
        </div>
      </div>
      <div className="grid ">
        <h2 className="text-black font-bold xl:text-2xl text-xl">
          An overall wonderful and rewarding experience
        </h2>
        <p className=" text-black font-semibolde">
          "Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love."
        </p>
      </div>
    </div>
  );
};

export default JeanetteProfile;
