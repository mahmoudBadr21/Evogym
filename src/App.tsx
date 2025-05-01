import { useEffect, useState } from 'react'
import './all.min.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {

  const [activeNav, SetActiveNav] = useState<string>(() => window.location.hash || "#");

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

    const [showLogin, setShowLogin] = useState<boolean>(false);

  useEffect ( ()=> {
    const handleScroll = ()=> {
      if (window.scrollY === 0)setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar isTopOfPage={isTopOfPage} setShowLogin={setShowLogin} activeNav={activeNav} SetActiveNav={SetActiveNav} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer activeNav={activeNav} SetActiveNav={SetActiveNav} />
      </div>
    </>
  )
}

export default App
