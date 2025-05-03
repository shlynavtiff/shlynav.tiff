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
import { Analytics } from "@vercel/analytics/react"
import SmoothScrollWrapper from './components/SmoothScrollWrapper'


function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <CursorProvider>
        <Cursor />
        <SmoothScrollWrapper>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <div className="flex-grow items-center justify-center flex ">
              <AnimatedRoutes />
            </div>
            <Footer />
            <Analytics />
          </div>
        </SmoothScrollWrapper>
      </CursorProvider>
    </Router>
  )
}

export default App
