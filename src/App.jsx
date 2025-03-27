import "./App.css";

import HomeComp from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomeComp />} />
          </Routes>
      </Router>
  );
}

export default App