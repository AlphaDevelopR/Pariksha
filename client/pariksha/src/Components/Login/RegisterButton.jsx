import React  from "react";


const RegisterButton = () => {

    return (
        <>
            <div class="d-grid gap-2 col-12 mt-4 pt-2 ">
                <button type="button" className="btn btn-primary "
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                >Login</button>
            </div>

            <div className="text-center text-lg-start mt-4 pt-2 col-8">
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                    className="link-danger">Register</a>
                </p>
            </div>
        </>
    );

}
export default RegisterButton;