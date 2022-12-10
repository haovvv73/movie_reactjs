import React, { Fragment } from 'react';
import { history } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_SUCESS } from '../../redux/type/case/sucess/sucessType';

export default function Bookingsucess() {
    const dispatch = useDispatch();
    // trạng thái sucess
    const { isSucess } = useSelector(state => state.sucessReducer)

    return (
        <Fragment>
            {isSucess ? <div className="bookingSucess d-flex justify-content-center align-items-center position-fixed">
                <div className="bookingSucess__items text-center p-4">
                    <div className="mt-3">
                        <h2 className="span"> đặt vé thành công </h2>
                        <p className="span"> vé đã được gửi về mail của bạn </p>
                        <button onClick={() => {
                            dispatch({
                                type:HIDE_SUCESS,
                            })
                            history.replace("/")
                        }} className="btn btn-success">xác nhận</button>
                    </div>
                </div>
            </div> : '' }
        </Fragment>
    )
}
