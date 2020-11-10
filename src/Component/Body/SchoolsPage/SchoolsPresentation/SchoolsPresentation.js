import React from "react";
import {TimeLineSchoolsContainer} from "../../../Components/TimeLineSchools/TimeLineSchoolsContainer";
import data from "../../../Components/config/dataCards.json";
import "./SchoolsPresentation.css"
import {CustomSelectContainer} from "../../../Components/CutomSelect/CustomSelectContainer";

export const SchoolsPresentation = (props) => {
    const cardsData = data.map(item => item)
    const numberOfCardsSet = Math.ceil(cardsData.length/5)
    return(
        <div className={"schools-presentation-main-container"}>

            <div className={"schools-presentation-carousel-container"}>
                <TimeLineSchoolsContainer
                    cardsData={cardsData}
                    numberOfCardsSet={numberOfCardsSet}
                />
            </div>

        </div>
    )
}
