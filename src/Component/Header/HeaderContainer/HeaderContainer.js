import React from 'react';
import { HeaderPresentation } from '../HeaderPresentation/HeaderPresentation.js'

export class HeaderContainer extends React.Component {
    menu = ['Inicio','Historia de la Filosofia', 'Corrientes', 'Filosofxs','Contacto'];
    title = 'FILOSOFIA WEB';
    render() {
        return (
         <HeaderPresentation title={this.title} menu={this.menu} />
        )
    }
}



