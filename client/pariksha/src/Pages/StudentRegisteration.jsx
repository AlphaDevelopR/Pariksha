import React from "react";
import Footer from "../Components/Login/Footer";
import RegisterForm from "../Components/Register/RegisterForm";
import LoginNavBar from "../Components/NavBar/LoginNavBar";
import { useState } from "react";

const StudentRegistration = () => {

    const [registrationDetails, onRegister] = useState("");
    

    console.log(registrationDetails);
     
    return (
        <>
            <LoginNavBar />
            <RegisterForm
                onRegister={onRegister} />
            <Footer />

        </>
    );


}
export default StudentRegistration;