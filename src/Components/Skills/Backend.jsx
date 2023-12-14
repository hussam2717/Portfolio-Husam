import React from 'react'
import "./Skills.css"

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">BackEnd Developer</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="Skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">PHP</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

            <div className="Skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">Node Js</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

            <div className="Skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Basic</span>
            </div>
            </div>
        </div>


        <div className="skills__group">
            <div className="Skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">MySql</h3>
                <span className="skills__level">Basic</span>
            </div>
            </div>

            <div className="Skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">FireBase</h3>
                <span className="skills__level">Basic</span>
            </div>
            </div>

            <div className="Skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">C#</h3>
                <span className="skills__level">Basic</span>
            </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Backend