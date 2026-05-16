import React from 'react'
import './CustomStyle.css'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import Features  from './components/Features'
import  Pricing  from './components/Pricing'
import Testimonials  from './components/Testimonials'
import Footer  from './components/Footer'

export default function SinglePageWeb() {
return (
    <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}
