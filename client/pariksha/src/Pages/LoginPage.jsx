import React from "react";
import LoginNavBar from "../Components/NavBar/LoginNavBar";
import Form from "../Components/Login/Form";
import Footer from "../Components/Login/Footer";

const LoginPage=() =>{
    return (
        <>
             <LoginNavBar />
             <Form/>
             <Footer/>
        </>
    );

}
export default LoginPage;