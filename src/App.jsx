import "./App.css";

import HomeComp from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ThoughtPage from "./pages/ThoughtPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomeComp />} />
              <Route path="/thought" element={<ThoughtPage />} />
              <Route path="/register" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
      </Router>
  );
}

export default App