function FotografieComp() {
    const images = [
        { src: "/thought-card1.png", text: "Tattoo" },
        { src: "/thought-card2.png", text: "Skeleton. Cloak. Scythe" },
        { src: "/thought-card3.png", text: "Knowledge" },
        { src: "/thought-card4.png", text: "Illegal" },
    ];
    
    return (
        <section id="fotografie" className="my-[10%] text-center">
            <h2 className="font-[Chango] text-[40px] lg:text-[112px] mb-5">Fotografie</h2>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
                {images.map((img, index) => (
                    <div key={index} className="text-left w-full md:w-[75%] lg:w-[85%] mx-auto">
                        <img src={img.src} alt={`Thought Card ${index}`} 
                             className="h-[326px] w-[95%]" />
                        <p className="mt-1 text-base">{img.text}</p>
                    </div>
                ))}
            </div>
            <button className="relative mt-5 lg:mt-16  bg-[#CDFFAD] border-none rounded-[22px] text-[#1c1c1c] cursor-pointer font-normal px-4 py-2 max-sm:px-5 max-sm:py-3">
                View all
            </button>
        </section>
    );
}

export default FotografieComp;
