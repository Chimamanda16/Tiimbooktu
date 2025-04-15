import "./App.css";

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
import ResetComp from "./pages/ResetPassword";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomeComp />} />
              <Route path="/thought" element={<ThoughtPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/tiimbooktu" element={<Tiimbooktu />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/story" element={<StoryPage />}/>
              <Route path="/tuiites" element={<Tuiites />} />
              <Route path="/rich-us" element={<RichUs />} />
              <Route path="/my-hair" element={<MyHair />} />
              <Route path="/guestnetno" element={<Guestnetno />} />
              <Route path="/lacomposmentis" element={< Composmentis />} />
              <Route path="/details" element={< DetailsPage />}/>
              <Route path="/reset" element={< ResetComp />}/>
          </Routes>
      </Router>
  );
}

export default App