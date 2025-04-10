import { useEffect } from "react";
import { useArtworkStore } from "../Store/useArtworkStore";
import { Link } from "react-router-dom";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";

const DetailsPage = () =>{

    const { fetchArtwork, fetchArtworks } = useArtworkStore();
        useEffect(() =>{
            fetchArtworks();
            fetchArtwork(1);
        }, []);

    return(
        <div className="bg-[#1C1C1C] text-[#fff]">
            <NavBarComp />
            <div className="px-[100px] mt-6 mb-6 font-cinzel">
                <div className="flex items-center mb-6">
                    <Link to="/shop" className="bg-[#2B2B2B] mr-6 px-6 py-4 rounded-[35px]">Back</Link>
                    <p className="uppercase">The shop/Osmoto</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-[50%] p-4 border-[#595959] border-[1px] rounded-[20px] bg-[#2B2B2B]">
                        <img className="h-[250px] w-[100%] mb-[5%] object-cover rounded-[20px]" src="https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__" alt="" />
                        <div className="flex w-[100%] h-[80px] gap-4 rounded-[20px]">
                            <img className="h-[100%] rounded-[15px]" src="https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__" alt="" />
                            <img className="h-[100%] rounded-[15px]" src="https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__" alt="" />
                            <img className="h-[100%] rounded-[15px]" src="https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__" alt="" />
                        </div>
                    </div>
                    <div className="w-[48%]">
                        <h2 className="font-bold mb-2">Osmoto</h2>
                        <p className="font-bold mb-2">$13</p>
                        <p>What makes On Seclusion so stunning/desirable as an art piece, apart from its simplicity, is its design managing to balance beauty with an emotion (known to us all) that might not be so beautiful.</p>
                    </div>
                </div>
                <h2 className="mt-6 font-[700]">Related Products</h2>
                <div className="grid grid-cols-4 justify-center text-center gap-4 max-lg:grid-cols-2 max-sm:grid-cols-2 mb-8 lg:mb-16">
                    <div className="border-[#353535] border-[1px] p-2 font-[cinzel]">
                        <img className="w-[100%]" src="https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__" alt="Alt title"/>
                        <h3 className="">Osmot</h3>
                        <p className="text-[20px] font-400">$13</p>
                        <button className="p-2 border-[#fff] border-[1px] font-bold mt-2">Add To Cart</button>
                    </div>
                    <div className="border-[#353535] border-[1px] p-2 font-[cinzel]">
                        <img className="w-[100%]" src="https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__" alt="Alt title"/>
                        <h3 className="">Osmot</h3>
                        <p className="text-[20px] font-400">$13</p>
                        <button className="p-2 border-[#fff] border-[1px] font-bold mt-2">Add To Cart</button>
                    </div>
                    <div className="border-[#353535] border-[1px] p-2 font-[cinzel]">
                        <img className="w-[100%]" src="https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__" alt="Alt title"/>
                        <h3 className="">Osmot</h3>
                        <p className="text-[20px] font-400">$13</p>
                        <button className="p-2 border-[#fff] border-[1px] font-bold mt-2">Add To Cart</button>
                    </div>
                    <div className="border-[#353535] border-[1px] p-2 font-[cinzel]">
                        <img className="w-[100%]" src="https://s3-alpha-sig.figma.com/img/7936/2862/61002f5f5c6c0777f7d92589be89be2d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=USHu72QxBD3-4CMZxzU0A2Jg3TABR8g~XdXDI0S7LjGj0wTRNaD2rZGrTZVESHthy6othFa1q9OxSwrjAJR9lK0NkQAyeFZtPZ8YTZrWu03aUkLmBi0wupOVvEDlqlc8jKTIZ8E0rTM7D9PLZhBbzC7tuRxGpIQ1JMahAUFzbAZytvQeC8iZbjSRDOpifJvtrQ3LqJITFFhiVhWEbVCQL9b6zCvb5vWhTUHbKOQne3e0Mx2AePMTKq4DeKkEORS4yEfZimfFH1TRjF5Oo6zaz-8TbdZrebm-sh1t0ZuDkl6O1x-Gpvlg9bQZsY8GKk~BmfeP9LebQc~rIaG8UIw9cQ__" alt="Alt title"/>
                        <h3 className="">Osmot</h3>
                        <p className="text-[20px] font-400">$13</p>
                        <button className="p-2 border-[#fff] border-[1px] font-bold mt-2">Add To Cart</button>
                    </div>
                </div> 
            </div>
            <FooterComp />
        </div>
    )
}

export default DetailsPage;