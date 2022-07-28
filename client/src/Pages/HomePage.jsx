import React from "react";
import LoginNavBar from "../Components/NavBar/LoginNavBar";
import Firstpage from "../Components/HomePageComponents/Firstpage";
import Footer from "../Components/Login/Footer";

const HomePage=()=>{
    return(
        <>

            <LoginNavBar/>
            <Firstpage/>
            <Footer/>

        </>
    );

}
export default HomePage;