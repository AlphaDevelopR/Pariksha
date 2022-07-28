import React from "react";
import { Outlet, Link } from "react-router-dom";


const LoginButton = () => {
    return (
        <>
            <Link to='/login'>
                <button type="button" className="btn  loginButton btn-outline-dark px-3 me-2 " >
                    Login
                </button>
            </Link>

            <Outlet />
        </>
    
    );
}
export default LoginButton;