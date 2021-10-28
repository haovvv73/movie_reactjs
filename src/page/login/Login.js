import React from 'react';
import { useDispatch } from 'react-redux';
//import picture
import imgCharacter from '../../assets/img/character.png';
//import libs
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import action
import { userService } from '../../services/UserService';
import { DANG_NHAP } from '../../redux/type/case/nguoiDung/UserType';
import { history } from '../../App';
import { Link } from 'react-router-dom';

export default function Login(props) {

    const dispatch = useDispatch();

    // get dữ liệu uesFormik và validation yup
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: yup.object().shape({
            taiKhoan: yup.string().required('Không được bỏ trống').min(6, 'Tài khoản phải có 6 ký tự'),
            matKhau: yup.string().required('Không được bỏ trống').min(6, 'Tài khoản phải có 6 ký tự'),
        }),
        onSubmit: values => {
            // gửi dữ liệu lên database
            const LoginAction = (data) => {
                const goHome = () => {
                    history.push("/")
                }
                return async (dispatch) => {
                    try {
                        const result = await userService.dangNhap(data);
                        if (result.data.statusCode === 200) {
                            toast.success('Đăng nhập thành công', {
                                position: "top-center",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: true,
                                progress: 0,
                            });
                            dispatch({
                                type: DANG_NHAP,
                                loginData: result.data.content,
                            });
                            setTimeout(goHome, 1400)
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

            }
            dispatch(LoginAction(values));
        },
    });

    return (
        <div className="container login mt-5">
            <div className="row">
                {/* form đăng nhập */}
                <div className="login__form col-12 col-lg-6">
                    <form onSubmit={formik.handleSubmit}>
                        <h2 className="mb-4">XIN CHÀO</h2>
                        <div className="form-group">
                            <input name="taiKhoan" onChange={formik.handleChange} type="text" className="form-control" placeholder=" " />
                            <label>Tài Khoản</label>
                            {formik.errors.taiKhoan && formik.touched.taiKhoan && <small className="text-danger validationLogin" >
                                <i className="fa fa-exclamation-circle "></i>
                                {formik.errors.taiKhoan}
                            </small>}
                        </div>
                        <div className="form-group">
                            <input name="matKhau" onChange={formik.handleChange} type="password" className="form-control" placeholder=" " />
                            <label> Mật Khẩu</label>
                            {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger validationLogin">
                                <i className="fa fa-exclamation-circle "></i>
                                {formik.errors.matKhau}
                            </small>}
                        </div>
                        <button type="submit" className="container mt-3">Đăng Nhập</button>
                        <small className="text-dark"> Bạn không phải là thành viên ? 
                            <Link to="/register" className="text-danger ml-1">ĐĂNG KÝ NGAY</Link>
                        </small>
                    </form>
                </div>
                <div className="loginImg col-12 col-lg-6 text-center">
                    <img className="img-fluid" src={imgCharacter} alt="123" />
                </div>
            </div>
            <div>
                <ToastContainer limit={2} />
            </div>
        </div>
    )
}
