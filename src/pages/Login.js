// deps
import React from "react";

// styles
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <p>Welcome to TamaTask!</p>
            <div className="login-component">
                <p className="login-header">Login</p>
                <div className="login-body">
                    <div className="login-field">
                        <p>Username</p>
                        <input type="text" placeholder="Enter your username"></input>
                    </div>
                    <div className="login-field">
                        <p>Password</p>
                        <input type="password" placeholder="Enter your password"></input>
                    </div>
                    <button className="login-button">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;