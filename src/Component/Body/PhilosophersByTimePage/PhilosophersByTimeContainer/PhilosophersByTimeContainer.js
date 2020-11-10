import React from "react";
import {CSSTransition , SwitchTransition} from "react-transition-group";
import {PhilosophersByTimePresentation} from "../PhilosophersByTimePresentation/PhilosophersByTimePresentation";
import "./PhilosophersByTimeContainer.css"
import "../PhilosophersByTimePresentation/PhilosophersByTimePresentation.css"

export  const PhilosophersByTimeContainer = (props) => {

    const toWatch = props.period.philosophers.map(item => item.name)

    const copy = props.period.philosophers.map(item => item);
    const philosopherList = {
        firstHalf : copy.splice(0,Math.floor(copy.length)/2+1),
        secondHalf : copy.splice(0,copy.length)
    }
    return (
        <div className={"philosophers-main-container"}>
            <SwitchTransition>
                <CSSTransition
                    key={toWatch[0]}
                    timeout={{enter:1000,exit:1500}}
                    classNames={"philosophers-container-"}
                >
                    <PhilosophersByTimePresentation
                        period={props.period}
                        periodsName={props.periodsName}
                        philosopherList={philosopherList}
                        changePhilosophersPage={props.changePhilosophersPage}
                    />
                </CSSTransition>
            </SwitchTransition>
        </div>
    )


}
