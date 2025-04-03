import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";

function ThoughtPage() {
  return (
    <div className="font-satoshi bg-black">
      <NavBarComp />
      <h1 className="font-myFont text-6xl text-center">LA COMPOS MENTIS</h1>
      <div className="mb-20">
        <div className="flex justify-between border-t border-b border-[#353535] px-6 py-4">
          <div className="w-2/5">
            <h3 className="font-myFont text-2xl mb-0">UNTITLED</h3>
            <p className="text-[#808080] text-sm mt-0">February 12, 2024</p>
            <p className="text-[#808080] text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum dicta explicabo nihil odio accusamus veritatis, ipsum dolorem asperiores, similique ipsa laborum rem et velit quisquam laboriosam, doloribus omnis distinctio.
            </p>
            <button className="bg-transparent border border-[#CDFFAD] rounded-[22px] text-[#CDFFAD] font-normal py-2 px-4 cursor-pointer">
              Learn more
            </button>
          </div>
          <div className="w-2/5 ml-5">
            <img
              src="https://fakeimg.pl/600x400?text=+"
              alt=""
              className="object-cover max-h-[300px] w-full"
            />
          </div>
        </div>

        {/* Repeat the card structure for each card */}
        {[...Array(9)].map((_, index) => (
          <div className="flex justify-between border-t border-b border-[#353535] px-6 py-4" key={index}>
            <div className="w-2/5">
              <h3 className="font-myFont text-2xl mb-0">UNTITLED</h3>
              <p className="text-[#808080] text-sm mt-0">February 12, 2024</p>
              <p className="text-[#808080] text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum dicta explicabo nihil odio accusamus veritatis, ipsum dolorem asperiores, similique ipsa laborum rem et velit quisquam laboriosam, doloribus omnis distinctio.
              </p>
              <button className="bg-transparent border border-[#CDFFAD] rounded-[22px] text-[#CDFFAD] font-normal py-2 px-4 cursor-pointer">
                Learn more
              </button>
            </div>
            <div className="w-2/5 ml-5">
              <img
                src="https://fakeimg.pl/600x400?text=+"
                alt=""
                className="object-cover max-h-[300px] w-full"
              />
            </div>
          </div>
        ))}
      </div>
      <FooterComp />
    </div>
  );
}

export default ThoughtPage;
