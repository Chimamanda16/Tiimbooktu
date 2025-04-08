import "./App.css";

import HomeComp from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ThoughtPage from "./pages/ThoughtPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Tiimbooktu } from "./pages/Tiimbooku";
import { Tuiites } from "./pages/Tuiites";
import { RichUs } from "./pages/RichUs";
import { MyHair } from "./pages/MyHair";
import { Guestnetno } from "./pages/Guestnetno";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomeComp />} />
              <Route path="/thought" element={<ThoughtPage />} />
              <Route path="/register" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/tiimbooku" element={<Tiimbooktu />} />
              <Route path="/tuiites" element={<Tuiites />} />
              <Route path="/rich-us" element={<RichUs />} />
              <Route path="/my-hair" element={<MyHair />} />
              <Route path="/guestnetno" element={<Guestnetno />} />
          </Routes>
      </Router>
  );
}

export default App