import React from "react";
import  FooterPresentation  from "../FooterPresentation/FooterPresentation.js";

export class FooterContainer extends React.Component {
    title = "¿ Quieres hacer algún aporte o consulta ?\n" +
        "Enviá un mensaje y me contactare contigo.";
    copyright = "Copyright 2021, Luis Espinoza. Para contratar mis servicios de desarrollador web escríbeme a: luis.espinoza.nav@live.com "
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
