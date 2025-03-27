import "./App.css";

import HomeComp from './components/Home';
import ThoughtPage from "./pages/ThoughtPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomeComp />} />
              <Route path="/thought" element={<ThoughtPage />} />
          </Routes>
      </Router>
  );
}

export default App