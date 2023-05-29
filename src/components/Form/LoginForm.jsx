import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setAccount } from '../../features/counter/accountSlice';


const LoginForm = () => {

    const [user, setUser] = useState({ username: "", password: "" })

    const handleChangeUserName = (e) => {
        setUser({ ...user, username: e.target.value })

    }
    const handleChangePassword = (e) => {
        setUser({ ...user, password: e.target.value })

    }
    console.log(user)
    // Login thanh cong => Home page
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/home");
    }
    const dispatch = useDispatch();
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios({
                method: "POST",
                url: "http://localhost:8080/api/auth/login",
                data: {
                    email: user.username,
                    password: user.password
                },
            })
            if (response.data && response.data.token) {
                dispatch(setAccount(response.data));
                handleNavigate();
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', response.data.name);
                console.log("---data", response.data)
            }
            console.log(response)
        } catch (err) {
            console.log("---err", err)
            // alert("Wrong email or password. Please log in again!");
        }
    }


    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="singin-email-2">Username or email address *</label>
                    <input onChange={handleChangeUserName} type="text" className="form-control" id="singin-email-2" name="singin-email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="singin-password-2">Password *</label>
                    <input onChange={handleChangePassword} type="password" className="form-control" id="singin-password-2" name="singin-password" required />
                </div>

                <div className="form-footer">
                    <button onClick={(e) => { handleLogin(e) }} className="btn btn-outline-primary-2">
                        <span>LOG IN</span>
                        <i className="icon-long-arrow-right"></i>
                    </button>


                    <a href="#" className="forgot-link">Forgot Your Password?</a>
                </div>
            </form>
        </>
    );
}

export default LoginForm;