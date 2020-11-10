import React from "react";
import { CustomSelectPresentation } from "./CustomSelectPresentation"

export const CustomSelectContainer = (props) => {
    return (
        <div>
            <CustomSelectPresentation label={props.label} changePhilosophersPage={props.changePhilosophersPage} currentPeriod={props.currentPeriod}/>
        </div>
    )
}
