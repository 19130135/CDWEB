import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectRegisterNoti, setRegisterNoti } from '../features/counter/accountSlice';
import axios from 'axios';

RegisterResult.propTypes = {

};

function RegisterResult(props) {

    const notiS = useSelector(selectRegisterNoti);
    const dispatch = useDispatch();
    const { token } = useParams();
    const navigate = useNavigate();
    const next = () => {
        navigate("/regInfo", { replace: true });
    }
    console.log("---token:", token);
    const notiAPI = async (e) => {
        const response = await axios({
            method: 'GET',
            url: `http://localhost:8080/api/auth/verify/${token}`,
        })
        console.log("----res", response);
        localStorage.setItem('status', response.data.status);
        localStorage.setItem('note', response.data.note);
        localStorage.setItem('reload', "false");
        next();
    }
    console.log("---notiS: ", notiS);
    useEffect(() => {
        notiAPI();
    }, [])
    return (
        <div></div>
    );
}

export default RegisterResult;