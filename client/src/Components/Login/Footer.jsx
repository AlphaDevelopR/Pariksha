import React from "react";

const Footer = () => {
    return (
        <>
            <div className=" p-4" style={{backgroundColor:"#6674CC", textAlign:"center"}}>

                <div className="text-white px-4  mb-3 mb-md-0 ">
                    Copyright  Pariksha © 2022. All rights reserved.
                </div>
                <div className=" p-2 mt-2">
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>

            </div>
        </>
    );

}
export default Footer;