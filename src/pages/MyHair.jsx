import React from "react";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { Comment } from "../components/Comment";

export const MyHair = () => {
    return (
        <div className="bg-[#1C1C1C] flex flex-col gap-6">
            <NavBarComp />
            <section
                id="tiimbooku"
                className="text-white flex flex-col pb-8 justify-center items-center gap-6 w-[88%] mx-auto font-chango"
            >
                <div className="flex flex-col w-full lg:items-center gap-4 lg:gap-8 mb-6">
                    <h1 className="lg:text-[81px] text-[24px] font-chango text-white lg:text-center uppercase">I AM MY HAIR</h1>
                    <div className="flex flex-col gap-[47px] lg:gap-[50px] lg:text-center">
                    <p className="text-xl font-cinzel capitalize">
                        I am my hair. I am its story. I am rebellion, because when people conformed, I took a detour. <br />
                        I am my hair. I am its unlikely twists & turns, because my life has taken the same route, twisting & turning into paths, some bad, some great, all memorable. <br /> <br />

                        I am my hair. I am its toughness & strength. I am a city wall built against assault, against attacks; built to build from ashes & adversity; built to use storms & rain & sun to toughen me up to the point of yelling, “Is there no one else?” <br /> <br />

                        I am my hair. I am heritage. Blackness. Pride. Uniqueness. A fingerprint. Never to be found elsewhere but here where I stand. Yes, because no freeform dreads are the same, no matter how much they look alike.
                    </p>
                    <h2 className="text-[26px] font-chango uppercase">“I am my hair. I am beauty. Roughness. Grizzly. Leonine. Fierce. Soft.</h2>
                    <p className="text-xl font-cinzel capitalize">I am my hair. I am the patience that comes with it. The length- longevity. I am eternity. Immortality. Because hair never truly dies. It keeps growing. <br /> <br />

                        I am my hair. Like fine wine. The more it grows, like I grow, the more it becomes beautiful, like I become more beautiful.</p>
                        <img className="w-full max-h-[620px]" src="/assets/images/myhair.png" alt="myhair" />
                        <h2 className="text-[26px] font-chango uppercase">“I am my hair. I am beauty. Roughness. Grizzly. Leonine. Fierce. Soft.</h2>
                        <p className="text-xl font-cinzel capitalize">My hair is an extension of me. Not independent of me. And if you judge me based on my hair, then you’re the exact kind of person I do not want in my life. And, ckuf you too!
                        </p>
                    </div>
                    <Comment />
                </div>
            </section>
            <FooterComp />
        </div>
    );
};
