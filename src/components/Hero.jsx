function HeroComp() {
  return (
    <div className="flex flex-col lg:grid grid-cols-2 justify-center gap-4 w-full md:w-[90%] mx-auto py-[30px] lg:py-[120px]">
      <div className="flex w-[90%] md:w-full lg:w-auto mx-auto md:mx-0">
        <h1 className="font-chango lg:text-[36px] xl:text-[60px] uppercase text-[27px] break-words">
          We're
          <br />
          <span className="text-[#CDFFAD]"> la cultura.</span>
          <br /> class.
          <br /> Re-Birth
          <br /> Thee re-
          <br /> Renaissance
        </h1>
      </div>
      <img
        className="xl:h-[534px] lg:h-[400px] h-[534px] w-full object-cover rounded-[20px] md:rounded-none"
        src="/hero-img.png"
        alt=""
      />
    </div>
  );
}

export default HeroComp;
