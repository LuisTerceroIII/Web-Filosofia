import React from "react";
import "./CardSetContainer.css"
import {CardSetPresentation} from "./CardSetPresentation";

export const CardSetContainer = (props) => {
    return (
        <div>
            <CardSetPresentation data={props.data}/>
        </div>
    )
}
