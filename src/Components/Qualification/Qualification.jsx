import React, { useState } from 'react'
import "./Qualification.css"

const Qualification = () => {

    const [ToggleState , setToggleState] = useState(1)

        const  ToggleTab = (index) =>{
            setToggleState(index);
        };


  return (
    <section className="qualification section">
         
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My Personal Journey</span>

    <div className="quali__container container">
        <div className="quali__tabs">

            <div className={ToggleState === 1 ?"quali__button quali__active button--flex" : "quali__button  button--flex"} onClick={()=> ToggleTab(1)}>
                <i class='bx bx-building  quali__icon'></i>
                Education
            </div>

            <div  className={ToggleState === 2 ?"quali__button quali__active button--flex" : "quali__button  button--flex"} onClick={()=> ToggleTab(2)}>
                <i class='bx bx-briefcase-alt  quali__icon'></i>
                Experiance
            </div>

        </div>

        <div className="quali__sections">
            <div className={ToggleState === 1 ?
            "quali__content quali__content-active" : "quali__content"}>

                <div className="quali__data">
                    <div className='quali__web'>
                        <h3 className="quali__title">HSC</h3>
                        <span className="quali__subtitle">Aurangabad - University</span>
                        <div className="quali__calender">
                            <i className=''>2017 - 2018</i>
                        </div>
                    </div>

                    <div>
                        <span className="quali__rounder"></span>
                        <span className="quali__line"></span>
                    </div>
                </div>

                <div className="quali__data">
                    <div></div>

                    <div>
                        <span className="quali__rounder"></span>
                        <span className="quali__line"></span>
                    </div>

                    <div>
                        <h3 className="quali__title">B.Tech</h3>
                        <span className="quali__subtitle">SRTMU -Nanded</span>
                        <div className="quali__calender">
                            <i className=''>2018 - 2022</i>
                        </div>
                    </div>

                   
                </div>

                <div className="quali__data">
                    <div className='quali__web'>
                        <h3 className="quali__title"> Web Developement</h3>
                        <span className="quali__subtitle">Tekisky - institute</span>
                        <div className="quali__calender">
                            <i className=''>2021 - 2022</i>
                        </div>
                    </div>

                    <div>
                        <span className="quali__rounder"></span>
                        <span className="quali__line"></span>
                    </div>
                </div>

                <div className="quali__data">
                    <div></div>

                    <div>
                        <span className="quali__rounder"></span>
                        <span className="quali__line"></span>
                    </div>

                    <div>
                        <h3 className="quali__title">UX Expert</h3>
                        <span className="quali__subtitle">Tekisky - Institute</span>
                        <div className="quali__calender">
                            <i className=''>2021 - 2022</i>
                        </div>
                    </div>

                   
                </div>
            </div>


            <div  className={ToggleState === 2 ?
            "quali__content quali__content-active" : "quali__content"} >

<div className="quali__data">
    <div className='quali__web'>
        <h3 className="quali__title">Product Designer</h3>
        <span className="quali__subtitle">Tekisky - Nanded </span>
        <div className="quali__calender">
            <i className=''>2022 - 2023</i>
        </div>
    </div>

    <div>
        <span className="quali__rounder"></span>
        <span className="quali__line"></span>
    </div>
</div>

<div className="quali__data">
    <div></div>

    <div>
        <span className="quali__rounder"></span>
        <span className="quali__line"></span>
    </div>

    <div>
        <h3 className="quali__title">UX Designer</h3>
        <span className="quali__subtitle">ZL Software Com. - Hyderabad.</span>
        <div className="quali__calender">
            <i className=''>2021 - 2022</i>
        </div>
    </div>

   
</div>


<div className="quali__data">
    <div className='quali__web'>  
        <h3 className="quali__title">Web Developer</h3>
        <span className="quali__subtitle"> UI - Tekisky Pvt. Ltd.</span>

        <div className="quali__calender">
            <i className=''>2022 - 2023</i>
        </div>
    </div>

    <div>
        <span className="quali__rounder"></span>
        <span className="quali__line"></span>
    </div>
</div>


</div>
            
        </div>
    </div>
    </section>
  )
}

export default Qualification