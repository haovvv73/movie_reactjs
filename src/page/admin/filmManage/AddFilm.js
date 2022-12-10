import React, { useState } from 'react';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { ThemPhimVaoDanhSachAction } from '../../../redux/Actions/adminAction/AdminAction';

export default function AddFilm() {
    const dispatch = useDispatch();

    // ảnh inp của người dùng
    const [imgInp, setImgInp] = useState('')

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            maNhom: 'GP01',
            hinhAnh: '',
        },
        validationSchema: yup.object().shape({
            tenPhim: yup.string().required('không bỏ trống !').min(7, 'lớn hơn 7 ký tự'),
            trailer: yup.string().required('ko bỏ trống'),
            moTa: yup.string().required('ko bỏ trống').min(6, 'lớn hơn 6 ký tự'),
            ngayKhoiChieu: yup.string().required('ko bỏ trống').matches(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/, 'nhập theo dd/mm/yyyy'),
            danhGia: yup.string().required('không bỏ trống').matches(/^[0-9]+$/, 'hãy nhập số dương'),
            hinhAnh: yup.string().required('hãy thêm hình ảnh')
        }),
        onSubmit: values => {
            // gui value len api
            //value phải có đúng dữ liệu form data
            let formData = new FormData();
            // chuyen data => form data
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])
                } else {
                    formData.append('hinh', values.hinhAnh, values.hinhAnh.name)
                }
            }
            dispatch(ThemPhimVaoDanhSachAction(formData))
        },
    });

    const handleChangeFile = async (event) => {
        // bắt lấy ob hình ảnh 
        let hinh = event.target.files[0];
        if (hinh.type === "image/jpeg" || hinh.type === "image/png" || hinh.type === "image/jpg") {
            // set value cho formik
            await formik.setFieldValue('hinhAnh', hinh);
            // đọc hình của user
            let read = new FileReader();
            read.readAsDataURL(hinh);
            // load ra base 64
            read.onload = (e) => {
                setImgInp(e.target.result)
            }
        }

    }

    return (
        <div className="container text-dark">
            <h2 className="text-primary mb-4 text-center">thêm phim mới</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="form-group col">
                                <label >tên phim</label>
                                <input type="text" className="form-control" name="tenPhim" onChange={formik.handleChange} />
                                {formik.errors.tenPhim && formik.touched.tenPhim && <small className="text-danger"> {formik.errors.tenPhim} </small>}
                            </div>
                            <div className="form-group col">
                                <label >trailer</label>
                                <input type="text" className="form-control" name="trailer" onChange={formik.handleChange} />
                                {formik.errors.trailer && formik.touched.trailer && <small className="text-danger"> {formik.errors.trailer} </small>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col">
                                <label >ngày khởi chiếu</label>
                                <input type="text" className="form-control" format={"DD/MM/YYYY"} name="ngayKhoiChieu" onChange={formik.handleChange} />
                                {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && <small className="text-danger"> {formik.errors.ngayKhoiChieu} </small>}
                            </div>
                            <div className="form-group col ">
                                <label >số sao</label>
                                <div className="input-group">
                                    <input type="number" className="form-control" name="danhGia" onChange={formik.handleChange} />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fa fa-star"></i></span>
                                    </div>
                                </div>
                                {formik.errors.danhGia && formik.touched.danhGia && <small className="text-danger"> {formik.errors.danhGia} </small>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label >mô tả</label>
                            <input type="text" className="form-control" name="moTa" onChange={formik.handleChange} />
                            {formik.errors.moTa && formik.touched.moTa && <small className="text-danger"> {formik.errors.moTa} </small>}
                        </div>

                        <div className="form-group mt-4 row">
                            <div className="col">
                                <div className="input-group my-4">
                                    <label className="mr-3">đang chiếu</label>
                                    <input type="checkbox" name="dangChieu" onChange={formik.handleChange} />
                                </div>
                                <div className="input-group my-4">
                                    <label className="mr-3">sắp chiếu</label>
                                    <input type="checkbox" name="sapChieu" onChange={formik.handleChange} />
                                </div>
                                <div className="input-group my-4">
                                    <label className="mr-3">bom tấn</label>
                                    <input type="checkbox" name="hot" onChange={formik.handleChange} />
                                </div>
                            </div>

                            <div className="form-group col">
                                <label >hình ảnh</label>
                                <div >
                                    <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg, image/jpg" />

                                    <div style={{ backgroundColor: "gray", width: "130px", height: "150px" }} className="mt-2">
                                        <img src={imgInp} style={{ width: "130px", height: "150px" }} alt="123" />
                                    </div>
                                </div>
                                {formik.errors.hinhAnh && formik.touched.hinhAnh && <small className="text-danger"> {formik.errors.hinhAnh} </small>}
                            </div>

                        </div>
                    </div>
                </div>
                <NavLink to="/filmManage"> <button type="button" className="btn btn-danger">thoát</button></NavLink>
                <button type="submit" className="btn btn-primary ml-2 px-5">thêm vào</button>
            </form>
        </div>
    )
}
