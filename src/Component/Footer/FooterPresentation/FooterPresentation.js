import React from "react";
import { useForm } from "react-hook-form";
import './FooterPresentation.css';

export default function FooterPresentation(props)  {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data,e) => {
        console.log(data);
        e.target.reset();
    }


    return (
        <div id="main-container-footer">
            <div id="title-container">
                <h3>{props.title}</h3>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <div className="input-name-container">
                            <label className="label-input" htmlFor="name" >{props.form.name}</label>
                            <input
                                className={"inputs"}
                                name="name"
                                type="text"
                                ref={
                                    register({
                                        required: {value: true, message:'¡Nombre vacio!'}
                                    })
                                }
                            />
                            <span className="error">
                                {errors.name && errors.name.message}
                            </span>

                        </div>
                        <div className="input-email-container">
                            <label className="label-input" htmlFor="email" >{props.form.email}</label>
                            <input
                                className={"inputs"}
                                name="email"
                                type="text"
                                ref={
                                    register({
                                        required: {value: true, message:'¡Email vacio!'}
                                    })
                                }
                            />
                            <span className="error">
                                {errors.email && errors.email.message}
                            </span>
                        </div>
                    </div>
                    <div className="textarea-container">
                        <label className="label-input" htmlFor="message" >{props.form.message}</label>
                        <textarea
                            rows="4"
                            name="message"
                            ref={
                                register({
                                    required: {value: true, message:'¡Mensaje esta vacio!'}
                                })
                            }
                        />
                        <span className="error-textarea">
                            {errors.message && errors.message.message}
                        </span>


                        <button className="sendButton">{props.form.button}</button>
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
