import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import LongForecast from './Long-forecast';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3-days-forecast" element={<LongForecast />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
