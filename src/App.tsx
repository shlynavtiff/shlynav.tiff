import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { CursorProvider } from './CursorContext'
import Cursor from './components/Cursor'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation(); // ✅ Now inside Router context

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router> {/* ✅ Move Router to wrap everything */}
      <CursorProvider>
        <Cursor />
        
        <div className="min-h-screen flex flex-col ">
        <NavBar />
          {/* Main content takes available space */}
          <div className="flex-grow items-center justify-center flex">
            <AnimatedRoutes /> {/* Routes component now inside Router */}
          </div>
          <Footer /> {/* Footer always sits at the bottom */}
        </div>
        
      </CursorProvider>
    </Router>
  );
}

export default App;
