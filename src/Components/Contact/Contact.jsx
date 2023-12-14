import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
      .sendForm(
        'service_tcv9twm',
        'template_0u4f4sf',
        form.current,
        'Cie_kKqSpWvCmtnPe'
        )
        e.target.reset()
    };


  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk To Me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">skhussam1717@gmail.com</span>

                        <a href="mailto:skhussam1717@maill.com" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">77560 95850</span>

                        <a href="https://api.whatsapp.com/send?
                        phone=7756095850&text=Hello,more information!" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>

                        <h3 className="contact__card-title">Instagram</h3>
                        <span className="contact__card-data">hussam__1127</span>

                        <a href="https://www.instagram.com/hussam__1127/" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write Me your Project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name='name' className='contact__form-input' placeholder='Inter your Name'/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name='email' className='contact__form-input' placeholder='Inter your Email'/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag ">Project</label>
                       <textarea name="project" cols="30" rows="10" className='contact__form-input' placeholder='write ur project'></textarea>
                    </div>

                    <button className='button button--flex'>Send Message</button>

                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact