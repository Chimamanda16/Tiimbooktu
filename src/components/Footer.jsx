function FooterComp() {
  return (
    <section className="bg-[#2B2B2B] w-full pt-12 pb-6">
      <div className="w-[90%] mx-auto text-center">
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          {/* Subscribe Section */}
          <div className="w-full sm:w-full flex flex-col justify-between gap-8 lg:w-[35%] text-start">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 lg:w-[571px]">
                <p className="text-white font-cinzel text-start">
                  YOU MIGHT WANT TO
                </p>
                <h2 className="lg:text-[40px] text-[22px] text-white text-start font-medium font-chango uppercase">
                  Subscribe for <br className="hidden lg:flex" /> our newsletters
                </h2>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full h-auto rounded-none bg-transparent border border-[#34343C] py-[14px] px-5"
                />
                <img className="absolute right-6 top-6" src="/assets/icons/arrow-right-icon-black.svg" alt="arrow-right" />
              </div>
            </div>
            <div className="flex items-center justify-between lg:justify-start gap-[30px]">
              <a href=""><img src="/assets/icons/facebook-icon.svg" alt="facebook" /></a>
              <a href=""><img src="/assets/icons/linkedin-icon.svg" alt="linkedin" /></a>
              <a href=""><img src="/assets/icons/whatsapp-icon.svg" alt="whatsapp" /></a>
              <a href=""><img src="/assets/icons/instagram-icon.svg" alt="instagram" /></a>
            </div>
          </div>

          {/* About & Links Section */}
          <div className="w-full lg:w-[35%] flex flex-col gap-12 text-start">
            <div className="flex gap-8 text-start md:gap-[120px]">
              <div className="flex flex-col gap-5">
                <p className="text-[#FFFFFF] font-cinzel text-[10px] mb-[2%]">About Us</p>
                <div className="flex gap-[120px] text-white font-cinzel">
                  <div className="flex flex-col gap-4">
                    <p>Tiimbooktu</p>
                    <p>Thought</p>
                    <p>Fotografie</p>
                    <p>Shop</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p>About</p>
                    <p>Contact</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Privacy Section */}
            <div className="flex flex-col gap-[120px] font-cinzel text-white">
              <div className="flex flex-col gap-6">
              <p className="text-[10px] uppercase">Contact Us</p>
              <div>
                <a href="tel:+2349015019295">+[234] 901 501 9295</a> <br />
                <a href="mailto:kijagoban@tiimbooktu.com">kijagoban@tiimbooktu.com</a> <br /> <br />
                <a href="https://www.google.com/maps/dir/9.0578598,7.4922416/Millennium+Plaza/@9.0581268,7.4790519,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x104e0bb745872e9d:0xdd22f306d1ed9d5!2m2!1d7.4851904!2d9.0523852?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D">303, Suite D, Millennium Plaza, Central Business District,Abuja, FCT, Nigeria.</a>
              </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:justify-between">
                <p className="text-sm">Privacy</p>
                <p className="text-sm">2025-Copyright</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterComp;
