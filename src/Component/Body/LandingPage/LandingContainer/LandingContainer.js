import React from "react";
import {LandingPresentation} from '../LandingPresentation/LandingPresentation/LandingPresentation';
import './LandingContainer.css'


export class LandingContainer extends React.Component {


    images = [
        "https://www.divulgaciondinamica.es/wp-content/uploads/2019/06/filosofos-del-coaching.gif",
        "https://recursos.ort.edu.ar/static/archivos/image/904890/133756.jpg",
        "https://1.bp.blogspot.com/-gV-vnd8s0Xg/VEUtE7QcbUI/AAAAAAAAA_Y/WKN8FQswdAk/s1600/Pintura%2Bde%2BJos%C3%A9%2BGarnelo%2BAlda%2B(1866-1945)%2C%2Bfechada%2Ben%2B1892%2Bpara%2Bconmemorar%2Bel%2BIV%2BCentenario%2Bdel%2Bdescubrimiento%2Bde%2BAm%C3%A9rica.%2BMuseo%2BNaval%2Bde%2BMadrid.jpg",
        "https://images.clarin.com/2019/11/24/la-pintura-refiere-a-las___JbEGWTOE_1256x620__1.jpg",
        "https://www.historiando.org/wp-content/uploads/2019/08/revolucion-industrial.jpg",
        "https://malba.s3.sa-east-1.amazonaws.com/wp-content/uploads/2017/03/03155720/Portada-El-caminante-sobre-un-mar-de-nubes-Caspar-David-Friedrich-750x401.jpg"



    ]
    message = 'Descubrir';
    render() {
        return (
            <div className={"landing-container"}>
                <LandingPresentation
                    message={this.message}
                    toLanding={this.props.toLanding}
                    images={this.images}
                />
            </div>
        )
    }
}
