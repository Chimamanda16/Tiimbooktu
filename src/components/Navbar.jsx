import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useArtworkStore } from "../Store/useArtworkStore";
import { useCartStore } from "../Store/useCartStore";

function NavBarComp() {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const {searchArtworks, fetchArtworks} = useArtworkStore();
  const {fetchCart, cartItems} = useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart])

  const handleSearch = (value) => {
    setSearchValue(value)
    if(value) {
      searchArtworks(value)
    } else {
      fetchArtworks()
    }
  }

  return (
    <nav className="relative mb-[10px]">
      <div className="w-full border-b-2 border-[#353535] py-4">
        <div className="flex w-[88%] mx-auto justify-between items-center">
          <a href="/"><img src="/assets/logos/tiimbooktu.png" alt="" /></a>
          <img className="lg:hidden" src="/assets/icons/menu-icon-white.svg" alt="menu" />
          <div className="relative w-[60%] hidden lg:flex">
            <img
              className="absolute top-1/2 left-4 -translate-y-1/2"
              src="/assets/icons/Magnifier.svg"
              alt="Search Icon"
            />
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              value={searchValue}
              placeholder="Search"
              className="w-full h-auto rounded-none bg-transparent border border-[#34343C] py-[14px] pl-12 pr-5"
            />
          </div>
          <div className="hidden lg:flex">
            <img src="/assets/icons/user-rounded.svg" alt="" />
            <img src="/assets/icons/nav-arrow-down.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="lg:flex hidden justify-between items-center border-b-2 border-[#353535] px-[5%] py-[2%] ">
        <div className="flex gap-6 text-white">
          <div>
            <Link to="/tiimbooktu">Tiimbooktu</Link>
          </div>
          <Link to="/thought">Thought</Link>
          <a href="/#fotografie">Fotografie</a>
          <Link>About</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="flex justify-between gap-6 text-black">
          <Link className="relative" to='/cart'>
            <img src="/assets/icons/Bag-4.svg" alt="" />
            <span className="absolute top-[-15px] right-[-15px] text-sm w-6 h-6 flex items-center justify-center rounded-[100%] bg-[#CDFFAD]">{cartItems?.cart_count || '0'}</span>
          </Link>
          <img src="/assets/icons/Heart.svg" alt="" />
        </div>
      </div>
    </nav>
  );
}

export default NavBarComp;
