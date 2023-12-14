import React from 'react'
import './About.css'
import AboutImg from "../../Assets/hussamdp2.png"; 
import Info from './Info';
import CV from "../../Assets/HussamCV.jpeg";


const About = () => {
  return (
    
    <section className="about section" id="#about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
        <Info/>

        <p className="about__description">
            Frontend developer , I create web pages with UI / UX user Interface , 
            I have years of experiance and many clients are happy with the project carried out ...
        </p>

        <a download="" href={CV} className="button button--flex">Download CV<i class='bx bxs-file-doc'></i> </a>
        </div>
        </div>
    </section>
  )
}

export default About