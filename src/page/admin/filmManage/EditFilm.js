import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App'
import { CapNhapPhimAction, GetPhimCapNhapAction } from '../../../redux/Actions/adminAction/AdminAction';
import moment from 'moment';

export default function EditFilm(props) {
    const dispatch = useDispatch();

    let { id } = props.match.params;

    useEffect(() => {
        dispatch(GetPhimCapNhapAction(id))
    }, [])

    // data phim cập nhập
    const { phimCapNhap } = useSelector(state => state.AdminReducer);

    // ảnh inp của người dùng
    const [imgInp, setImgInp] = useState("")

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: phimCapNhap.maPhim,
            tenPhim: phimCapNhap.tenPhim,
            trailer: phimCapNhap.trailer,
            moTa: phimCapNhap.moTa,
            ngayKhoiChieu: moment(phimCapNhap.ngayKhoiChieu).format("DD/MM/YYYY"),
            dangChieu: phimCapNhap.dangChieu,
            sapChieu: phimCapNhap.sapChieu,
            hot: phimCapNhap.hot,
            danhGia: phimCapNhap.danhGia,
            maNhom: 'GP01',
            hinhAnh: null,
        },
        validationSchema: yup.object().shape({
            tenPhim: yup.string().required('không bỏ trống !').min(7, 'lớn hơn 7 ký tự'),
            trailer: yup.string().required('ko bỏ trống'),
            moTa: yup.string().required('ko bỏ trống').min(6, 'lớn hơn 6 ký tự'),
            ngayKhoiChieu: yup.string().required('ko bỏ trống').matches(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/, 'nhập theo dd/mm/yyyy'),
            danhGia: yup.string().required('không bỏ trống').matches(/^[0-9]+$/, 'hãy nhập số dương'),
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
                    if (values.hinhAnh !== null) {
                        formData.append('hinh', values.hinhAnh, values.hinhAnh.name)
                    }

                }
            }
            console.log('value',values);
            dispatch(CapNhapPhimAction(formData))
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
            <h2 className="text-primary mb-5">thêm phim mới</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label >tên phim</label>
                            <input type="text" className="form-control" name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
                            {formik.errors.tenPhim && formik.touched.tenPhim && <small className="text-danger"> {formik.errors.tenPhim} </small>}
                        </div>
                        <div className="form-group">
                            <label >trailer</label>
                            <input type="text" className="form-control" name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
                            {formik.errors.trailer && formik.touched.trailer && <small className="text-danger"> {formik.errors.trailer} </small>}
                        </div>
                        <div className="form-group">
                            <label >mô tả</label>
                            <input type="text" className="form-control" name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
                            {formik.errors.moTa && formik.touched.moTa && <small className="text-danger"> {formik.errors.moTa} </small>}
                        </div>
                        <div className="form-group">
                            <label >ngày khởi chiếu</label>
                            <input type="text" className="form-control" name="ngayKhoiChieu" onChange={formik.handleChange} value={formik.values.ngayKhoiChieu} />
                            {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && <small className="text-danger"> {formik.errors.ngayKhoiChieu} </small>}
                        </div>
                        <div className="form-group mt-4">
                            <label >số sao</label>
                            <div className="input-group">
                                <input type="number" className="form-control" name="danhGia" onChange={formik.handleChange} value={formik.values.danhGia} />
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fa fa-star"></i></span>
                                </div>
                            </div>
                            {formik.errors.danhGia && formik.touched.danhGia && <small className="text-danger"> {formik.errors.danhGia} </small>}
                        </div>
                    </div>

                    <div className="col">
                    <h2 className="text-center mb-5">tình trạng</h2>

                        <div className="form-group row">
                            <div className="input-group col">
                                <div className="input-group-prepend mr-3">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="dangChieu" onChange={formik.handleChange} checked={formik.values.dangChieu} value={formik.values.dangChieu} />
                                    </div>
                                </div>
                                <label htmlFor="dangChieu" >đang chiếu</label>
                            </div>
                            <div className="input-group col">
                                <div className="input-group-prepend mr-3">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="sapChieu" onChange={formik.handleChange} checked={formik.values.sapChieu} value={formik.values.sapChieu} />
                                    </div>
                                </div>
                                <label htmlFor="sapChieu">sắp chiếu</label>
                            </div>
                            <div className="input-group col">
                                <div className="input-group-prepend mr-3">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="hot" onChange={formik.handleChange} checked={formik.values.hot} value={formik.values.hot} />
                                    </div>
                                </div>
                                <label htmlFor="hot" >bom tấn</label>
                            </div>
                        </div>

                        <div className="form-group mt-5">
                            <label >hình ảnh</label>
                            <div >
                                <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg, image/jpg" />
                                <img src={imgInp ? imgInp : phimCapNhap.hinhAnh} style={{ width: "110px", height: "120px" }} alt="123" />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-danger" onClick={() => {
                    history.goBack();
                }}>quay lại</button>
                <button type="submit" className="btn btn-success ml-2 px-5">cập nhập</button>
            </form>
        </div>
    )
}
