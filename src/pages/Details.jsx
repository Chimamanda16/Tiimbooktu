import { useEffect, useState } from "react";
import { useArtworkStore } from "../Store/useArtworkStore";
import { useNavigate, useParams } from "react-router-dom";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { RelatedProduct } from "../components/RelatedProduct";
import { useCartStore } from "../Store/useCartStore";

const DetailsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [focusImg, setFocusImg] = useState();
    const { fetchArtwork, artworkItem } = useArtworkStore();
    const { addToCart } = useCartStore();

    useEffect(() => {
        fetchArtwork(id);
        window.scrollTo(0, 0)
    }, [id, fetchArtwork]);

    useEffect(() => {
        setFocusImg(() => artworkItem?.images[0].url)
    }, [artworkItem]);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)  
      };
    const decreaseQuantity = () => {
        if(quantity === 1) return
        setQuantity((prev) => prev - 1)
      };

    const addItemToCart = (data) => {
        let payload = {
            artwork_id: data?.id,
            quantity: quantity,
          };
          addToCart(payload);
    }

    const goBack = () => {
       navigate(-1)
    }
    

    return (
        <div className="bg-[#1C1C1C] text-[#fff] flex flex-col gap-6">
            <NavBarComp />
            <div className="flex gap-[22px] w-[90%] mx-auto items-center">
                    <button onClick={goBack} className="bg-[#2B2B2B] py-4 px-5 rounded-[35px] text-sm md:text-[16px] flex items-center gap-2 text-white">
                        <img src="/assets/icons/arrow-left-white.svg" alt="back" />
                        Back
                    </button>
                    <div className="flex gap-2 flex-wrap text-white text-sm md:text-[16px] capitalize">
                        <span>The Shop</span>
                        <div>{'>'}</div>
                         <span>{artworkItem?.name}</span>
                    </div>
                </div>
            <div className="px-4 w-[90%] mx-auto mt-6 mb-6 font-glacial">
                <div className="block justify-between bp900:flex mb-6">
                    <div className="bp900:w-[50%] w-full p-4 border-[#595959] border-[1px] rounded-[20px] bg-[#2B2B2B]">
                        <img src={focusImg} className="h-[250px] w-[100%] mb-[5%] object-cover rounded-[20px]" alt={artworkItem?.name} />
                        <div className="flex w-[100%] h-[100px] gap-4 rounded-[20px]">
                            {artworkItem?.images.map((img, index) =>
                            (
                                <img onClick={() => setFocusImg(img.url)}
                                    key={index}
                                    className={`h-[100%] cursor-pointer rounded-[15px] w-[30%] ${focusImg == img.url ? 'border-[3px] border-[#7A7A7A]' : ''}`}
                                    src={img?.url} alt={artworkItem?.name} />
                            )
                            )}
                        </div>
                    </div>
                    <div className="bp900:w-[48%] w-full mt-6 bp900:mt-0">
                        <h2 className="font-bold mb-2">{artworkItem?.name}</h2>
                        <p className="font-bold mb-2">${artworkItem?.base_price || ' -- '} x {quantity} </p>
                        <p>{artworkItem?.description || 'No description'}</p>
                        <div className="flex gap-4 mt-6">
                            <div className="text-[17px] flex bg-[#2B2B2B] items-center rounded-[12px] py-3 max-h:[34px]">
                                <div onClick={decreaseQuantity} className="px-4 border-r-2 border-r-[#595959] cursor-pointer">-</div>
                                <div className="px-4 border-r-2 border-r-[#595959]">{quantity}</div>
                                <div onClick={increaseQuantity} className="px-4 cursor-pointer">+</div>
                            </div>
                            <button onClick={() => addItemToCart(artworkItem)} className="uppercase bg-[#cdffad] text-[#1c1c1c] font-bold rounded-[22px] px-4 py-2">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProduct />
            <FooterComp />
        </div>
    )
}

export default DetailsPage;