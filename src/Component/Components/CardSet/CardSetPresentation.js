import React from "react";
import { CardContainer } from "../Cards/CardContainer";
import "./CardSetPresentation.css"


export const CardSetPresentation = (props) => {

    const cards = props.data.map((card,index) => {
        return (
            <div className={"card-card-set-container"} key={index}>
                <CardContainer image={card.image} title={card.name.toString().toUpperCase()} link={card.link} />
            </div>
        )
    })
    return (
        <div className={"card-set-presentation-main-container"}>
            <div className={"card-set-presentation-container"}>
                {cards}
            </div>
        </div>
    )
}
