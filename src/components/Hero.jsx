function HeroComp() {
    return (
        <div className="flex md:px-[100px] max-lg:block py-[60px] mb-[10%]">
            <h1 className="font-[chango] lg:text-[50px] uppercase max-md:text-[30px] my-[20px] break-words max-lg:text-5xl max-md:text-4xl">
            We're<br /><span className="text-[#CDFFAD]"> la cultura.</span><br /> class.<br /> Re Birth.<br /> Re-Renaissance
            </h1>
            <img className="h-[534px] w-full object-cover" src="/hero-img.png" alt="" />
        </div>
    );
}

export default HeroComp;