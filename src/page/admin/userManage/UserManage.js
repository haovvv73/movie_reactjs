import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagnigation from '../../../component/pagnigation/Pagnigation';
import { ListUserPhanTrangAction } from '../../../redux/Actions/adminAction/AdminAction';
import queryString from 'query-string';
import { NavLink } from 'react-router-dom';

export default function UserManage() {
    const dispatch = useDispatch();

    // param phân trang dèfault
    const [param, setParam] = useState({
        soTrang: 1,
        soPhanTuTrenTrang: 10
    })

    useEffect(() => {
        // param danh sách người dùng
        const danhSachNguoiDung = queryString.stringify(param)
        // gọi api
        dispatch(ListUserPhanTrangAction(danhSachNguoiDung))
        window.scrollTo(0, 0)
    }, [param])

    //data danh sách người dùng
    const { listUserPhanTrang } = useSelector(state => state.AdminReducer);
    const { currentPage, totalPages, items } = listUserPhanTrang;

    // props => pagnigation component
    const pagnigation = {
        currentPage: currentPage,
        totalPages: totalPages,
    }
    // hàm chuyển trang vs param mới
    const onPageChange = (newPage) => {
        console.log("trang moi", newPage);
        setParam({
            ...param,
            soTrang: newPage
        })
    }


    const contentRender = () => {
        return items?.map((user, index) => {
            return <tr key={index}>
                <td>{user.taiKhoan}</td>
                <td>{user.matKhau}</td>
                <td>{user.hoTen}</td>
                <td>{user.email}</td>
                <td>{user.soDt}</td>
                <td>{user.maLoaiNguoiDung}</td>
                <td>
                    <button className="btn btn-outline-info mr-1">
                        <i className="fa fa-pen"></i>
                    </button>
                    <button className="btn btn-outline-danger">
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        })
    }


    return (
        <div>
            {/* btn thêm người dùng */}
            <div>
                <div className="mb-4">
                    <NavLink to="/userManage/addUser">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#userManage">
                            thêm người dùng
                        </button>
                    </NavLink>
                </div>
            </div>
            {/* table */}
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">tài khoản</th>
                        <th scope="col">mật khẩu</th>
                        <th scope="col">họ tên</th>
                        <th scope="col">email</th>
                        <th scope="col">số DT</th>
                        <th scope="col">loại</th>
                        <th scope="col">hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {contentRender()}
                </tbody>
            </table>

            <Pagnigation
                pagnigation={pagnigation}
                onPageChange={onPageChange}
            />
        </div>
    )
}
