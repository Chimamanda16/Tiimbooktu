import { useArtworkStore } from '../Store/useArtworkStore';
import { useEffect } from "react";
import { Link } from 'react-router-dom'
function ShopComp() {

  const {artworks, fetchArtwork} = useArtworkStore();

    useEffect(() =>{
      fetchArtwork();
    },[])
  
    return (
      <div className="w-[90%] mx-auto text-center mb-[10%]">
        <h2 className="font-[Chango] text-[40px] lg:text-[112px] tracking-[2px]">
          THE SHOP
        </h2>
  
        <div className="grid grid-cols-4 justify-center gap-4 max-lg:grid-cols-2 max-sm:grid-cols-2 mb-8 lg:mb-16">
          {
            artworks ? artworks.artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="flex flex-col items-center border border-[#353535] lg:p-4 gap-2 pb-2"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__"
                  alt=""
                  className="w-[90%] h-[251px] object-cover block"
                />
                <p>{artwork.name}</p>
                <p>${artwork.base_price}</p>
                <button className="bg-transparent border border-[#a9a9a9] text-white font-bold py-2 px-4 cursor-pointer max-sm:py-1 max-sm:text-xs">
                  Add To Cart
                </button>
              </div>
            )) : (<h2>Loading...</h2>)
          }
        </div>
  
        <Link to="/shop" className="bg-[#cdffad] text-[#1c1c1c] font-normal rounded-[22px] px-4 py-2 cursor-pointer text-lg max-sm:text-base max-sm:px-5 max-sm:py-3">
          View All
        </Link>
      </div>
    );
  }
  
  export default ShopComp;  