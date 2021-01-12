import React from "react";

import emailjs from 'emailjs-com'
import './FooterPresentation.css';

export default function FooterPresentation(props)  {



    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_m1i4h5k', 'contact_form', e.target, 'user_eFKkmKpg6SRYoEnLYkkJs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div id="main-container-footer">
            <div id="title-container">
                <h3>{props.title}</h3>
            </div>
            <div className="form-container">
                <form onSubmit={sendEmail}>
                    <div className="input-container">
                        <div className="input-name-container">
                            <label className="label-input" htmlFor="name" >{props.form.name}</label>
                            <input
                                className={"inputs"}
                                name="name"
                                type="text"
                            />

                        </div>
                        <div className="input-email-container">
                            <label className="label-input" htmlFor="email" >{props.form.email}</label>
                            <input
                                className={"inputs"}
                                name="email"
                                type="text"
                            />

                        </div>
                    </div>
                    <div className="textarea-container">
                        <label className="label-input" htmlFor="message" >{props.form.message}</label>
                        <textarea
                            rows="4"
                            name="message"
                        />
                        <button className="sendButton" type={'submit'}>{props.form.button}</button>
                    </div>

                </form>

            </div>

            <div className="social-media-container">

                    <i className="fas fa-minus"/>
                    <a href="/" className="fab fa-instagram"> </a>
                    <a href="/" className="fab fa-facebook-square"> </a>
                    <a href="/" className="fab fa-twitter-square"> </a>
                    <i className="fas fa-minus"/>

            </div>
            <div className="copyright-container">
               <p> <i className="far fa-copyright copyright-icon" />  {props.copyright}</p>
            </div>
        </div>
    );

}
