import React from "react";
import './formstyle.css';

const InputField = (props) => {

    return (
        <div className="form-floating mb-4">
            <input name = {props.name} type={props.inputtype} className="form-control form-control-lg"
                placeholder={props.textToShow}
                onChange={ props.change}
                value={props.value}
            />
            <label className="form-label" htmlFor="floatingInput">{props.textToShow}</label>
        </div>

    );
}
export default InputField;