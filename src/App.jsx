import "./App.css";

import { useEffect } from "react";
import HomeComp from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ThoughtPage from "./pages/ThoughtPage";
import ShopPage from "./pages/ShopPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderPage } from "./pages/Order";
import { useWishlistStore } from "./Store/useWishlistStore";
import ResetPassword from "./pages/ResetPassword";
import { Layout } from "./admin/layout/layout";
import { Artwork } from "./admin/pages/artwork";
import { OrderDashboard } from "./admin/pages/order";
import { OverViewPage } from "./admin/pages/overview";
import { Feedbacks } from "./admin/pages/Feedbacks";
import GuestData from "./pages/GuestData";
import PageLoader from "./components/PageLoader";
import DelayedRouteWrapper from "./components/DelayedRouteWrapper";

function App() {
  const { fetchWishlist } = useWishlistStore();

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  return (
    <>
      <Router>
        <PageLoader />

        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route
            path="/thought"
            element={
              <DelayedRouteWrapper>
                <ThoughtPage />
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/sign-up"
            element={
              <DelayedRouteWrapper>
                <SignUpPage />
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/login"
            element={
              <DelayedRouteWrapper>
                <LoginPage />
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/tiimbooktu"
            element={
              <DelayedRouteWrapper>
                <Tiimbooktu />
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/shop"
            element={
              <DelayedRouteWrapper>
                <ShopPage />
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <DelayedRouteWrapper>
                <StoryPage />
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/guest/:id"
            element={
              <DelayedRouteWrapper>
                <GuestData />{" "}
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/tuiites"
            element={
              <DelayedRouteWrapper>
                <Tuiites />{" "}
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/rich-us"
            element={
              <DelayedRouteWrapper>
                <RichUs />
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/my-hair"
            element={
              <DelayedRouteWrapper>
                <MyHair />{" "}
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/guestnetno"
            element={
              <DelayedRouteWrapper>
                <Guestnetno />{" "}
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/lacomposmentis"
            element={
              <DelayedRouteWrapper>
                <Composmentis />
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <DelayedRouteWrapper>
                <DetailsPage />
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/cart"
            element={
              <DelayedRouteWrapper>
                <Cart />
              </DelayedRouteWrapper>
            }
          />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route
            path="/details/:id"
            element={
              <DelayedRouteWrapper>
                <DetailsPage />{" "}
              </DelayedRouteWrapper>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="?reset-password" element={<ResetPassword />} />
          <Route
            path="/wishlist"
            element={
              <DelayedRouteWrapper>
                <WishlistPage />{" "}
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/checkout"
            element={
              <DelayedRouteWrapper>
                <CheckoutPage />
              </DelayedRouteWrapper>
            }
          />
          <Route
            path="/order"
            element={
              <DelayedRouteWrapper>
                <OrderPage />{" "}
              </DelayedRouteWrapper>
            }
          />

          {/* Admin Routes */}
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<OverViewPage />} />
            <Route path="artworks" element={<Artwork />} />
            <Route path="orders" element={<OrderDashboard />} />
            <Route path="feedbacks" element={<Feedbacks />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        pauseOnHover={true}
        closeOnClick={true}
        hideProgressBar={true}
      />
    </>
  );
}

export default App;
