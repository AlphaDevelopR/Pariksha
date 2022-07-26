import FormLoginImage from "./FormLoginImage";
import React from "react";
import InputField from "./InputField";
import RegisterButton from "./RegisterButton";
import './formstyle.css';
const Form = () => {
    return (
        <>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ margin: "150px" }}>
                    <FormLoginImage />
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <InputField
                                inputtype='text'
                                textToShow=" Valid Student Id"
                            />
                            <InputField
                                inputtype='email'
                                textToShow="Enter a valid email address"
                            />
                            <InputField
                                inputtype="Password"
                                textToShow="Enter password"
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
                            <RegisterButton />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Form;