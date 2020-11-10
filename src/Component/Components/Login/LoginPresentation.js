import React from "react";
import "./LoginPresentation.css"
import { v4 as uuidv4 } from 'uuid';
import {Link} from "react-router-dom";

export const LoginPresentation = (props) => {
    const title = "FILOSOFIA WEB";
    const subtitle = "Registrate";
    const inputFields = ["Nombre de usuario", "Email", "Constraseña"];
    const termAndCondition = "  Acepto terminos y condiciones";
    const button = "Crear cuenta";
    const inputs = inputFields.map((field,index) => {
        return (
            <div key={uuidv4()} className={"label-input-container-login-presentation"}>
                <h6 className={"label-input-login-presentation"} key={uuidv4()} htmlFor={index}>{field}</h6>
                <input className={"input-login-presentation"} key={uuidv4()} type={"text"} id={index}/>
            </div>
        )
    })

    return(
        <section className={"login-presentation-main-container"}>
            <h1 className={"title-login-presentation"}>{title}</h1>
            <form className={"form-login-presentation"}>
                <h2 className={"sub-title-login-presentation"}>{subtitle}</h2>
                <div className={"divisor-line-login-presentation"}> </div>
                {inputs}
                <label className={"check-box-login-presentation"}>
                    <input type={"checkbox"} onClick={() => props.handleCheckBox()}/>
                    {termAndCondition}
                </label>
                <button className={"submit-button-login-presentation"}>{button}</button>
                <a href={"/history"}>Iniciar Sesion</a>
            </form>
        </section>
    )
}
