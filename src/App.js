import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./components/index"
import Impressum from "./components/impressum"
import Datenschutz from "./components/datenschutz"
function App() {
  return (
          <Router>
              <Routes>
                  <Route path="/" element={<Index />} />
                    <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutzinformationen" element={<Datenschutz />} />
              </Routes>
          </Router>
  );
}

export default App;
