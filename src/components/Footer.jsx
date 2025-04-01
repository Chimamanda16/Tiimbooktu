function FooterComp() {
    return (
        <div className="p-[2%_10%] md:p-[2%_5%]">
            <div className="flex justify-between">
                {/* Subscribe Section */}
                <div className="w-[70%] sm:w-full lg:w-[70%]">
                    <p className="text-[#808080] text-[10px] mb-[5%]">By The Way</p>
                    <h2 className="text-[40px] font-medium font-[MyFont] max-md:text-[30px]">
                        SUBSCRIBE TO OUR NEWSLETTERS
                    </h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-[70%] max-md:w-[80%] bg-transparent border border-[#34343C] max-md:p-[5%] md:p-[3%]"
                    />
                </div>

                {/* About & Links Section */}
                <div className="w-[30%] sm:w-full lg:w-[30%]">
                    <p className="text-[#808080] text-[10px] mb-[2%]">About Us</p>
                    <div className="flex justify-between">
                        <div className="md:mr-[10%]">
                            <p>Tiimbooktu</p>
                            <p>Thought</p>
                            <p>Fotografie</p>
                            <p>Shop</p>
                        </div>
                        <div>
                            <p>About</p>
                            <p>Contact Us</p>
                        </div>
                    </div>

                    {/* Contact & Privacy Section */}
                    <div>
                        <p className="text-[#808080] text-[10px] mb-[2%] mt-[4%]">Contact Us</p>
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