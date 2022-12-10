import React from 'react';
import { useDispatch } from 'react-redux';
//import libs
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import action
import { userService } from "../../services/UserService";
import { history } from "../../App";
import { Link } from 'react-router-dom';

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
            taiKhoan: yup.string().required('Không được bỏ trống').min(6, 'Tài khoản phải chứa 6 ký tự'),
            matKhau: yup.string().required('Không được bỏ trống').min(6, 'Tài khoản phải chứa 6 ký tự'),
            email: yup.string().email('Không đúng định dạng').required('Không được bỏ trống'),
            soDt: yup.string().required('Không được bỏ trống').matches(/^[0-9]+$/, 'Sai định dạng'),
            hoTen: yup.string().required('Không được bỏ trống').min(6, 'Tài khoản phải chứa 6 ký tự'),
        }),
        onSubmit: values => {
            // gửi dữ liệu lên database
            const RegisterAction = async (data) => {
                const goLogin = () => {
                    history.push("/login");
                }
                try {
                    const result = await userService.dangKy(data);
                    if (result.data.statusCode === 200) {
                        toast.success('Đăng ký thành công', {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: 0,
                        });
                        setTimeout(goLogin, 1400)
                    }

                } catch (error) {
                    if (error && error.response) {
                        toast.error(error.response.data.content, {
                            position: "top-center",
                            autoClose: 1500,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: 0,
                        });
                    }
                }
            }

            dispatch(RegisterAction(values));
        }
    })

    return (
        <div className="register d-flex justify-content-center align-items-center">
            {/* form đăng ký */}
            <div className="register__form mt-5">
                <h3> <span className="text-danger">CGV</span> Chào Thành Viên Mới</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " name="taiKhoan" onChange={formik.handleChange} />
                        <label >Tài khoản</label>
                        {formik.errors.taiKhoan && formik.touched.taiKhoan && <small className="text-danger validationRegister"> <i className="fa fa-exclamation-circle "></i> {formik.errors.taiKhoan}</small>}
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder=" " name="matKhau" onChange={formik.handleChange} />
                        <label >Password</label>
                        {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger validationRegister"> <i className="fa fa-exclamation-circle "></i> {formik.errors.matKhau}</small>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " name="hoTen" onChange={formik.handleChange} />
                        <label>Full Name</label>
                        {formik.errors.hoTen && formik.touched.hoTen && <small className="text-danger validationRegister"> <i className="fa fa-exclamation-circle "></i> {formik.errors.hoTen}</small>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " name="email" onChange={formik.handleChange} />
                        <label>Email</label>
                        {formik.errors.email && formik.touched.email && <small className="text-danger validationRegister"> <i className="fa fa-exclamation-circle "></i> {formik.errors.email}</small>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " name="soDt" onChange={formik.handleChange} />
                        <label>Phone number</label>
                        {formik.errors.soDt && formik.touched.soDt && <small className="text-danger validationRegister"> <i className="fa fa-exclamation-circle "></i> {formik.errors.soDt}</small>}
                    </div>
                    <button type="submit" className="container mt-4">Đăng Ký</button>
                    <small className="text-dark"> Bạn đã có tài khoản ?
                        <Link to="/login" className="text-danger ml-1">ĐĂNG NHẬP</Link>
                    </small>
                </form>
            </div>
            <div>
                <ToastContainer limit={2} />
            </div>
        </div>
    )
}
