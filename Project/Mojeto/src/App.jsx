import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import NavBar from './components/navBar'
import Hero from './components/hero'
gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default App