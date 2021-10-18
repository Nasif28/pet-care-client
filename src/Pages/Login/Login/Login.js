import React from 'react';
import useAuth from './../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <div>
                <h2>Please Login</h2>
                <button onClick={signInUsingGoogle} className="btn fw-bolder btn-success">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;