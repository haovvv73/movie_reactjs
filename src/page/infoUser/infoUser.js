import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import action
import { InfoUserAction } from '../../redux/Actions/nguoiDungAction/InfoUserAction';
// import libs
import { history } from '../../App';
import moment from 'moment';
import _ from 'lodash';

export default function InfoUser() {

    const dispatch = useDispatch();

    useEffect(() => {
        //lấy dữ liệu thông tin chi tiết người dùng 
        dispatch(InfoUserAction());
    }, [])

    //dữ liệu thông tin người dùng chi tiết
    const { dataInfoUser } = useSelector(state => state.InfoUserReducer);
    // boc phan tu ra
    const { hoTen, email, taiKhoan, matKhau, thongTinDatVe } = dataInfoUser;

    // trạng thái hiển thị thông tin người dùng HOẶC lịch sử đặt vé
    const [changeDisplay, setChangeDisplay] = useState(true);

    // trạng thái nút menu và menu
    
    const [btnMenu, setBtnMenu] = useState(false);

    // hiển thị thông tin
    const infoRender = () => {
        return <div className="infoUser__diplay ">
            <div className="infoUser__img text-center">
                <img src="https://i.pravatar.cc/150" alt="123" />
            </div>
            <div className="infoUser__tableContent ">
                <p className="text-danger">Thông tin</p>
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Tên</th>
                            <td>{hoTen}</td>
                        </tr>
                        <tr>
                            <th scope="row">email</th>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <th scope="row">Tài khoản</th>
                            <td>{taiKhoan}</td>
                        </tr>
                        <tr>
                            <th scope="row">Mật khẩu</th>
                            <td>{matKhau}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
    // hiển thị lịch sử đạt vé 
    const historyBooked = () => {
        return <div className="infoUser__diplay ">
            <div className="infoUser__tableContent ">
                <p className="text-white">...</p>
                <p className="text-danger mt-3">lịch sử đặt vé</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên phim</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Ngày đặt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {thongTinDatVe.slice(-5).map((ve, index) => {
                            return <tr key={index} className="flex-wrap">
                                <th scope="row"><i className="fa fa-ticket-alt"></i></th>
                                <td>{ve.tenPhim}</td>
                                <td>{_.size(ve.danhSachGhe)}</td>
                                <td>{moment(ve.ngayDat).format('YYYY-MM-DD hh:mm A')}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }

    // xuống 850px là cần réponsive
    return (
        <div className="infoUser text-dark mt-5">
            <div className="infoUser__content position-relative container">
                {/* content info */}
                {changeDisplay ? infoRender() : historyBooked()}
                {/* menu info */}
                <div className="infoUser__btnMenu">
                    <button onClick={() => {
                        setBtnMenu(prev => !prev)
                    }}>
                        <i className="fa fa-exchange-alt"></i>
                    </button>
                </div>

                <div className={`infoUser__menu ${btnMenu ? "infoUser__menuGoIn" : ""} d-flex justify-content-center align-items-center`}>
                    <ul>
                        <li className="infoUser__itemsMenu">
                            <button data-toggle="tooltip" data-placement="left" title="thông tin" onClick={
                                () => {
                                    setChangeDisplay(true);
                                }
                            }>
                                <i className="fa fa-user ml-1"></i>
                            </button>
                        </li>
                        <li className="infoUser__itemsMenu">
                            <button data-toggle="tooltip" data-placement="left" title="vé đã đặt" onClick={
                                () => {
                                    setChangeDisplay(false)
                                }
                            }>
                                <i className="fa fa-ticket-alt"></i>
                            </button>
                        </li>
                        <li className="infoUser__itemsMenu">
                            <button data-toggle="tooltip" data-placement="left" title="đăng xuất" onClick={
                                () => {
                                    localStorage.clear();
                                    history.replace('/login');
                                }
                            }>
                                <i className="fa fa-sign-out-alt mr-1"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
