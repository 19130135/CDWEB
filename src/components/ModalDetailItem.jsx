import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { selectOrderModal } from '../features/counter/orderSlice';

ModalDetailItem.propTypes = {

};

function ModalDetailItem({ showModal, setShowModal }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const listOrderModal = useSelector(selectOrderModal);
    console.log(listOrderModal)
    return (
        <Modal
            isOpen={showModal}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h3>CHI TIẾT ĐƠN HÀNG </h3>
            <tr>
                <th style={{ width: '15%' }}>Tên sản phẩm</th>
                <th style={{ width: '15%' }}>Số lượng</th>
                <th style={{ width: '15%' }}>Đơn giá</th>
            </tr>
            {listOrderModal?.billDetail?.map((billDetail, index) => {
                return (
                    <tr key={index}>
                        <td style={{ width: '25%' }}>{billDetail?.productName}</td>
                        <td style={{ width: '25%' }}>{billDetail?.quantity}</td>
                        <td style={{ width: '25%' }}>{billDetail?.unit_price}</td>
                    </tr>
                )
            })}
        </Modal>
    );
}

export default ModalDetailItem;