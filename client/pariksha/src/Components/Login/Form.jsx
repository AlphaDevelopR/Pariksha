import FormLoginImage from "./FormLoginImage";
import React from "react";
import InputField from "./InputField";
import RegisterButton from "./RegisterButton";
import { useState } from "react";
import './formstyle.css';

const Form = () => {

    const [userDetails, setDetails] = useState({
        studentId: "",
        email: "",
        password: ""
    });

    function handleInputChange(event) {
        const newValue = event.target.value;
        const fieldName = event.target.name;

        console.log(fieldName);
        console.log(newValue);
        console.log(userDetails);

        //setDetails({studentId : newValue});

        setDetails(preValue => {
            if (fieldName === "idField") {
                return {
                    studentId: newValue,
                    email: preValue.email,
                    password: preValue.password
                }
            } else if (fieldName === "emailField") {
                return {
                    studentId: preValue.studentId,
                    email: newValue,
                    password: preValue.password
                }
            } else if (fieldName === "passwordField") {
                return {
                    studentId: preValue.studentId,
                    email: preValue.email,
                    password: newValue
                }
            }

        });
    }

    return (
        <>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ margin: "150px" }}>
                    <FormLoginImage />
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <InputField
                                name="idField"
                                inputtype='text'
                                textToShow=" Valid Student Id"
                                change={handleInputChange}
                                value={userDetails.studentId}
                            />
                            <InputField
                                name="emailField"
                                inputtype='email'
                                textToShow="Enter a valid email address"
                                change={handleInputChange}
                                value={userDetails.email}
                            />
                            <InputField
                                name="passwordField"
                                inputtype="Password"
                                textToShow="Enter password"
                                change={handleInputChange}
                                value={userDetails.password}
                            />


                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            {/*Submit Button */}

                            <div className="d-grid gap-2 col-12 mt-4 pt-2 ">

                                    <button type="button" className="btn btn-primary "
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                    >Submit</button>

                            </div>

                            <RegisterButton />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Form;