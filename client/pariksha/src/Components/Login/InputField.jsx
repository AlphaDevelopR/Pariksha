import React from "react";
import './formstyle.css';

const InputField = (props) => {
    return (
        <div className="form-floating mb-4">
            <input type={props.inputtype} id="form3Example3" className="form-control form-control-lg"
                placeholder={props.textToShow} />
            <label className="form-label" htmlFor="floatingInput">{props.textToShow}</label>
        </div>

    );
}
export default InputField;