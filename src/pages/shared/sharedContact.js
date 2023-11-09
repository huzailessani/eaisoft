// import BaseLayout from "@/components/BaseLayout";
import React from 'react'

import { MdOutlineMail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9krfyfd', 'template_fz4xfkp', form.current, '_FSPr3Du4IsSWkarE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };
    return (<section className="bg-dark p-5 p-5 ">
        <div id='contact'>

            <div className="main-section">
                <h2 className="headings mb-3">Contact us</h2>
            </div>
            <div className="container contact__container pt-5">
                <div className="contact__options">
                    <article className='contact__option text-white'>
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>huzail.isani@gmail.com</h5>
                        <a href="mailto:huzail.isani@gmail.com" target=''>Send A Message</a>
                    </article>
                    <article className='contact__option text-white'>
                        <BsLinkedin className='contact__option-icon' />
                        <h4>Linked In</h4>
                        <h5>Huzail Isani</h5>
                        <a href="https://www.linkedin.com/in/huzail-isani-28b656246/" target=''>Send A Message</a>
                    </article>
                    <article className='contact__option text-white'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+92 3312406756</h5>
                        <a href="https://wa.me/923312406756" target=''>Send A Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send message</button>
                </form>
            </div>
        </div>
    </section>)

};

export default Contact;
