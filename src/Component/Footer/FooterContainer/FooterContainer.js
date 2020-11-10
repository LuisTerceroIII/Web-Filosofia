import React from "react";
import  FooterPresentation  from "../FooterPresentation/FooterPresentation.js";

export class FooterContainer extends React.Component {
    title = "¿ Quieres hacer algun aporte ?\n" +
            "Envianos un mensaje y nos pondremos en contacto.";
    copyright = "Copyright 2020, Luis Espinoza. El registro en esta web implica la aceptacion de politicas de privacidad. Para consultar, modificar o dar de baja sus datos, comunicarse a filosofiaWeb@sophia.com"
    form = {
        name: "NOMBRE",
        email: "EMAIL",
        message: "TU MENSAJE",
        button: "ENVIAR"
    }
    render() {
        return <FooterPresentation
            title={this.title}
            copyright={this.copyright}
            form={this.form}
        />
    }

}
