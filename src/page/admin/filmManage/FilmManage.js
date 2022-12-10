import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagnigation from '../../../component/pagnigation/Pagnigation'
import { ListFilmPhanTrangAction, XoaPhimAction } from '../../../redux/Actions/adminAction/AdminAction'
import queryString from 'query-string'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

export default function FilmManage() {
    const dispatch = useDispatch();

    // param phan trang default
    const [param, setParam] = useState({
        soTrang: 1,
        soPhanTuTrenTrang: 5,
    })

    useEffect(() => {
        // param danh sach phim
        const danhSachPhim = queryString.stringify(param)
        //goi api
        dispatch(ListFilmPhanTrangAction(danhSachPhim))
        window.scrollTo(0, 0);
    }, [param]);

    // data danh sach phim phan trang
    const { listFilmPhanTrang } = useSelector(state => state.AdminReducer);
    const { currentPage, totalPages, items } = listFilmPhanTrang;

    // props => pagnigation component
    const pagnigation = {
        totalPages: totalPages,
        currentPage: currentPage,
    }
    // func đặt lại param vs phân trang mới
    const onPageChange = (newPage) => {
        setParam({
            ...param,
            soTrang: newPage,
        })
    }

    const contentRender = () => {
        return items.map((film, index) => {
            return <tr key={index}>
                <td>{film.maPhim}</td>
                <td> <img src={film.hinhAnh} alt="123" className="img-fluid" style={{ width: "100px", height: "100px" }} /> </td>
                <td>{film.tenPhim}</td>
                <td>{moment(film.ngayKhoiChieu).format('DD/MM/YYYY')}</td>
                <td>{film.moTa.length > 60 ? film.moTa.substr(0, 50) + "..." : film.moTa}</td>
                <td>
                    {/* edit film ở đây */}
                    <NavLink to={`/filmManage/editFilm/${film.maPhim}`}>
                        <button className="btn btn-outline-info ">
                            <i className="fa fa-pen"></i>
                        </button>
                    </NavLink>
                </td>
                <td className="text-center">
                    {/* them lich chieu */}
                    <NavLink to={`/showTimeManage/${film.maPhim}`}>
                        <button className="btn btn-outline-info">
                            <i className="fa fa-calendar-plus"></i>
                        </button>
                    </NavLink>
                </td>
                <td>
                    {/* xóa phim ở đây */}
                    <button className="btn btn-outline-danger" onClick={() => {
                        if (window.confirm("có muốn xóa phim không", film.tenPhim)) {
                            // chức năng xóa phim => có => xóa
                            dispatch(XoaPhimAction(film.maPhim))
                        } else {
                            //ko => do nothing
                        }
                    }} >
                        <i className="fa fa-trash"></i>
                    </button>
                </td>     
            </tr>
        })
    }

    return (
        <div>
            {/* btn chức năng thêm phim */}
            <div>
                <div className="mb-4">
                    <NavLink to="/filmManage/addFilm">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#userManage">
                            thêm phim
                        </button>
                    </NavLink>
                </div>
            </div>
            {/* table */}
            <table className="table">
                <thead className="thead-light bg-light">
                    <tr>
                        <th scope="col">Mã</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Tên phim</th>
                        <th scope="col">khởi chiếu</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">sửa</th>
                        <th scope="col">thêm suất</th>
                        <th scope="col">xóa</th>
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
