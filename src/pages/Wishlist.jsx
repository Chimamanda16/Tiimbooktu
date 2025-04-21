import ShopComp from "../components/Shop";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { useCartStore } from '../Store/useCartStore';
import { useWishlistStore } from "../Store/useWishlistStore";
import { useEffect } from "react";

const WishlistPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { addToCart } = useCartStore();
    const { fetchWishlist, fetchingWishlist, removeFromWishlist, wishlistItems } = useWishlistStore();
    const addArtToCart = (e, data) => {
        let payload = {
            artwork_id: data?.id,
            quantity: 1,
        };
        e.stopPropagation();
        addToCart(payload);
    }
    function handleDelete(e, id) {
        e.stopPropagation();
        removeFromWishlist(id);
    }

    useEffect(() => {
        fetchWishlist()
    }, []);

    return (
        <div className="bg-[#1A1A1A] text-white text-center font-cinzel">
            <NavBarComp />
            <h2 className="font-chango font-[400] text-[40px] md:text-[81px]">Wishlist</h2>

            {fetchingWishlist && <h2>Loading...</h2>}

            {!fetchingWishlist && wishlistItems.length > 0 && (
                <div className="mb-8">
                    {wishlistItems.map((item) => (
                        <div className="mb-2" key={item.id}>
                            <div className="block p-2 md:px-10 justify-items-center">
                                <div className="w-full md:w-[70%] h-[200px] md:h-[300px] bg-[#2B2B2B] border-[1px] border-[#595959] rounded-[20px]">
                                    <div className="flex gap-8 px-2 py-2 h-[200px] md:h-[274px]">
                                        {item.images?.length > 0 && (
                                            <img className="xl:w-[40%] w-[45%] h-full rounded-[14px] object-cover" src={item.images[0].url} alt="" />
                                        )}
                                        <div className="flex justify-between xl:w-[55%] w-[50%]">
                                            <div className="text-left flex flex-col justify-between">
                                                <div>
                                                    <p className="text-[20px]">{item.name}</p>
                                                    <p className="font-[700] text-[20px]">{item.base_price}</p>
                                                </div>
                                                <button onClick={(e) => addArtToCart(e, item)} className="rounded-[34px] bg-[#CDFFAD] text-black p-3 mt-2 md:w-1/2">Add To Cart</button>
                                            </div>
                                            <img className="w-[24px] h-[24px] cursor-pointer" src="./assets/icons/trash-bin.svg" alt="" onClick={(e) => handleDelete(e, item.id)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!fetchingWishlist && wishlistItems.length === 0 && (
                <div>
                    <div className="relative mx-auto my-8 h-[200px] w-[200px]">
                        <div className="absolute bg-[linear-gradient(to_top,_#1C1C1C_35%,_#353535_65%)] rounded-full w-full h-full inset-0"></div>
                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px]" src="./assets/icons/wishlist-heart.svg" alt="wishlist heart icon" />
                    </div>
                    <p className="font-chango font-[400]">Your Wishlist is Empty</p>
                    <p>Your Wishlist Is Empty At The Moment, Explore Our Shop Below</p>
                    <ShopComp />
                </div>
            )}

            <FooterComp />
        </div>

    )
}

export default WishlistPage;

