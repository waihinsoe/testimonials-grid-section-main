import kiraPhoto from "../assets/images/image-kira.jpg";

const KiraProfile = () => {
  return (
    <div className="rounded-lg desktop:col-span-3 desktop:row-span-2 order-1 desktop:order-none  p-5 bg-white grid grid-rows-[1fr,3fr]">
      <div className="flex gap-4 items-center">
        <img src={kiraPhoto} alt="hello" className="w-12 rounded-full " />
        <div>
          <h2 className="text-black font-bold text-lg">Kira Whittle</h2>
          <p className="text-sm text-gray-500">Verified Graduate</p>
        </div>
      </div>
      <div className="grid gap-2">
        <h2 className="text-black font-bold xl:text-2xl text-xl">
          Such a life-changing experience. Highly recommended!
        </h2>
        <p className=" text-black font-semibolde ">
          "Before joining the bootcamp, I've never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I've
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend!
        </p>
      </div>
    </div>
  );
};

export default KiraProfile;
