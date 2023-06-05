import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectRegisterNoti } from '../features/counter/accountSlice';
import queryString from 'query-string';

DetailPayment.propTypes = {

};

function DetailPayment(props) {
    const notiP = useSelector(selectRegisterNoti);
    const dispatch = useDispatch();
    const location = useLocation();
    const query = queryString.parse(location.search);
    console.log("vnp_Amount:", query.vnp_Amount,
        "vnp_BankCode:", query.vnp_BankCode,
        "vnp_BankTranNo:", query.vnp_BankTranNo,
        "vnp_CardType:", query.vnp_CardType,
        "vnp_OrderInfo:", query.vnp_OrderInfo,
        "vnp_PayDate:", query.vnp_PayDate,
        "vnp_ResponseCode:", query.vnp_ResponseCode,
        "vnp_TmnCode:", query.vnp_TmnCode,
        "vnp_TransactionNo:", query.vnp_TransactionNo,
        "vnp_TransactionStatus:", query.vnp_TransactionStatus,
        "vnp_TxnRef:", query.vnp_TxnRef,
        "vnp_SecureHash:", query.vnp_SecureHash)
    const navigate = useNavigate();
    const next = () => {
        navigate("/paymentInfo", { replace: true });
    }
    const paymentAPI = async (e) => {
        console.log("api day ne")
        const response = await axios({
            method: 'PUT',
            url: `http://localhost:8080/payment${location.search}`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            params: {
                vnp_Amount: parseInt(query.vnp_Amount),
                vnp_BankCode: query.vnp_BankCode,
                vnp_BankTranNo: query.vnp_BankTranNo,
                vnp_CardType: query.vnp_CardType,
                vnp_OrderInfo: query.vnp_OrderInfo,
                vnp_PayDate: query.vnp_PayDate,
                vnp_ResponseCode: query.vnp_ResponseCode,
                vnp_TmnCode: query.vnp_TmnCode,
                vnp_TransactionNo: query.vnp_TransactionNo,
                vnp_TransactionStatus: query.vnp_TransactionStatus,
                vnp_TxnRef: query.vnp_TxnRef,
                vnp_SecureHash: query.vnp_SecureHash,
            }
        })
        // e.preventDefault();

        console.log("----resPayment", response);
        localStorage.setItem('status', response.data.status);
        localStorage.setItem('note', response.data.note);
        localStorage.setItem('reload', "false");
        next();
    }
    // console.log("---notiS: ", notiP);
    useEffect(() => {
        paymentAPI();
    }, [])
    return (
        <div>
        </div>
    );
}

export default DetailPayment;