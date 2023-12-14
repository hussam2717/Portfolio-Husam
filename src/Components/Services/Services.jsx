import React, { useState } from 'react'
import './Services.css'

const Services = () => {

    const [toggleState,setToggleState] = useState(0);


    const toggleTab = (index) =>{
        setToggleState(index);
    }
    
  return (
   <section className="services section" id="services">
    
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What I Offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
            <i class='bx bx-grid-alt services__icon'></i>
          

                <h3 className="services__title">
                     Product <br />Designer
                </h3>
            </div>

            <span className="services__button" onClick={() =>toggleTab(1)}>
                View More<i class='bx bx-chevron-right services__button-icon' ></i></span>
              

            <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                <div className="services__modal-content">
                <i class='bx bx-x services__modal-close'onClick={() => toggleTab(0)} ></i>
               
                    <h3 className="services__modal-title">Product Designer</h3>
                    <p className="services__modal-description">
                        Service with more than 2 year of experince. providing quality work to client and companies..</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">I Develop the user Interface...</p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">Web Page Developer </p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">I create UX element Interactions...</p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">I position your conpany brand... </p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">Design and mockup of product for company</p>
                        </li>

                    </ul>    
                </div>
            </div>
        </div>
 

        <div className="services__content">
            <div>
            <i class='bx bx-code-alt services__icon'></i>
                <h3 className="services__title">UI/UX <br />Designer</h3>
            </div>

            <span onClick={() =>toggleTab(2)} className="services__button">View More<i class='bx bx-chevron-right services__button-icon' ></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal": "services__modal" }>

                <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} class='bx bx-x services__modal-close'></i>

                    <h3 className="services__modal-title">UI /UX Designer</h3>
                    <p className="services__modal-description">
                        Service with more than 2 year of experince. providing quality work to client and companies..</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">I Develop the user Interface...</p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">Web Page Developer </p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">I create UX element Interactions...</p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">I position your conpany brand... </p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">Design and mockup of product for company</p>
                        </li>

                    </ul>    
                </div>
            </div>
        </div>


        <div className="services__content">
            <div>
            <i class='bx bx-map-alt services__icon'></i>
                <h3 className="services__title">Visual <br />Designer</h3>
            </div>

            <span onClick={() =>toggleTab(3)} className="services__button">View More <i class='bx bx-chevron-right services__button-icon' ></i></span>

            <div  className={toggleState === 3 ? "services__modal active-modal": "services__modal" }>
                <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} class='bx bx-x services__modal-close'></i>

                    <h3 className="services__modal-title">Visual Designer</h3>
                    <p className="services__modal-description">
                        Service with more than 2 year of experince. providing quality work to client and companies..</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon' ></i>
                            <p className="services__modal-info">I Develop the user Interface...</p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">Web Page Developer </p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">I create UX element Interactions...</p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">I position your Company brand... </p>
                        </li>

                        <li className="services__modal-service">
                        <i class='bx bx-badge-check services__modal-icon'></i>
                            <p className="services__modal-info">Design and mockup of product for company</p>
                        </li>

                    </ul>    
                </div>
            </div>
        </div>
    </div>

   </section>
  )
}

export default Services