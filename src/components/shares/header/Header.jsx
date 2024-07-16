import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (

      <header className='about-link'>
      <div className="work-link">
        <div className="navigation-parent">
            <div className="navigation" />
            <div className="menu" />
          </div>
        <a className="pingoware">Pingoware</a>
      </div>
      <nav className="contact-link">
        <nav className="home-parent">
          
          <Link  className="home" to='/'>Home</Link>
          <a className="about-us" href='#about-us'>About Us</a>
          <Link to='/project-page' className="work">Work</Link>
          <Link to='/project-page' className="services" >Services</Link>
          <a className="contact" href ='#about-us'>Contact</a>
        </nav>
      </nav>
      <button className="rating">
        <a className="get-started">Get Started</a>
      </button>
      </header>
  )
}

export default Header
