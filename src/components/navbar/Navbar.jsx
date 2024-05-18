import React from 'react'
import "./navbar.css"
import { useRef } from "react"
import { Link } from "react-scroll";

function Navbar() {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive")

    }

    return (
        <div className="navbarWrapper" id='navbar'>
            <div className="logoDiv">
                <img className='faceLogo' src="/assets/export/LOGO.png" alt="" />
            </div>
            <nav ref={navRef} className="navLinks">
                <Link to="navbar" spy={true} smooth={true} duration={500} className="navLink" onClick={showNavbar}>Home</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="navLink" onClick={showNavbar}>Story</Link>
                <Link to="story" spy={true} smooth={true} duration={500} className="navLink" onClick={showNavbar}>Bearnomics</Link>
                <Link to="team" spy={true} smooth={true} duration={500} className="navLink" onClick={showNavbar}>Team</Link>
                <button className='navBtn navCloseBtn' onClick={showNavbar}>
                </button>
            </nav>
            <a className='buyLink' href="#">
                <div className='buyBtn'>
                    <img src="assets/export/BUY-BEER.png" alt="" />
                </div>
            </a>
            <button className='navBtn navOpenBtn' onClick={showNavbar}>

            </button>
        </div>

    )
}

export default Navbar