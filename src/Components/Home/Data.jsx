import React from 'react'
import "./Home.css";

const Data = () => {
  return (
   <div className="home__data">
    <h1 className="home__title">Shaikh👋<span className='name-color'>H</span>ussamuddin
   {/* Hii logo   */}
    </h1>
    <h3 className="home__subtitle"><span  className='name-color'>Front-End Developer</span></h3>
    <p className="home__description">
       Iam Frontend developer , I create web pages with UI / UX user Interface .
    </p>
    <a href="#contact" className="button button--flex">Say Hello <i class='bx bxs-paper-plane'></i></a>
   </div>
  )
}

export default Data