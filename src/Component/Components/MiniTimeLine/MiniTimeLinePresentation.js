import React, {useState} from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import "./MiniTimeLinePresentation.css"


export const MiniTimeLinePresentation = (props) => {
    let currentPeriod = (() => {
        switch (props.currentPeriod) {
            case "Pre-socraticos":
                return 0;
            case "Helénicos":
                return 1;
            case "Medievales":
                return 2;
            case "Modernos":
                return 3;
            case "Contemporáneos":
                return 4;
            default:
                return 0;
        }
    })();

    const [value,setValue] = useState(currentPeriod)
    const [previous, setPrevious] = useState(0)
// timelineConfig
    let minEventPadding = 150;
    let maxEventPadding = 10;
    let linePadding = 30;//mueve barra
    let labelWidth = 160;//mueve puntos
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
    let dates = [
        `${props.periodsName[0]}           /1/1`,
        `${props.periodsName[1]}              /1/2`,
        `${props.periodsName[2]}           /1/3`,
        `${props.periodsName[3]}     /1/4`,
        `${props.periodsName[4]}     /1/5` ]
    return(
        <div className={"mini-timeline-presentation-container"}>
            <div className={"horizontal-mini-timeline-container"}>
                <HorizontalTimeline
                    fillingMotion={{ stiffness: fillingMotionStiffness, damping: fillingMotionDamping }}
                    index={value}
                    indexClick={async (index) => {
                        setValue(index)
                        setPrevious(value)
                        switch (index) {
                            case 0:
                                props.changePhilosophersPage(props.periodsName[index])
                                break;
                            case 1:
                                props.changePhilosophersPage(props.periodsName[index])
                                break;
                            case 2:
                                props.changePhilosophersPage(props.periodsName[index])
                                break;
                            case 3:
                                props.changePhilosophersPage(props.periodsName[index])
                                break;
                            case 4:
                                props.changePhilosophersPage(props.periodsName[index])
                                break;
                            default:
                                props.changePhilosophersPage(props.periodsName[0])
                        }




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
                    getLabel={ (date) => {
                        if(date.toString().startsWith("Filosofía Contemporá")) {
                            return date.toString().slice(0,20) + "nea"
                        }
                        return date.toString().slice(0,20)
                    }}
                    isOpenEnding={isOpenEnding}
                    isOpenBeginning={isOpenBeginning}
                />
            </div>
        </div>
    )
}
