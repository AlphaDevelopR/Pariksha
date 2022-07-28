import React from "react";
import './firstpage.css';
import SignInButton from "../NavBar/SignInButton";

const Firstpage = () => {
    return (
        <>
            <div>
                <div className="row">
                    <div className="column">
                        <h1>One Place for All Your:</h1>
                        <h2>Notes</h2>
                        <h2>Mock Test</h2>
                        <h2>Exam Prepration</h2>
                        <p>Let's learn anywhere and Everywhere</p>

                        <div style={{ marginLeft: "10%" }}>
                            <SignInButton marginLeft="10%" />
                        </div>
                    </div>
                    <div className="column">
                            <img className="firstpage-gif" src="https://voxyard.com/assets/img/content/coding.gif" alt="vector-img-gif" srcSet="" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Firstpage;