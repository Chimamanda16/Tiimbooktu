import ShopComp from "../components/Shop";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { useCartStore } from "../Store/useCartStore";
import { useArtworkStore } from "../Store/useArtworkStore";
import { useEffect, useState } from "react";

const WishlistPage = () =>{
    const [quantity, setQuantity] = useState(1);
    const {fetchCart, cartItems} = useCartStore();
    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)  
      };
    const decreaseQuantity = () => {
        if(quantity === 1) return
        setQuantity((prev) => prev - 1)
      };
    const { artworks, fetchArtworks, fetchingArtwork } = useArtworkStore();
    useEffect(() =>{
        fetchArtworks();
        fetchCart();
    }, [fetchArtworks, fetchCart]);

    return (
        <div className="bg-[#1A1A1A] text-white text-center font-cinzel">
            <NavBarComp />
            <div>
                {cartItems && (cartItems.cart_count > 0) ? (
                    <div>
                        <h2 className="font-chango font-[400] text-[81px]">Wishlist</h2>
                        <div className="relative mx-auto my-8 h-[200px] w-[200px]">
                            <div className="absolute  bg-[linear-gradient(to_top,_#1C1C1C_35%,_#353535_65%)] rounded-full w-full h-full inset-0"></div>
                            <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px]" src="./assets/icons/wishlist-heart.svg" alt="wishlist heart icon" />
                        </div>
                        <p className="font-chango font-[400]">Your Wishlist is Empty</p>
                        <p>Your Wishlist Is Empty At The Moment, Explore Our Shop Below</p>
                        <ShopComp artworks={artworks} fetchingArtwork={fetchingArtwork}/>  
                    </div>
                 
                ) : (
                    <div>
                        <h2 className="font-chango font-[400] text-[81px]">My Cart</h2>
                        <div className="block p-10 justify-items-center">
                            <div className="w-full md:w-[60%] h-[274px] bg-[#2B2B2B] border-[1px] border-[#595959] rounded-[20px]">
                                <div className="flex gap-8 px-2 py-2 h-[274px]">
                                    <img className="xl:w-[25%] lg:w-[30%] w-[35%] h-full rounded-[14px] object-cover" src="./assets/images/sample-cart.png" alt="" />
                                    <div className="flex justify-between xl:w-[70%] lg:w-[65%] w-[60%]">
                                        <div>
                                            <p>Gatorback Purse</p>
                                            <p className="font-[700]">$11</p>
                                            <div className="text-[17px] flex bg-[#0A0A0A] mt-10 items-center rounded-[12px] py-3 max-h:[34px]">
                                                <div onClick={decreaseQuantity} className="px-4 border-r-2 border-r-[#595959] cursor-pointer">-</div>
                                                <div className="px-4 border-r-2 border-r-[#595959]">{quantity}</div>
                                                <div onClick={increaseQuantity} className="px-4 cursor-pointer">+</div>
                                            </div>
                                        </div>
                                        <img className="w-[24px] h-[24px]" src="./assets/icons/trash-bin.svg" alt="" />                                
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                )}
                


                
        
            </div>
            <FooterComp />
        </div>
    )
}

export default WishlistPage;