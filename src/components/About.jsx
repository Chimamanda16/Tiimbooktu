function AboutComp() {
    return (
        <div className="mb-[10%] w-[90%] mx-auto font-cinzel">
            <h2 className="lg:text-[80px] max-lg:text-[50px] font-chango uppercase max-md:text-3xl mb-[2%]">Feat. Post</h2>
            <div className="grid lg:grid-cols-2 gap-10">
                <img className="h-[400px] max-md:h-[250px] w-full" src="../about-img.png" alt="" />
                <div className="w-full">
                    <p className="font-[chango] uppercase mb-6">I am my hair</p>
                    <p className="lg:text-[22px]">
                    "... it's toughness and strength. I am a city wall built against attacks; built to build from ashes and adversity: built to use storms and rain and storm to toughen me up to the point of yelling: "IS THERE NO ONE ELSE?"
                    </p>
                    <button className="bg-[#CDFFAD] border-none rounded-[22px] text-[#1c1c1c] cursor-pointer font-normal px-4 py-2 mt-4 lg:mt-[2%]">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutComp;
