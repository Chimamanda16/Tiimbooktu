import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useArtworkStore } from "../Store/useArtworkStore";
import { useCartStore } from "../Store/useCartStore";
import { useWishlistStore } from "../Store/useWishlistStore";

function NavBarComp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { searchArtworks, fetchArtworks } = useArtworkStore();
  const { fetchCart, cartItems } = useCartStore();
  const { error} = useCartStore()
  const {  fetchWishlist, wishlistItems } = useWishlistStore();

  const [tiimbooktuMenu, setTiimbooktuMenu] = useState(false);
  const [contentMenu, setContentMenu] = useState(false);

  useEffect(() => {
    fetchCart();
    fetchWishlist();
  }, [fetchCart, fetchWishlist])

  const handleSearch = (value) => {
    setSearchValue(value)
    if (value) {
      searchArtworks(value)
    } else {
      fetchArtworks()
    }
  }

  const toggleSubMenu = (menu) => {
    if(menu === 'content') {
      setContentMenu(!contentMenu)
      setTiimbooktuMenu(false)
    } else {
      setContentMenu(false)
      setTiimbooktuMenu(!tiimbooktuMenu)
    }
  }

  return (
    <nav className="relative mb-[10px] text-[#fff] font-cinzel">
      {/* Top Nav */}
      <div className="flex justify-between items-center border-b-2 border-[#353535] w-[90%] mx-auto py-3">
        <a href="/"><img src="/assets/logos/tiimbooktu.png" alt="Logo" /></a>

        {/* Search Input */}
        <div className="relative w-[60%] max800:hidden">
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

        {/* Search Icon + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Show search icon only on mobile */}
          <img
            src="/assets/icons/Magnifier.svg"
            alt="Search Icon"
            className="hidden max800:block w-6 h-6"
          />

          {/* Hide user icons on mobile */}
          {!error ? <div className="flex gap-2 max800:hidden">
            <img src="/assets/icons/user-rounded.svg" alt="" />
            <img src="/assets/icons/nav-arrow-down.svg" alt="" />
          </div> : <>
            <Link to='/sign-up' className="bg-[#CDFFAD] flex text-center w-[100px] lg:w-[120px] h-[45px] lg:flex items-center justify-center rounded-[22px] text-xl capitalize text-[#1C1C1C]">
              Sign In
            </Link>
          </>}

          {/* Hamburger/X toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="max800:block hidden"
          >
            {menuOpen ? (
              <img src="/assets/icons/close.svg" alt="Close Menu" />
            ) : (
              <img src="/assets/icons/menu-icon-white.svg" alt="Open Menu" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Nav (Links and Icons) */}
      <div className="flex justify-between items-center border-b-2 border-[#353535] px-[5%] py-[2%] max800:hidden">
        <div className="flex gap-6">
          <div className="flex gap-2 relative capitalize">
            Tiimbooktu
            {tiimbooktuMenu ? <img className="rotate-180" onClick={() => toggleSubMenu('tiimbooktuMenu')} src="/assets/icons/nav-arrow-down.svg" alt="" /> : <img onClick={() => toggleSubMenu('tiimbooktuMenu')} src="/assets/icons/nav-arrow-down.svg" alt="" />}
            {tiimbooktuMenu && (
              <div className="absolute top-8 w-[250px] flex flex-col gap-4 left-0 border-[2px] border-[#595959] rounded-[20px] bg-[#0A0A0A] p-3">
                <Link to='/tiimbooktu'>On Tiimbooktu</Link>
                <Link to='/tuiites'>From The Tutsi</Link>
              </div>
            )}
          </div>
          <div className="flex gap-2 relative capitalize">
            Content
            {contentMenu ? <img className="rotate-180" onClick={() => toggleSubMenu('content')} src="/assets/icons/nav-arrow-down.svg" alt="" /> : <img onClick={() => toggleSubMenu('content')} src="/assets/icons/nav-arrow-down.svg" alt="" />}
            {contentMenu &&
(              <div className="absolute top-8 w-[250px] flex flex-col gap-4 left-0 border-[2px] border-[#595959] rounded-[20px] bg-[#0A0A0A] p-3">
                <Link to='/lacomposmentis'>La Compos Mentis</Link>
                <Link to='/guestnetno'>Guest Content</Link>
              </div>)
            }
          </div>
          <Link to="/#fotografie" className="capitalize">Fotos</Link>
          <Link to="rich-us" className="capitalize">Rich Us</Link>
          <Link to="/shop" className="capitalize">Our Things</Link>
        </div>
        <div className="flex justify-between gap-10 text-black">
          <Link className="relative" to='/cart'>
            <img src="/assets/icons/Bag-4.svg" alt="" />
            <span className="absolute top-[-15px] right-[-15px] text-sm w-6 h-6 flex items-center justify-center rounded-[100%] bg-[#CDFFAD]">{cartItems?.cart_count || '0'}</span>
          </Link>
          <Link className="relative" to='/wishlist'>
          <img src="/assets/icons/Heart.svg" alt="" />
            <span className="absolute top-[-15px] right-[-15px] text-sm w-6 h-6 flex items-center justify-center rounded-[100%] bg-[#CDFFAD]">{wishlistItems.length || '0'}</span>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex lg:hidden flex-col border-[2px] mt-2 mx-[1%] border-[#595959] rounded-[20px] gap-4 bg-[#0A0A0A] px-[5%] py-6 max800:flex">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between w-full">
              Tiimbooktu
              {tiimbooktuMenu ? <img className=" rotate-180" onClick={() => setTiimbooktuMenu(!tiimbooktuMenu)} src="/assets/icons/nav-arrow-down.svg" alt="" /> : <img onClick={() => setTiimbooktuMenu(!tiimbooktuMenu)} src="/assets/icons/nav-arrow-down.svg" alt="" />}
            </div>
            {tiimbooktuMenu && <>
              <Link to='/tiimbooktu'>On Tiimbooktu</Link>
              <Link to='/tuiites'>From The Tutsi</Link>
            </>}
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between w-full">
              Content
              {contentMenu ? <img className=" rotate-180" onClick={() => setContentMenu(!contentMenu)} src="/assets/icons/nav-arrow-down.svg" alt="" /> : <img onClick={() => setContentMenu(!contentMenu)} src="/assets/icons/nav-arrow-down.svg" alt="" />}
            </div>
            {contentMenu && <>
              <Link to='/lacomposmentis'>La Compos Mentis</Link>
              <Link to='/guestnetno'>Guest Content</Link>
            </>}
          </div>
          <Link>Fotos</Link>
          <Link to='/rich-us'>Rich Us</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/wishlist'>Wishlist</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBarComp;
