import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
 <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Hussamuddin</h1>

        <ul className="footer__list">

            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#services" className="footer__link">Project</a>
            </li>

            <li>
                <a href="#" className="footer__link">Testominials</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://github.com/hussam2717" className="footer__social-link">
    <i class='bx bxl-github' ></i>
    </a>

    <a href="https://www.instagram.com/hussam__1127/" className="footer__social-link" >
    <i class='bx bxl-instagram' ></i>
    </a>

    <a href="https://web.whatsapp.com/" className="footer__social-link">
    <i class='bx bxl-whatsapp' ></i>
    </a>
        </div>

        <span className="footer__copy">
            &#169; Hussamuddin . All rights reserved
        </span>
    </div>
 </footer>
 
  )
}

export default Footer