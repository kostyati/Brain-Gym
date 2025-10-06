import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import GamePage from './components/GamePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<GamePage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;