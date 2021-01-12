import React from 'react';
import { HeaderPresentation } from '../HeaderPresentation/HeaderPresentation.js'

export class HeaderContainer extends React.Component {
    menu = ['Inicio','Historia de la Filosofía', 'Corrientes', 'Filosofxs','Contacto'];
    title = 'FILOSOFÍA WEB';
    render() {
        return (
         <HeaderPresentation title={this.title} menu={this.menu} />
        )
    }
}



