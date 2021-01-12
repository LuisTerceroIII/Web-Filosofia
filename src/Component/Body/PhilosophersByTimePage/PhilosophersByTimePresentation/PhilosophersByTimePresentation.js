import React, {useState} from "react";
import './PhilosophersByTimePresentation.css'
import { v4 as uuidv4 } from 'uuid';
import {MiniTimeLineContainer} from "../../../Components/MiniTimeLine/MiniTimeLineContainer";


export function PhilosophersByTimePresentation(props){

    const [index, setIndex] = useState(0)
    const philosopherList = props.philosopherList;
    function refreshPhilosopher(name) {
        setTimeout(() => {
            setIndex(props.period.philosophers.findIndex((philosopher)=> philosopher.name === name))
        },300)

    }
    const listOfPhilosopherOne = philosopherList.firstHalf.map((philosopher) => {
        return (
            <li value={philosopher.name} key={uuidv4()} onMouseOver={() => refreshPhilosopher(philosopher.name)}>
                {philosopher.name}
            </li>
        )
    })
    const listOfPhilosopherTwo = philosopherList.secondHalf.map((philosopher) => {
        return (
            <li value={philosopher.name} key={uuidv4()} onMouseOver={() => refreshPhilosopher(philosopher.name)}>
                {philosopher.name}
            </li>
        )
    })

        return (
            <div className={"philosophers-container"}>
                <div className={"select-philosophers-container"}>
                    <MiniTimeLineContainer currentPeriod={props.period.period}
                                           periodsName={props.periodsName}
                                           changePhilosophersPage={props.changePhilosophersPage}
                                           refreshPhilosopher={refreshPhilosopher}
                                           philosopher={props.philosopherList.firstHalf[0]}
                                           setPhilosopher={props.setPhilosopher}
                    />
                </div>
                <div className={"title-container-philosopher"}>
                    <h1>{props.period.period}</h1>
                </div>

                <div className={"table-container"}>
                    <ul className={"philosopher-list"}>
                        {listOfPhilosopherOne}
                    </ul>
                    <ul className={"philosopher-list philosopher-list-two"}>
                        {listOfPhilosopherTwo}
                    </ul>

                </div>
                <div className={"image-container"}>
                    <img src={props.period.philosophers[index].image} alt={props.period.philosophers[index].name}/>
                    <h5>{props.period.philosophers[index].name}</h5>
                    <h6>{props.period.philosophers[index].time}</h6>
                </div>

                <div className={"philosopher-description-container"}>

                    <p>
                        {props.period.philosophers[index].description}
                    </p>

                    <a className="philosopher-Button" href={props.period.philosophers[index].wikiPage} target={'_blank'}> <i className="fas fa-search" /></a>
                    <h2 className="message-button-philosopher">Saber mas</h2>

                </div>


            </div>
        )

}
