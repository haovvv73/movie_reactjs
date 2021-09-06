import React from 'react';
import { useDispatch} from 'react-redux';
//import picture
import imgCharacter from '../../assets/img/character.png';
//import libs
import { useFormik } from 'formik';
import * as yup from 'yup';
//import action
import { LoginAction } from '../../redux/Actions/nguoiDungAction/LoginAction';

export default function Login(props) {

    const dispatch = useDispatch();

    // get dữ liệu uesFormik và validation yup
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: yup.object().shape({
            taiKhoan: yup.string().required('không được bỏ trống').min(6, 'tài khoản phải có 6 ký tự'),
            matKhau: yup.string().required('không được bỏ trống').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/, 'mật khẩu phải có 6 ký tự - viết hoa - số - ký tự đặc biệt'),
        }),
        onSubmit: values => {
            // gửi dữ liệu lên database
            dispatch(LoginAction(values));
        },
    });

    return (
            <div className="container login mt-5">
                <div className="row">
                    <div className="login__form col-12 col-lg-6">
                        {/* form đăng nhập */}
                        <form onSubmit={formik.handleSubmit}>
                            <h2 className="mb-4">XIN CHÀO</h2>
                            <div className="position-relative form-group mt-2">
                                <input name="taiKhoan" onChange={formik.handleChange} type="text" className="form-control" placeholder=" " />
                                <label >Tài Khoản</label>
                                {formik.errors.taiKhoan && formik.touched.taiKhoan && <small className="text-danger validationLogin" > <i className="fa fa-exclamation-circle "></i> {formik.errors.taiKhoan}</small>}
                            </div>
                            <div className="position-relative form-group mt-5">
                                <input name="matKhau" onChange={formik.handleChange} type="password" className="form-control" placeholder=" " />
                                <label> Mật Khẩu</label>
                                {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger validationLogin"> <i className="fa fa-exclamation-circle "></i> {formik.errors.matKhau}</small>}
                            </div>
                            <button type="submit" className="container mt-3">Đăng Nhập</button>
                        </form>
                    </div>
                    <div className="loginImg col-12 col-lg-6 text-center">
                        <img className="img-fluid" src={imgCharacter} alt="123" />
                    </div>
                </div>
            </div>
    )
}
