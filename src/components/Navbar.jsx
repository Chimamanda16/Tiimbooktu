import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";
import { LogOut } from "lucide-react";
import { useArtworkStore } from "../Store/useArtworkStore";
import { useAuthStore } from "../Store/useAuthStore";
import { useCartStore } from "../Store/useCartStore";
import { useWishlistStore } from "../Store/useWishlistStore";

function NavBarComp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { searchArtworks, fetchArtworks } = useArtworkStore();
  const { fetchCart, cartItems, errorCode } = useCartStore();
  const { fetchWishlist, wishlistItems } = useWishlistStore();
  const { logout, loading } = useAuthStore();
  const [tiimbooktuMenu, setTiimbooktuMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [contentMenu, setContentMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(stored === "true");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (iconRef.current && !iconRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchCart();
    fetchWishlist();
  }, [fetchCart, fetchWishlist]);

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value) {
      searchArtworks(value);
    } else {
      fetchArtworks();
    }
  };

  const logOut = async () => {
    await logout();
  };

  const toggleSubMenu = (menu) => {
    if (menu === "content") {
      setContentMenu(!contentMenu);
      setTiimbooktuMenu(false);
      setUserMenu(false);
    } else if (menu === "userMenu") {
      setContentMenu(false);
      setTiimbooktuMenu(false);
      setUserMenu(!userMenu);
    } else {
      setContentMenu(false);
      setTiimbooktuMenu(!tiimbooktuMenu);
      setUserMenu(false);
    }
  };

  return (
    <nav className="relative mb-[10px] text-[#fff] font-cinzel">
      {/* Top Nav */}
      <div className="flex justify-between gap-4 items-center border-b-2 border-[#353535] w-[90%] mx-auto py-3 pt-5">
        <a href="/">
          <img src="/assets/logos/tiimbooktu.png" alt="Logo" />
        </a>

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
          <div className="relative" ref={iconRef}>
            <img
              className={
                isActive
                  ? "absolute top-1/2 left-4 -translate-y-1/2"
                  : "hidden max800:block w-6 h-6"
              }
              src="/assets/icons/Magnifier.svg"
              alt="Search Icon"
              onClick={() => setIsActive(true)}
            />
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              value={searchValue}
              placeholder="Search"
              className={
                isActive
                  ? "w-full h-auto rounded-none bg-transparent border border-[#34343C] py-[14px] pl-12 pr-5"
                  : "hidden"
              }
            />
          </div>

          {/* Hide user icons on mobile */}
          {/* User Icon */}
          {errorCode !== 401 ? (
            <div>
              <div className="flex gap-2 max800:hidden">
                <img src="/assets/icons/user-rounded.svg" alt="" />
                <img
                  className={userMenu ? "rotate-180" : ""}
                  onClick={() => toggleSubMenu("userMenu")}
                  src="/assets/icons/nav-arrow-down.svg"
                  alt=""
                />
              </div>
              <div>
                {isLoggedIn && userMenu && (
                  <button
                    onClick={() => logOut()}
                    className="max800:hidden absolute z-[1000] right-2 px-4 py-2 mt-2 mx-[1%] flex gap-1 items-center hover:bg-red-900 font-cinzel text-[15px] bg-[#c53636] text-[#fff] font-normal rounded-[12px]"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader className="animate-spin min-w-[80px]" />
                      </>
                    ) : (
                      <>
                        <LogOut />
                        Logout
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-[#CDFFAD] lg:flex text-center py-3 px-4 hidden items-center justify-center rounded-[22px] text-xl capitalize text-[#1C1C1C]"
            >
              Sign In
            </Link>
          )}

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
            {tiimbooktuMenu ? (
              <img
                className="rotate-180"
                onClick={() => toggleSubMenu("tiimbooktuMenu")}
                src="/assets/icons/nav-arrow-down.svg"
                alt=""
              />
            ) : (
              <img
                onClick={() => toggleSubMenu("tiimbooktuMenu")}
                src="/assets/icons/nav-arrow-down.svg"
                alt=""
              />
            )}
            {tiimbooktuMenu && (
              <div className="absolute top-8 w-[250px] flex flex-col gap-4 left-0 border-[2px] border-[#595959] rounded-[20px] bg-[#0A0A0A] p-3">
                <Link to="/tiimbooktu">On Tiimbooktu</Link>
                <Link to="/tuiites">From The Tutsi</Link>
              </div>
            )}
          </div>
          <div className="flex gap-2 relative capitalize">
            Content
            {contentMenu ? (
              <img
                className="rotate-180"
                onClick={() => toggleSubMenu("content")}
                src="/assets/icons/nav-arrow-down.svg"
                alt=""
              />
            ) : (
              <img
                onClick={() => toggleSubMenu("content")}
                src="/assets/icons/nav-arrow-down.svg"
                alt=""
              />
            )}
            {contentMenu && (
              <div className="absolute top-8 w-[250px] flex flex-col gap-4 left-0 border-[2px] border-[#595959] rounded-[20px] bg-[#0A0A0A] p-3">
                <Link to="/lacomposmentis">La Compos Mentis</Link>
                <Link to="/guestnetno">Guest Content</Link>
              </div>
            )}
          </div>
          <Link to="/#fotografie" className="capitalize">
            Fotos
          </Link>
          <Link to="/rich-us" className="capitalize">
            Rich Us
          </Link>
          <Link to="/shop" className="capitalize">
            Our Things
          </Link>
          <Link to="/shop" className="capitalize">
            Shop
          </Link>
          <Link to="/order" className="capitalize">
            Order
          </Link>
        </div>
        {errorCode !== 401 && (
          <div className="flex justify-between gap-10 text-black">
            <Link className="relative" to="/cart">
              <img src="/assets/icons/Bag-4.svg" alt="" />
              <span className="absolute top-[-15px] right-[-15px] text-sm w-6 h-6 flex items-center justify-center rounded-[100%] bg-[#CDFFAD]">
                {cartItems?.cart_count || "0"}
              </span>
            </Link>
            <Link className="relative" to="/wishlist">
              <img src="/assets/icons/Heart.svg" alt="" />
              <span className="absolute top-[-15px] right-[-15px] text-sm w-6 h-6 flex items-center justify-center rounded-[100%] bg-[#CDFFAD]">
                {wishlistItems.length || "0"}
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex lg:hidden flex-col border-[2px] mt-2 mx-[1%] border-[#595959] rounded-[20px] gap-4 bg-[#0A0A0A] px-[5%] py-6 max800:flex">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between w-full">
              Tiimbooktu
              <img
                className={tiimbooktuMenu ? "rotate-180" : ""}
                onClick={() => setTiimbooktuMenu(!tiimbooktuMenu)}
                src="/assets/icons/nav-arrow-down.svg"
                alt=""
              />
            </div>
            {tiimbooktuMenu && (
              <>
                <Link to="/tiimbooktu">On Tiimbooktu</Link>
                <Link to="/tuiites">From The Tutsi</Link>
              </>
            )}
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between w-full">
              Content
              <img
                className={contentMenu ? "rotate-180" : ""}
                onClick={() => setContentMenu(!contentMenu)}
                src="/assets/icons/nav-arrow-down.svg"
                alt=""
              />
            </div>
            {contentMenu && (
              <>
                <Link to="/lacomposmentis">La Compos Mentis</Link>
                <Link to="/guestnetno">Guest Content</Link>
              </>
            )}
          </div>
          <Link className="text-left">Fotos</Link>
          <Link to="/rich-us" className="text-left">
            Rich Us
          </Link>
          <Link to="/cart" className="text-left">
            Cart
          </Link>
          <Link to="/wishlist" className="text-left">
            Wishlist
          </Link>
          <Link to="/shop" className="text-left">
            Shop
          </Link>
          <Link to="/order" className="text-left">
            Order
          </Link>
          {isLoggedIn && (
            <>
              <button
                onClick={() => logOut()}
                className="relative flex gap-1 font-cinzel items-center justify-center text-[15px] bg-[#c53636] text-[#fff] font-normal rounded-[12px] p-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin min-w-[80px]" />
                  </>
                ) : (
                  <>
                    <LogOut />
                    Logout
                  </>
                )}
              </button>
            </>
          )}

          {errorCode === 401 && (
            <>
              <Link
                to="/login"
                className="bg-[#CDFFAD] flex text-center w-full h-[45px] lg:flex items-center justify-center rounded-[22px] text-xl capitalize text-[#1C1C1C]"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="bg-[#CDFFAD] flex text-center w-full h-[45px] lg:flex items-center justify-center rounded-[22px] text-xl capitalize text-[#1C1C1C]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavBarComp;
