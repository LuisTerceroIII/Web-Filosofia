import React from "react";
import data from './Data/Periods'
import {TimeLinePresentation} from "../TimeLinePresentation/TimeLinePresentation";
import './TimeLineContainer.css'

export class TimeLineContainer extends React.Component {
    constructor(props) {
        super(props);
        this.info = data.map(period => {
            return ({
                date: period.period,
                component: (
                    <div className='container text-timeline-container'>
                        <h1>{ period.name }:</h1>
                        <h2>{ period.aproxDate }</h2>
                        <hr />
                        <p>{ period.Description}</p>
                        <hr />
                    </div>
                ),
                data: period.name
            })
        })
    }

    render() {
        return (
            <div className="timeline-main-container">
                <TimeLinePresentation
                    content={this.info}
                    changePhilosophersPage={this.props.changePhilosophersPage}
                />
            </div>
        )
    }

}
