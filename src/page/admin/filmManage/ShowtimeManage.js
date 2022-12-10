import React, { useEffect, useState } from 'react'
import { adminService } from '../../../services/AdminService';
import { useFormik } from 'formik';
import moment from 'moment';
import * as yup from "yup";
import {history} from '../../../App';

export default function ShowtimeManage(props) {

    let { id } = props.match.params;

    const formik = useFormik({
        initialValues: {
            maPhim: id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: '',
        },
        validationSchema: yup.object().shape({
            ngayChieuGioChieu: yup.string().required('không bỏ trống'),
            giaVe: yup.string().required('không bỏ trống').matches(/^[0-9]+$/, '150000 đ - 200000 đ'),
        }),
        onSubmit: values => {
            const postTaoLichChieu = async (data) => {
                try {
                    await adminService.taoLichChieu(data)
                    alert("ok tạo thành công")
                } catch (error) {
                    alert("tạo thất bại")
                }
            }
            postTaoLichChieu(values);
        },
    });

    // data he thong rap
    const [state, setState] = useState({
        heThongRap: [],
        cumRap: [],
    })
    const { heThongRap, cumRap } = state;

    // goi api lay data he thong rap
    useEffect(() => {
        const goiDataHeThongRap = async () => {
            try {
                const result = await adminService.heThongRap();
                setState({
                    ...state,
                    heThongRap: result.data.content,
                })

            } catch (error) {
            }
        }
        goiDataHeThongRap();
    }, [])

    // goi api lay data cum rap
    const handleHeThongRap = (e) => {
        const goiDataCumRap = async (maHeThongRap) => {
            try {
                const result = await adminService.cumRap(maHeThongRap);

                setState({
                    ...state,
                    cumRap: result.data.content,
                })
            } catch (error) {
            }
        }
        let maHeThongRap = e.target.value;
        goiDataCumRap(maHeThongRap)
    }

    const heThongRapRender = () => {
        return heThongRap.map((heThong, index) => {
            return <option value={heThong.maHeThongRap} key={index} > {heThong.tenHeThongRap} </option>
        })
    }

    const cumRapRender = () => {
        return cumRap.map((cumRap, index) => {
            return <option value={cumRap.maCumRap} key={index} > {cumRap.tenCumRap} </option>
        })
    }

    const handleNgayChieu = (e) => {
        let ngayChieu = moment(e.target.value).format("DD/MM/YYYY hh:mm:ss");
        formik.setFieldValue('ngayChieuGioChieu', ngayChieu)
    }

    return (
        <div className="text-dark">
            <h2 className="text-center">Thêm lịch chiếu</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="form-group mb-3">
                            <label htmlFor="inpHeThongRap">Hệ Thống Rạp</label>
                            <select className="custom-select" id="inpHeThongRap" onClick={handleHeThongRap} >
                                <option> chose </option>
                                {heThongRapRender()}
                            </select>
                        </div>

                        <div className="form-group mb-3 ">
                            <label htmlFor="inpRap">cụm Rạp</label>
                            <select className="custom-select" id="inpRap" name="maRap" onChange={formik.handleChange}>
                                <option> chose </option>
                                {cumRapRender()}
                            </select>
                        </div>

                        <div className="row">
                            <div className="form-group col">
                                <label >Ngày chiếu và Giờ chiếu</label>
                                <input type="datetime-local" className="form-control" onChange={handleNgayChieu} />
                                {formik.errors.ngayChieuGioChieu && <small className="text-danger">{formik.errors.ngayChieuGioChieu}</small>}
                            </div>

                            <div className="form-group col">
                                <label >Giá Vé</label>
                                <input type="text" className="form-control" name="giaVe" onChange={formik.handleChange} />
                                {formik.errors.giaVe && <small className="text-danger">{formik.errors.giaVe}</small>}
                            </div>
                        </div>
                        <div className="row">
                            <button type="button" className="btn btn-danger col-2 mr-1" onClick={()=>{
                                history.goBack();
                            }} > quay lai </button>
                            <button type="submit" className="btn btn-primary col-9">thêm lịch chiếu</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}
