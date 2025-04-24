import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../Store/useCartStore";
import { useEffect } from "react";
import { useArtworkStore } from "../Store/useArtworkStore";
import { useWishlistStore } from "../Store/useWishlistStore";
function ShopComp() {
  const navigate = useNavigate();
  const { artworks, fetchingArtwork, fetchArtworks } = useArtworkStore();
  const { fetchWishlist, addToWishlist, removeFromWishlist, wishlistItems } =
    useWishlistStore();
  const { addToCart } = useCartStore();

  useEffect(() => {
    fetchArtworks();
  }, [fetchArtworks, fetchWishlist]);

  function addToFavorites(e, id) {
    e.stopPropagation();

    if (wishlistItems?.some((item) => item.id === id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(id);
    }
  }

  const addArtToCart = (e, data) => {
    let payload = {
      artwork_id: data?.id,
      quantity: 1,
    };
    e.stopPropagation();
    addToCart(payload);
  };

  const goToDetail = (e, id) => {
    e.stopPropagation();
    navigate(`/detail/${id}`);
  };

  return (
    <div className="w-[90%] mx-auto text-center flex flex-col gap-[30px] items-center font-cinzel py-20  text-white">
      <h2 className="font-chango text-[26px] md:text-[40px] lg:text-[50px] tracking-[2px]">
        THE SHOP
      </h2>

      <div className="grid w-full grid-cols-2 justify-center gap-4 md:grid-cols-3 lg:grid-cols-4 mb-8 lg:mb-16">
        {fetchingArtwork ? (
          <h2 className="text-white text-start w-full">Loading...</h2>
        ) : artworks?.length > 0 ? (
          artworks?.map((artwork) => (
            <div
              onClick={(e) => goToDetail(e, artwork.id)}
              key={artwork.id}
              className="flex flex-col cursor-pointer justify-between items-center border border-[#353535] lg:p-4 gap-2 pb-2"
            >
              <div className="relative w-[90%] h-[251px]">
                <img
                  src={artwork.images[0].url}
                  alt=""
                  className="w-full h-full object-cover block"
                />
                <div className="absolute top-2 right-2 bg-[#595959] p-2 rounded-full">
                  <img
                    src={
                      wishlistItems?.some((item) => item.id === artwork.id)
                        ? "./assets/icons/favorite-heart-black.svg"
                        : "./assets/icons/favorite-heart-white.svg"
                    }
                    alt=""
                    className="w-[24px] h-[24px]"
                    onClick={(e) => addToFavorites(e, artwork.id)}
                  />
                </div>
              </div>
              <p className="capitalize">{artwork.name}</p>
              <p>${artwork.base_price}</p>
              <button
                onClick={(e) => addArtToCart(e, artwork)}
                className="bg-transparent border border-[#a9a9a9] text-white font-bold py-2 px-4 cursor-pointer max-sm:py-1 max-sm:text-xs"
              >
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          "No Artwork Found"
        )}
      </div>

      <Link
        to="/shop"
        className="bg-[#cdffad] text-[#1c1c1c] font-normal rounded-[22px] px-4 py-2 cursor-pointer text-lg max-sm:text-base max-sm:px-5 max-sm:py-3"
      >
        View All
      </Link>
      <div className="w-[90%] max-w-6xl mx-auto my-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-7xl font-bold mb-12 font-[Chango]">
            SIGN UP FOR NEWSLETTERS
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-3xl mx-auto">
          <input
            type="email"
            placeholder="Enter Your E-Mail"
            className="flex-grow py-3 px-4 bg-transparent border border-gray-700 text-white"
          />
          <button className="bg-green-200 text-black py-3 px-8 font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopComp;
