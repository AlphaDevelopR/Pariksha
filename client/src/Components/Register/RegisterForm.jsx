import React from "react";
import InputField from "../Login/InputField";
import './registerForm.css';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const RegisterForm = (props) => {

    let isLogin = true;
    const navigate = useNavigate();

    const [userDetails, setDetails] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNo: "",
        gender: "",
        stream: ""
    });

    function handleInputChange(event) {

        const { name, value } = event.target;

        setDetails((preValue) => {

            return {

                ...preValue,
                [name]: value

            };

        });
        console.log(userDetails);
    }

    const submitDetails = (e) => {
        e.preventDefault();
       
        try {
            axios.post("http://localhost:2000/insert" , userDetails )
        } catch(err){
            console.log(err);
        }
        props.onRegister(userDetails);

        if(isLogin){
            navigate('/user-dashboard');
           // <Link to='/user-dashboard'/>
        }
    
    }

   

    return (
        <>
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }} >
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                <form onSubmit={submitDetails}>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <InputField
                                                name="firstName"
                                                inputtype='text'
                                                textToShow="First Name"
                                                change={handleInputChange}
                                                value={userDetails.firstName}
                                            />

                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <InputField
                                                name="lastName"
                                                inputtype='text'
                                                textToShow="Last Name"
                                                change={handleInputChange}
                                                value={userDetails.lastName}
                                            />

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <InputField
                                                name="emailAddress"
                                                inputtype='email'
                                                textToShow="Email"
                                                change={handleInputChange}
                                                value={userDetails.email}
                                            />

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <InputField
                                                name="phoneNo"
                                                inputtype='tel'
                                                textToShow="Phone No"
                                                change={handleInputChange}
                                                value={userDetails.phoneNo}
                                            />

                                        </div>
                                    </div>

                                    <div className="row" >

                                        <div className="col-6" >

                                            <h6 className="mb-2 pb-1">Gender: </h6>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender"
                                                    checked={userDetails.gender === 'Female'} value="Female" onChange={handleInputChange} />
                                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender"
                                                    checked={userDetails.gender === 'Male'} value="Male" onChange={handleInputChange} />
                                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender"
                                                    checked={userDetails.gender === 'Other'} value="Other" onChange={handleInputChange} />
                                                <label className="form-check-label" htmlFor="otherGender">Other</label>
                                            </div>

                                        </div>

                                        <div className="col-6">
                                            <label className="form-label select-label">Select Class</label>
                                            <div className="row">
                                                <select className="select form-control-lg" name="stream" onChange={handleInputChange}>
                                                    <option value="Class 10">Class 10</option>
                                                    <option value="PCM">PCM</option>
                                                    <option value="PCB">PCB</option>
                                                    <option value="Commerce">Commerce</option>
                                                    <option value="Arts">Arts</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-2">

                                        <button type="submit" className="btn btn-primary "
                                            style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                        >Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}
export default RegisterForm;