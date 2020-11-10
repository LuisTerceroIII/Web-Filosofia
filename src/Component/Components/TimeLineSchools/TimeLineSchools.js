import React, {useState} from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import SwipeableViews from 'react-swipeable-views';
import "./TimeLineSchools.css"
import { CardSetContainer } from "../CardSet/CardSetContainer";


export const TimeLineSchools = (props) => {
    const [value,setValue] = useState(0)
    const [previous, setPrevious] = useState(0)
// timelineConfig
    let minEventPadding = 150;
    let maxEventPadding = 10;
    let linePadding = 0;//mueve barra
    let labelWidth = 100;//mueve puntos
    let fillingMotionStiffness = 50;
    let fillingMotionDamping = 25;
    let slidingMotionStiffness = 150;
    let slidingMotionDamping = 25;
    let stylesBackground = '#ffffff';
    let stylesForeground = '#535050';
    let stylesOutline = '#9f9595';
    let isTouchEnabled = true;
    let isKeyboardEnabled = false;
    let isOpenEnding = false;
    let isOpenBeginning = false;
    let dates = []
    for (let i = 0; i <= 6; i++) { //Agregamos la cantidad de puntos que necesitamos, considerando que hay cinco cards por set
        dates.push(1)
    }
    return (
        <div className={"time-line-schools-main-container"}>
            <div className={"time-line-schools-swipeable"}>
                <SwipeableViews
                    hysteresis={1.5}
                    enableMouseEvents={true}
                    index={value}
                    onChangeIndex={(value, previous) => {
                            setValue(value)
                            setPrevious(previous)
                    }}
                    >
                    <div className={"time-line-schools-card-set-container"} >
                        <CardSetContainer data={props.cardsData}  />
                    </div>

                </SwipeableViews>
            </div>
            <div className={"time-line-schools-bar"}>

                <HorizontalTimeline
                    fillingMotion={{ stiffness: fillingMotionStiffness, damping: fillingMotionDamping }}
                    index={value}
                    indexClick={(index) => {
                        setValue(index)
                        setPrevious(value)
                    }}
                    isKeyboardEnabled={isKeyboardEnabled}
                    isTouchEnabled={isTouchEnabled}
                    labelWidth={labelWidth}
                    linePadding={linePadding}
                    maxEventPadding={maxEventPadding}
                    minEventPadding={minEventPadding}
                    slidingMotion={{ stiffness: slidingMotionStiffness, damping: slidingMotionDamping }}
                    styles={{
                        background: stylesBackground,
                        foreground: stylesForeground,
                        outline: stylesOutline
                    }}
                    values={ dates }
                    getLabel={ (date) => ""}
                    isOpenEnding={isOpenEnding}
                    isOpenBeginning={isOpenBeginning}

                />


            </div>
        </div>

    )
}
