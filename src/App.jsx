import './App.css'
import { useState } from 'react'
import { Navbar } from './component/Navbar'
import { MobileMenu } from './component/MobileMenu'
import { Home } from './component/sections/Home'
import { Contact } from './component/sections/Contact'
import { About } from './component/sections/About'
import { Projects } from './component/sections/Projects'
import { Artworks } from './component/sections/Artworks'
import { LoadingScreen } from './component/LoadingScreen'
import "./index.css"


function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>} 
      <div className={`min-h-screen transition-opacity duration-700" ${
        isLoaded ? "opacity-100": "opacity-0"} 
      bg-black text-gray`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Artworks/>
        <Contact/>
      </div> 
    </>
  )
}

export default App
