function HeroComp() {
    return (
        <div className="flex flex-col lg:grid grid-cols-2 justify-center md:px-[60px] py-[60px] mb-[10%]">
            <div className="flex">
            <h1 className="font-[chango] lg:text-[50px] uppercase max-md:text-[30px] max-md:mb-[2%] break-words max-lg:text-5xl max-md:text-4xl">
            We're<br /><span className="text-[#CDFFAD]"> la cultura.</span><br /> class.<br /> Re Birth.<br /> Re-Renaissance.
            </h1>
            </div>
            <img className="h-[534px] w-full object-cover" src="/hero-img.png" alt="" />
        </div>
    );
}

export default HeroComp;