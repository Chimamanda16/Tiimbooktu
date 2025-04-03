function FooterComp() {
  return (
    <div className="w-[90%] mx-auto text-center pb-8">
      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        {/* Subscribe Section */}
        <div className="w-full sm:w-full lg:w-[70%] text-start">
          <p className="text-[#808080] text-[10px] mb-[5%] text-start">
            By The Way
          </p>
          <h2 className="text-[40px] text-start font-medium font-[MyFont] max-md:text-[30px]">
            SUBSCRIBE TO OUR NEWSLETTERS
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-[80%] bg-transparent border border-[#34343C] max-md:p-[5%] md:p-[3%]"
          />
        </div>

        {/* About & Links Section */}
        <div className="w-full lg:w-[30%] text-start">
          <div className="flex gap-8 text-start md:gap-[120px]">
            <div className="flex flex-col gap-5">
              <p className="text-[#808080] text-[10px] mb-[2%]">About Us</p>
              <div className="md:mr-[10%] flex flex-col gap-4 text-sm">
                <p>Tiimbooktu</p>
                <p>Thought</p>
                <p>Fotografie</p>
                <p>Shop</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#808080] text-[10px] mb-[2%]">About</p>
              <p>Contact</p>
            </div>
          </div>

          {/* Contact & Privacy Section */}
          <div className="flex flex-col gap-6 mt-6">
            <p className="text-[#808080] text-[10px] uppercase">
              Contact Us
            </p>
            <div>
              <p>+1 (001) 981-76-17</p>
              <p>info@tiimbooktu</p>
            </div>
            <p className="text-[#808080] text-[10px] mt-[4%]">Privacy</p>
            <p className="text-[#808080] text-[10px]">2025-Copyright</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
