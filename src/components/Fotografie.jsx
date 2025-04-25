import { Link } from "react-router-dom";

function FotografieComp() {
  const images = [
    { id: 2, src: "/thought-card1.png", text: "Tattoo" },
    { id: 9, src: "/thought-card2.png", text: "Skeleton. Cloak. Scythe" },
    { id: 5, src: "/thought-card3.png", text: "Knowledge" },
    { id: 4, src: "/thought-card4.png", text: "Illegal" },
  ];

  return (
    <section id="fotografie" className="my-[80px] text-center">
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
          {images.map((img, index) => (
            <div
              key={index}
              className="text-left w-full md:w-[75%] lg:w-[85%] mx-auto"
            >
              <Link to={`/blog/${img.id}`}>
                <img
                  src={img.src}
                  alt={`Thought Card ${index}`}
                  className="h-[326px] w-full"
                />
              </Link>

              <p className="mt-1 text-base">{img.text}</p>
            </div>
          ))}
        </div>
        <Link
          to="/lacomposmentis"
          className="relative block mt-5 font-cinzel lg:mt-16 bg-[#cdffad] text-[#1c1c1c] font-normal rounded-[22px] px-4 py-2 cursor-pointer text-lg max-sm:text-base max-sm:px-5 max-sm:py-3"
        >
          View All
        </Link>
      </div>
    </section>
  );
}

export default FotografieComp;
