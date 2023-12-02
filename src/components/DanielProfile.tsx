import danielPhoto from "../assets/images/image-daniel.jpg";

const DanielProfile = () => {
  return (
    <div className=" border-red-500 desktop:col-span-6 p-5 bg-moderateViolet rounded-lg grid gap-2 grid-rows[1fr,2fr]">
      <div className="flex gap-4 items-center">
        <img
          src={danielPhoto}
          alt="hello"
          className="w-12 rounded-full border-[3px]  border-lightGray"
        />
        <div>
          <h2 className="text-white font-bold text-lg">Danial Clifford</h2>
          <p className="text-sm text-lightGray font-semibold">
            Verified Graduate
          </p>
        </div>
      </div>
      <div className="grid">
        <h2 className="text-white font-bold xl:text-2xl text-xl">
          I received a job offer mid-course, and the subjects I learned were
          current, if not omore soin the company I joined, I honestly feel I got
          every penny's worth.
        </h2>
        <p className=" text-lightGray font-semibolde">
          "I was an EMT for many years before I joined the bootcamp. I've been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best and most grueling-time of my life. Since completing
          the course, I've successfully switched careers, working as a Software
          Engineer at a VR startup.
        </p>
      </div>
    </div>
  );
};

export default DanielProfile;
