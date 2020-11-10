import React, {useState, useRef} from "react";
import "./CustomSelectPresentation.css"
import { v4 as uuidv4 } from 'uuid';

export const CustomSelectPresentation = (props) => {
    const [currentPeriod, setCurrentPeriod] = useState({name: ""})
    const periods = ["Pre-socratico","Helenico","Filosofia Medieval","Filosofia Moderna","Filosofia Contemporanea"]
    const [classButton, setClassButton] = useState({
        active: false
    })
    const handleOnClickList = (period) => {
        setCurrentPeriod({
            name: period
        })
        handleOnClick();

    }
    const options = periods.map((period) => {
        return (
            <li className={"select-elem-container"}  onClick={() => handleOnClickList(period)} key={uuidv4()}>
                <h4>{period}</h4>
            </li>
        )
    })

    const handleOnClick = () => {
       setClassButton({
           active: !classButton.active
       })
    }
    let buttonStyle = classButton.active ? "button-custom-select-active" : "button-custom-select";
    let listStyle = classButton.active ? "select-custom-container--active" : "select-custom-container";

    return (
        <div className={"custom-select-presentation-container"}>
            <div>
                <h5 className={"label-custom-select"}>{props.label}</h5>
            </div>

            <div className={"selected-custom-container"} onClick={()=>handleOnClick()}>
                <h4 className={"current-period-custom-select"}>{props.currentPeriod}</h4>
                <button onClick={()=>handleOnClick()} className={buttonStyle} ><i className="fas fa-chevron-down" /></button>
            </div>
            <ul className={listStyle}>
                {options}
            </ul>
        </div>
    )
}
