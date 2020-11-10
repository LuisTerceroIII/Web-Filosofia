import React, {useState} from "react";
import './CardPresentatioin.css'


export const CardPresentation = (props) => {
    const [shadowBoxClass, setShadowBoxClass] = useState({active: false})

    const handleTitleOnMouseOver = () => {
        setShadowBoxClass({
            active: true
        })
    }
    const handleTitleMouseLeave = () => {
        setShadowBoxClass({
            active: false
        })
    }
    const shadow = shadowBoxClass.active ? "shadow-box--active" : "shadow-box-card-presentation";
    return (
        <div className="card-presentation-container">
            <div className="box-card-presentation">
                <a  href={props.link} target={"_blank"}>
                    <img
                        src={props.image}
                        alt={props.title} />
                    <div className={shadow}> </div>
                    <div>
                        <h1 className="card-title-presentation"
                            onMouseOver={() => handleTitleOnMouseOver()}
                            onMouseLeave={() => handleTitleMouseLeave()}
                        >{props.title}</h1>
                    </div>
                </a>

            </div>
        </div>
)
}
