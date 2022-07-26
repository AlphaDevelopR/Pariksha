import React from "react";
import BrandMoto from "./BrandMoto";
import LoginButton from "./LoginButton";
import SignInButton from "./SignInButton";

const LoginNavBar = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    <BrandMoto />
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link "style={{color:"#1A2930" , fontWeight:"700", fontFamily: "Lato" , fontSize:"1.2rem"}} href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link "style={{color:"#1A2930" , fontWeight:"700", fontFamily: "Lato" , fontSize:"1.2rem"}} href="">About</a>
                            </li>
                            <li>
                                <LoginButton />
                            </li>
                            <li>
                                <SignInButton />
                            </li>
                        </ul>
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}

        </>
    );
}

export default LoginNavBar;