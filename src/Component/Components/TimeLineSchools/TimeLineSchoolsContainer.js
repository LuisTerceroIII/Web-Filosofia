import React from "react";
import {TimeLineSchools} from "./TimeLineSchools";

export const TimeLineSchoolsContainer = (props) => {

    return(
        <div>
            <TimeLineSchools
                cardsData={props.cardsData}
                numberOfCardsSet={props.numberOfCardsSet}
            />
        </div>
    )

}
