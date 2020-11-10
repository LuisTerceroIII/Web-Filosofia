import React from "react";
import {CardPresentation} from "./CardPresentation";

export const CardContainer = (props) => {

    return (
        <div>
            <CardPresentation image={props.image}
                              title={props.title}
                              link={props.link}
            />
        </div>
    )
}
