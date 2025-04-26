import "./App.css";

import { useEffect } from "react";
import HomeComp from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ThoughtPage from "./pages/ThoughtPage";
import ShopPage from "./pages/ShopPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Tiimbooktu } from "./pages/Tiimbooku";
import StoryPage from "./pages/BlogPages";
import { Tuiites } from "./pages/Tuiites";
import { RichUs } from "./pages/RichUs";
import { MyHair } from "./pages/MyHair";
import { Guestnetno } from "./pages/Guestnetno";
import Composmentis from "./pages/ComposMentis";
import DetailsPage from "./pages/Details";
import ForgotPassword from "./pages/ForgotPassword";
import WishlistPage from "./pages/Wishlist";
import { Cart } from "./pages/Cart";
import { ConfirmationPage } from "./pages/ConfirmationPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderPage } from "./pages/Order";
import { useWishlistStore } from "./Store/useWishlistStore";
import ResetPassword from "./pages/ResetPassword";
import { Layout } from "./admin/layout/layout";
import { Artwork } from "./admin/pages/artwork";
import { OrderDashboard } from "./admin/pages/order";
import { OverViewPage } from "./admin/pages/overview";

function App() {
  const {fetchWishlist} = useWishlistStore();

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);
  
  return (
    <><Router>
          <Routes>
              <Route path="/" element={<HomeComp />} />
              <Route path="/thought" element={<ThoughtPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/tiimbooktu" element={<Tiimbooktu />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/blog/:id" element={<StoryPage />}/>
              <Route path="/tuiites" element={<Tuiites />} />
              <Route path="/rich-us" element={<RichUs />} />
              <Route path="/my-hair" element={<MyHair />} />
              <Route path="/guestnetno" element={<Guestnetno />} />
              <Route path="/lacomposmentis" element={< Composmentis />} />
              <Route path="/detail/:id" element={<DetailsPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/details/:id" element={< DetailsPage />}/>
              <Route path="/forgot-password" element={< ForgotPassword />}/>
              <Route path="?reset-password" element={< ResetPassword />}/>
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order" element={<OrderPage />} />

              {/* Admin Routes */}
              <Route path="/dashboard" element={<Layout />}>
                <Route index element={<OverViewPage />} />
              <Route path="artworks" element={<Artwork />} />
              <Route path="orders" element={<OrderDashboard />} />
              </Route>
         
          </Routes>
      </Router><ToastContainer
        position="top-right"
        pauseOnHover={true}
        closeOnClick={true}
        hideProgressBar={true}
        /></>
  );
}

export default App