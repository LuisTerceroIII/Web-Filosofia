import React from "react";
import {MiniTimeLinePresentation} from "./MiniTimeLinePresentation";

export const MiniTimeLineContainer = (props) => {
    return (
        <div>
            <MiniTimeLinePresentation currentPeriod={props.currentPeriod}
                                      periodsName={props.periodsName} changePhilosophersPage={props.changePhilosophersPage}
                                      refreshPhilosopher={props.refreshPhilosopher}
                                      philosopher={props.philosopher}
                                      setPhilosopher={props.setPhilosopher}
            />
        </div>
    )
}
