function FotografieComp() {
    const images = [
        { src: "/thought-card1.png", text: "Tattoo" },
        { src: "/thought-card2.png", text: "Skeleton. Cloak. Scythe" },
        { src: "/thought-card3.png", text: "Knowledge" },
        { src: "/thought-card4.png", text: "Illegal" },
    ];
    
    return (
        <div className="mb-[10%] text-center">
            <h2 className="font-[MyFont] text-[112px] max-md:text-3xl max-sm:text-2xl">Fotografie</h2>
            <div className="flex flex-wrap justify-center gap-5">
                {images.map((img, index) => (
                    <div key={index} className="text-left w-[295px] max-lg:w-[30%] max-md:w-[35%] max-sm:w-[85%]">
                        <img src={img.src} alt={`Thought Card ${index}`} 
                             className="h-[326px] w-full max-lg:w-[90%] max-md:w-[90%] max-sm:max-w-[500px] max-sm:h-[350px]" />
                        <p className="mt-1 text-base">{img.text}</p>
                    </div>
                ))}
            </div>
            <button className="relative mt-3 bg-[#CDFFAD] border-none rounded-[22px] text-[#1c1c1c] cursor-pointer font-normal px-4 py-2 max-sm:px-5 max-sm:py-3">
                View all
            </button>
        </div>
    );
}

export default FotografieComp;
