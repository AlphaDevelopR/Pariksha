import FormLoginImage from "./FormLoginImage";
import InputField from "./InputField";
import RegisterButton from "./RegisterButton";
import { useState } from "react";
import './formstyle.css';
import axios from "axios" ;
import { useNavigate } from "react-router-dom";
const Form = (prop) => {

    const navigate =useNavigate();

    const [userDetails, setDetails] = useState({
        studentId: "",
        email: "",
        password: ""
    });

    function handleInputChange(event) {
        const {name , value } = event.target;
        //console.log(event.target);
        //const value = event.target.value;
       // const name = event.target.name;

        //console.log(name);
        //console.log(newValue);
        //console.log(userDetails);

        //setDetails({studentId : newValue});
        setDetails(preValue=>{
            return {
                ...preValue,
                [name]: value
            };
        });

        /*setDetails(preValue => {
            
            if (name === "idField") {
                return {
                    studentId: value,
                    email: preValue.email,
                    password: preValue.password
                }
            } else if (name === "emailField") {
                return {
                    studentId: preValue.studentId,
                    email: value,
                    password: preValue.password
                }
            } else if (name === "passwordField") {
                return {
                    studentId: preValue.studentId,
                    email: preValue.email,
                    password: value
                }
            }

        });*/
    }

    const submitDetails=(e) =>{
        e.preventDefault();
        try {
            axios.post("http://localhost:2000/login" , userDetails )
        } catch(err){
            console.log(err);
        }
        prop.onSubmit(userDetails);
        navigate('/user-dashboard');
    }

    return (
        <>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ margin: "150px" }}>
                    <FormLoginImage />
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={submitDetails}>

                            <InputField
                                name="studentId"
                                inputtype='text'
                                textToShow=" Valid Student Id"
                                change={handleInputChange}
                                value={userDetails.studentId}
                            />

                            <InputField
                                name="email"
                                inputtype='email'
                                textToShow="Enter a valid email address"
                                change={handleInputChange}
                                value={userDetails.email}
                            />

                            <InputField
                                name="password"
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

                                    <button type="submit" className="btn btn-primary "
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