import React from 'react';
import { useDispatch } from 'react-redux';
//import libs
import { useFormik } from "formik";
import * as yup from "yup";
//import action
import { RegisterAction } from '../../redux/Actions/nguoiDungAction/RegisterAction';

export default function Register() {

    const dispatch = useDispatch();

    // get dữ liệu với useFormik và validation với yup
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            hoTen: '',
            maNhom: 'GP01',
        },
        validationSchema: yup.object().shape({
            taiKhoan: yup.string().required('không được bỏ trống').min(6,'tài khoản phải chứa 6 ký tự'),
            matKhau: yup.string().required('không được bỏ trống').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,'mật khẩu phải có 6 ký tự - viết hoa - số - ký tự đặc biệt'),
            email: yup.string().email('không đúng định dạng').required('không được bỏ trống'),
            soDt: yup.string().required('không được bỏ trống').matches(/^[0-9]+$/,'sai định dạng'),
            hoTen: yup.string().required('không được bỏ trống').min(6,'tài khoản phải chứa 6 ký tự'),
        }),
        onSubmit: values => {
            // gửi dữ liệu lên database
            dispatch(RegisterAction(values));
        }
    })

    return (
        <div className="register d-flex justify-content-center align-items-center">
            <div className="register__form mt-5">
                <h3> <span className="text-danger">CGV</span> Chào Thành Viên Mới</h3>
                {/* form đăng ký */}
                <form onSubmit={formik.handleSubmit}>
                    {/* tai khoan khong duoc trung */}
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " name="taiKhoan" onChange={formik.handleChange}  />
                        <label >Tài khoản</label>
                        {formik.errors.taiKhoan && formik.touched.taiKhoan && <small className="text-danger validationRegister"> <i className="fa fa-exclamation-circle "></i> {formik.errors.taiKhoan}</small>}
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder=" " name="matKhau" onChange={formik.handleChange}  />
                        <label >Password</label>
                        {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger validationRegister"> <i className="fa fa-exclamation-circle "></i> {formik.errors.matKhau}</small>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " name="hoTen" onChange={formik.handleChange}  />
                        <label>Full Name</label>
                        {formik.errors.hoTen && formik.touched.hoTen && <small className="text-danger validationRegister"> <i className="fa fa-exclamation-circle "></i> {formik.errors.hoTen}</small>}
                    </div>
                    {/* email khong duoc trung */}
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " name="email" onChange={formik.handleChange}  />
                        <label>Email</label>
                        {formik.errors.email && formik.touched.email && <small className="text-danger validationRegister"> <i className="fa fa-exclamation-circle "></i> {formik.errors.email}</small>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " name="soDt" onChange={formik.handleChange}  />
                        <label>Phone number</label>
                        {formik.errors.soDt && formik.touched.soDt && <small className="text-danger validationRegister"> <i className="fa fa-exclamation-circle "></i> {formik.errors.soDt}</small>}
                    </div>
                    <button type="submit" className="container mt-4">Đăng Ký</button>
                </form>
            </div>
        </div>
    )
}
