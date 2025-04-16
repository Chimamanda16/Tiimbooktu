import { useEffect } from "react";
import { useArtworkStore } from "../Store/useArtworkStore";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import ShopComp from "../components/Shop";


const ShopPage = () =>{

    const { artworks, fetchArtworks, fetchingArtwork } = useArtworkStore();
    useEffect(() =>{
        fetchArtworks();
    }, [fetchArtworks]);
    
    return(
        <div className="bg-[#1c1c1c] text-center text-[#fff] p-6">
            <NavBarComp />
            <ShopComp artworks={artworks} fetchingArtwork={fetchingArtwork} />
            <FooterComp />
        </div>
    )
}

export default ShopPage;