import React from "react";
import { Outlet, Link } from "react-router-dom";

import './NavBar.css';

const SignInButton = () => {
    return (
        <>
            <Link to="/studetn-registeration">
                <button type="button" className="btn signinButton me-3 ">
                    Sign Up
                </button>

            </Link>

            <Outlet />
        </>

    );

}
export default SignInButton;