import React, {useState}  from "react";
import { v4 as uuidv4 } from 'uuid';
import './SelectPresentation.css'

export const SelectPresentation = (props) => {
    const [currentPeriod,setCurrentPeriod] = useState({name:props.currentPeriod});


    const handleOnChange = (event) => {
        props.changePhilosophersPage(event.target.value)
        setCurrentPeriod(event.target.value)

    }
    const options = props.periodsName.map(period => {
        return(
            <option key={uuidv4()} value={period} className={"option-period-select"}>
                {period}
            </option>
        )
    })
    return (
        <div className={"select-presentation-container"}>
            <label className={"label-period-select"}>{props.label} </label>
            <select className={"period-select"} id="period" name="period" onChange={(event) => handleOnChange(event)}>
                {options}
            </select>
        </div>
    )
}
