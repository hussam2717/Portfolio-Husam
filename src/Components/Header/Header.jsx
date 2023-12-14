import React, { useState } from 'react';
import "./Header.css";


function Header() {

  window.addEventListener("scroll" , function(){
    const header = document.querySelector(".header")
    if (this.scrollY >= 80) header.classList.add("scroll-header");

    else header.classList.remove("scroll-header");
})

  /*Toggle */
  const[Toggle , showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home")

  return (
    <header className="header">

        <nav className="nav container">
            <a href="index.html" className="nav__logo">Hussam</a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className='nav__list grid'>

              <li className='nav__link'>
                <a href="#home" onClick = {()=>setActiveNav('#home')}className= {activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i class="uis uis-house-user"></i>Home
                </a>
              </li>

              <li className='nav__link'>
                <a href="#about" onClick = {()=>setActiveNav('#about')} className= {activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <i class='bx bxs-user-detail'></i>About
                </a>
              </li>

              <li className='nav__link'>
                <a href="#skills"onClick = {()=>setActiveNav('#skills')}className= {activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <i class='bx bx-code-alt'></i>Skills
                </a>
              </li>

              <li className='nav__link'>
                <a href="#services"onClick = {()=>setActiveNav('#services')}className= {activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                <i class='bx bx-briefcase-alt'></i>Services
                </a>
              </li>

              {/* <li className='nav__link'>
                <a href="#portfolio"onClick = {()=>setActiveNav('#portfolio')}className= {activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                <i class='bx bxs-file-archive'></i>Portfolio
                </a>
              </li> */}

              <li className='nav__link'>
                <a href="#contact"onClick = {()=>setActiveNav('#contact')}className= {activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <i class='bx bx-message-square-dots' ></i>Contact
                </a>
              </li>
            </ul>

            <i class="uis uis-times-circle nav__close "  onClick={()=> showMenu(!Toggle)}></i>
          </div>

          <div className="toggle" onClick={()=> showMenu(!Toggle)}>
          <i class="uis uis-apps"></i>
          </div>

           
        </nav>
    </header>
  )
}

export default Header