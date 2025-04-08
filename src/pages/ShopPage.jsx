import { useEffect } from "react";
import { useArtworkStore } from "../Store/useArtworkStore";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";


const ShopPage = () =>{

    const { artworks, fetchArtwork } = useArtworkStore();
    useEffect(() =>{
        fetchArtwork();
    }, []);
    
    return(
        <div className="bg-[#1c1c1c] text-center text-[#fff] p-6">
            <NavBarComp />
            <h2 className="font-[chango] font-400 text-[70px]">The Shop</h2>
            {console.log(artworks.artworks)}

            <div className="grid grid-cols-4 justify-center max-lg:grid-cols-2 max-sm:grid-cols-2 mb-8 lg:mb-16">
                {
                    artworks ? (artworks.artworks.map((artwork) => (
                        <div key={artwork.id} className="border-[#353535] border-[1px] p-2 font-[cinzel]">
                            <img className="w-[100%]" src="https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__" alt={artwork.category.description}/>
                            <h3 className="">{artwork.name}</h3>
                            <p className="text-[20px] font-400">${artwork.base_price}</p>
                            <button className="p-2 border-[#fff] border-[1px] font-bold mt-2">Add To Cart</button>
                        </div>
                    ))) : (<h2> Loading</h2>) 
                }
            </div>
            <FooterComp />
        </div>
    )
}

export default ShopPage;