import React, {useState} from "react";
import {LoginPresentation} from "./LoginPresentation";

export const LoginContainer = (props) => {
    const [termsAndCondition,setTermAndConditions] = useState(true);

    const handleCheckBox = () => {
        setTermAndConditions(!termsAndCondition);
        console.log(termsAndCondition)
    }
    return(
        <section>
            <LoginPresentation terms={termsAndCondition} handleCheckBox={handleCheckBox}  />
        </section>
    )
}
