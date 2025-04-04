import { Link } from 'react-router-dom'
function ShopComp() {
    const shopData = [
      { img: "/shop-img.png", name: "AFRICOASTER", price: 30 },
      { img: "/shop-img.png", name: "AFRICOASTER", price: 30 },
      { img: "/shop-img.png", name: "AFRICOASTER", price: 30 },
      { img: "/shop-img.png", name: "AFRICOASTER", price: 30 },
      { img: "/shop-img.png", name: "AFRICOASTER", price: 30 },
      { img: "/shop-img.png", name: "AFRICOASTER", price: 30 },
      { img: "/shop-img.png", name: "AFRICOASTER", price: 30 },
      { img: "/shop-img.png", name: "AFRICOASTER", price: 30 },
    ];
  
    return (
      <div className="w-[90%] mx-auto text-center mb-[10%]">
        <h2 className="font-[MyFont] text-[40px] lg:text-[112px] tracking-[2px]">
          THE SHOP
        </h2>
  
        <div className="grid grid-cols-4 justify-center gap-4 max-lg:grid-cols-2 max-sm:grid-cols-2 mb-8 lg:mb-16">
          {shopData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-[#353535] lg:p-4 gap-2 pb-2"
            >
              <img
                src={data.img}
                alt=""
                className="w-[90%] h-[251px] object-cover block"
              />
              <p>{data.name}</p>
              <p>${data.price}</p>
              <button className="bg-transparent border border-[#a9a9a9] text-white font-bold py-2 px-4 cursor-pointer max-sm:py-1 max-sm:text-xs">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
  
        <Link to="/shop" className="bg-[#cdffad] text-[#1c1c1c] font-normal rounded-[22px] px-4 py-2 cursor-pointer text-lg max-sm:text-base max-sm:px-5 max-sm:py-3">
          View All
        </Link>
      </div>
    );
  }
  
  export default ShopComp;  