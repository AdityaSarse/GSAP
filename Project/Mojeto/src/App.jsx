import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import NavBar from './components/navBar'
import Hero from './components/hero'
import Cocktails from './components/cocktails'
import About from './components/about'
gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  )
}

export default App