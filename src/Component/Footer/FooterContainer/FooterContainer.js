import React from "react";
import  FooterPresentation  from "../FooterPresentation/FooterPresentation.js";

export class FooterContainer extends React.Component {
    title = "¿ Quieres hacer algún aporte ?\n" +
        "Enviá un mensaje y nos pondremos en contacto.";
    copyright = "Copyright 2020, Luis Espinoza. Si deseas contactarme escríbeme a : luis.espinoza.nav@live.com "
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
