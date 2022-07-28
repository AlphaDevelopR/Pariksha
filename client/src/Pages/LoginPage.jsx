import React, { useState } from "react";
import LoginNavBar from "../Components/NavBar/LoginNavBar";
import Form from "../Components/Login/Form";
import Footer from "../Components/Login/Footer";

const LoginPage = () => {

    const [userDetails, onSubmit] = useState("");
    
    console.log(userDetails);
    return (
        <>
            <LoginNavBar />
            <Form
                onSubmit={onSubmit} />
            <Footer />
            
        </>
    );

}
export default LoginPage;