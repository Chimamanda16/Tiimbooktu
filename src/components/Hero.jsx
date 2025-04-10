function HeroComp() {
    return (
        <div className="flex p-10 mb-[10%]">
            <h1 className="font-[chango] lg:text-[50px] uppercase xl:text-[50px] w-[90%] max-w-[1240px] mx-auto my-[20px] break-words max-lg:text-5xl max-lg:max-w-[70%] max-md:text-4xl max-md:max-w-[80%]">
            We're<br /><span className="text-[#CDFFAD]"> la cultura.</span><br /> class.<br /> Re Birth.<br /> Re-Renaissance
            </h1>
            <img className="h-[534px] w-full object-cover" src="/hero-img.png" alt="" />
        </div>
    );
}

export default HeroComp;