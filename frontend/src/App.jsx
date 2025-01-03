import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LostandFound from './pages/LostandFound';
import FAQ from './pages/FAQ';
import Aboutus from './pages/Aboutus';
import BusEase from './pages/Busease';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = React.useState(current_theme ? current_theme : 'light');

  React.useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home theme={theme} setTheme={setTheme} />} />
            <Route path="/busease" element={<BusEase theme={theme} setTheme={setTheme} />} />
            <Route path="/lost-&-found" element={<LostandFound heme={theme} setTheme={setTheme} />} />
            <Route path="/about-us" element={<Aboutus theme={theme} setTheme={setTheme} />} />
            <Route path="/faq" element={<FAQ theme={theme} setTheme={setTheme} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;