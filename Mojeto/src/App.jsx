import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import NavBar from './components/navBar'
import Hero from './components/hero'
import Cocktails from './components/cocktails'
import About from './components/about'
import Art from './components/art'
import Menu from './components/menu'
import Contact from './components/contact'
gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}

export default App