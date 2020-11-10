import React from "react";
import './LandingPresentation.css'
import Slider from "react-slick";
import {Link} from "react-router-dom";

export function LandingPresentation(props) {

    function handleOnClick() {
        props.toLanding();
    }
    const sliderConfig = {
        dots: false,
        infinite: true,
        speed:5000,
        autoplay: true,
        autoplaySpeed: 600,
        variableWidth: true
    }

        return (
                <div className="mainContainer">
                    <Slider className={"slider"} {...sliderConfig}>
                        <div>
                            <img src={props.images[0]} alt="Filosofos"/>
                            <cite style={{textAlign:"center"}}>
                                "Es probable que ni uno ni otro sepamos nada que tenga valor, pero este<br/> hombre cree saber algo y no lo sabe,
                                en cambio yo, así como,
                                en efecto, no sé, tampoco creo saber.
                                <br/>
                                Parece, pues, que al menos soy más sabio que él en esta misma pequeñez,
                                en que lo que no sé tampoco creo saberlo."<br/>
                                <em>Socrates por Platon.</em>
                            </cite>

                        </div>
                        <div>
                            <img src={props.images[1]} alt="Filosofos"/>
                            <cite>
                                "Por lento que vayas, nunca te alejes del camino. Es mil veces mejor cojear por un <br/>
                                trayecto seguro que correr a toda velocidad y alejarse de su meta, pues nunca alcanzará su destino." <br/>
                                San Agustin
                            </cite>
                        </div>
                        <div>
                            <img src={props.images[2]} alt="Filosofos"/>
                            <cite>
                                “Crean vuestras Altezas que es esta tierra la mejor y más fértil, y temperada, y llana, y buena que haya en el mundo”<br/>
                                 Cristobal Colon.
                            </cite>
                        </div>
                        <div>
                            <img src={props.images[3]} alt="Filosofos"/>
                            <cite>Liberté, egalité, fraternité</cite>
                        </div>
                        <div>
                            <img src={props.images[4]} alt="Filosofos"/>
                            <cite>
                                “El desarrollo de la gran industria socava, pues, bajo los pies de la burguesía,<br/> las bases sobre las que esta produce y se apropia de lo producido. Produce, ante todo, sus propios sepultureros.<br/> Su hundimiento y la victoria del proletariado son igualmente inevitables.”<br/>
                                Karl Marx.
                            </cite>
                        </div>
                        <div>
                            <img src={props.images[5]} alt="Filosofos"/>
                            <cite>
                                "El individuo ha luchado siempre para no ser absorbido por la tribu. <br/>
                                Pero ningún precio es demasiado alto por el privilegio de ser uno mismo."<br/>
                                Friedrich Nietzsche.
                            </cite>
                        </div>
                        <div>

                        </div>
                    </Slider>
                    <div className="discoverContainer">
                        <Link to={"/history"} onClick={() => handleOnClick()} className="enterButton"><i
                            className="fas fa-search"/></Link>
                        <h2 className={"landing-button-message"}>{props.message}</h2>
                    </div>
                </div>

        );
}
