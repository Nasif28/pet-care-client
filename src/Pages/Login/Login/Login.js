import React from 'react';
import useAuth from './../../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { handleNameChange, toggleLogin, isLogin, setIsLogin, error, handleEmailChange, handlePasswordChange, handleRegistration, isLoading, signInUsingGoogle } = useAuth();


    return (
        <div className="container px-5 mx-5 mx-auto">
            <form onSubmit={handleRegistration}>
                <h3 className="text-success m-4">Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Your Password" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2 text-start">
                        <div>
                            <label className="form-check-label text-success" htmlFor="gridCheck1"> Already have an account? Please click here</label>
                            <input onChange={toggleLogin} className="form-check-input ms-3" type="checkbox" id="gridCheck1" />
                        </div>
                    </div>
                </div>
                <div className="col mb-3 text-danger">{error}</div>
                <button type="submit" className="btn fw-bolder btn-success">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <br />
            <button onClick={signInUsingGoogle} className="btn fw-bolder btn-success">Google Sign In</button>
        </div>
    );
};

export default Login;