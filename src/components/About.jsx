import { Link } from "react-router-dom";

function AboutComp() {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="py-20 w-full md:w-[90%] mx-auto font-glacial flex flex-col gap-12 ">
        <h2 className="lg:text-[80px] w-[90%] md:w-auto mx-auto md:text-[40px] font-chango uppercase text-[26px] mb-[2%] md:text-center lg:text-start">
          Feat. Post
        </h2>
        <div className="grid w-full lg:grid-cols-2 gap-8 pb-10">
          <h4 className="font-chango w-[90%] md:w-auto lg:mx-auto text-[22px] lg:hidden uppercase">
            I am my hair
          </h4>

          <img
            className="w-full max-h-[500px] rounded-[20px] md:rounded-none"
            src="/assets/images/home-hair.png"
            alt=""
          />
          <div className="w-[90%] md:w-auto mx-auto flex flex-col items-start justify-end gap-6">
            <h4 className="font-chango hidden lg:block uppercase">
              I am my hair
            </h4>
            <audio className="w-full lg:w-[300px]" src="/assets/audio/Tiimbooku-audio.mp3" controls></audio>
            <p className="lg:text-[22px]">
              "... it's toughness and strength. I am a city wall built against
              attacks; built to build from ashes and adversity: built to use
              storms and rain and storm to toughen me up to the point of
              yelling: "IS THERE NO ONE ELSE?"
            </p>
            <Link
              to="/my-hair"
              className="bg-[#CDFFAD] block border-none rounded-[22px] text-[#1c1c1c] cursor-pointer font-normal px-4 py-2"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
