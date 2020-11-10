import React from "react";
import {SelectPresentation} from "./SelectPresentation";
export const SelectContainer = (props) => {

    return (
        <div className={"selector-main-container"}>
            <SelectPresentation
                label={props.label}
                periodsName={props.periodsName}
                currentPeriod={"Pre-socratico"}
                changePhilosophersPage={props.changePhilosophersPage}

            />
        </div>
    )
}
