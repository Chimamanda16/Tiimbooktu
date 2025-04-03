import "./App.css";
import HomeComp from './components/Home';
import Shop from "./pages/shop";
import ThoughtPage from "./pages/ThoughtPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomeComp />} />
              <Route path="/thought" element={<ThoughtPage />} />
              <Route path="/shop" element={<Shop />} />
          </Routes>
      </Router>
  );
}

export default App