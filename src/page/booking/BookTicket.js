
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookTicketAction, DatVeAction } from '../../redux/Actions/datVeAction/BookTicketAction';
import _ from 'lodash';
// import model
import { TicKetModel } from '../../_core/models/DataTicketModel';
// import types
import { DAT_VE, DAT_VE_HOAN_TAT } from '../../redux/type/case/datVe/BookingType';


export default function BookTiket(props) {
    const dispatch = useDispatch()

    const [size, setSize] = useState(window.innerWidth)

    // mã rạp chiếu
    let { id } = props.match.params;

    // dữ liệu vé xem phim // dữ liệu ghế đang đặt , thuong , vip
    const { dataTicket, danhSachGheDangDat, danhSachGheDangDatThuong, danhSachGheDangDatVip } = useSelector(state => state.BookTicketReducer);
    const { danhSachGhe, thongTinPhim } = dataTicket;

    //dữ liệu người dùng đăng nhập
    const { loginUser } = useSelector(state => state.LoginReducer);
    // data user
    let nguoiDung = loginUser;

    // gọi api
    useEffect(() => {
        // gọi api vé xem phim
        dispatch(BookTicketAction(id));
        // clear vé đang đặt
        dispatch({
            type: DAT_VE_HOAN_TAT,
        })
    }, [])
    // responsive bill
    useEffect(() => {
        let handSize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', handSize);
        return () => [
            window.removeEventListener('resize', handSize)
        ]
    }, [])

    // infomation film 
    const infoRender = () => {
        return <div className="booking__info" style={{ backgroundImage: `url(${thongTinPhim.hinhAnh})` }}>
            <div className="row mx-0 align-items-center booking__infohead">
                {size > 1100 ? <div className="booking__img col-4 text-center">
                    <img src={thongTinPhim.hinhAnh} alt="123" />
                </div> : null}
                <div className="col-12 col-lg-7 ">
                    <h1>{thongTinPhim.tenPhim}</h1>
                    <p className="text-white">
                        <i className="fa fa-map-marker-alt mr-3 text-white"></i>
                        {thongTinPhim.tenCumRap}
                    </p>
                </div>
            </div>
            <div className="row mx-0 booking__infofoot  ">
                <div className="row col-lg-8 col-12 mr-2 justify-content-around">
                    <div>
                        <p className="text-muted">tên rạp</p>
                        <p>{thongTinPhim.tenRap}</p>
                    </div>
                    <div>
                        <p className="text-muted">ngày chiếu</p>
                        <p>{thongTinPhim.ngayChieu}</p>
                    </div>
                    <div>
                        <p className="text-muted">giờ chiếu</p>
                        <p>{thongTinPhim.gioChieu}</p>
                    </div>
                </div>
            </div>
        </div>
    }
    // type chair
    const noteRender = () => {
        return <div className="booking__note mb-5" >
            <div className="mx-5 booking__infoTxt">
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-6 text-center">
                        <button className="chair__nomarl booking__infobtn p-2" disabled></button>
                        <p className="text-secondary mt-2">Ghế Thường</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <button className="chair__vip booking__infobtn p-2" disabled></button>
                        <p className="text-secondary mt-2">Ghế Vip</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <button className="chair__booked booking__infobtn p-2" disabled></button>
                        <p className="text-secondary mt-2">Ghế Đã đặt</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <button className="chair__user booking__infobtn p-2" disabled></button>
                        <p className="text-secondary mt-2">Ghế Bạn đặt</p>
                    </div>
                </div>
            </div>
        </div>
    }
    // chair render
    const seatRender = () => {
        return <div className="booking__seat pt-2 pb-5">
            <div className="booking__screen container">
                <p className="text-center mt-4 text-muted">screen</p>
            </div>
            <div className="booking__chair container">
                {danhSachGhe.map((ghe, index) => {
                    // class ghe vip
                    let classVip = ghe.loaiGhe === 'Vip' ? "chair__vip" : "";
                    // class ghe dc dat
                    let classBooked = ghe.daDat === true ? "chair__booked" : "";
                    // class ghe chon
                    let classSelect = "";
                    // class ghe user
                    let classUser = "";
                    // kiểm tra ghế của user
                    if (nguoiDung.taiKhoan === ghe.taiKhoanNguoiDat) {
                        classUser = "chair__user";
                    }
                    // kiểm tra ghế có trong mảng ghế đang dặt ?
                    let indexGhe = danhSachGheDangDat.findIndex(gheDat => gheDat.maGhe === ghe.maGhe);
                    if (indexGhe !== -1) {
                        classSelect = "chair__select";
                    }
                    return <button key={index} disabled={ghe.daDat}
                    className={
                        `chair__nomarl
                        ${classVip}
                        ${classBooked}
                        ${classSelect} 
                        ${classUser}`
                    }
                    onClick={() => {
                        dispatch({
                            type: DAT_VE,
                            gheDat: ghe,
                        })
                    }} > </button>
                })}
            </div>
        </div>
    }
    // bill render
    const billRender = () => {
        return <div className="booking__items col-3 container" >
            <div className="booking__price mt-4">
                <p className="text-muted row"> Ghế của bạn: {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDat, index) => <span className="mx-2 text-white" key={index} >{gheDat.tenGhe}</span>)} </p>
                <div className="row booking__priceItems">
                    <p>Thường</p>
                    <p>{_.size(danhSachGheDangDatThuong)}</p>
                    <p>{danhSachGheDangDatThuong.reduce((tongTien, ghe, index) => {
                        return tongTien += ghe.giaVe;
                    }, 0).toLocaleString()}</p>
                </div>
                <div className="row booking__priceItems">
                    <p>Đặc biệt</p>
                    <p>{_.size(danhSachGheDangDatVip)}</p>
                    <p>{danhSachGheDangDatVip.reduce((tongTien, ghe, index) => {
                        return tongTien += ghe.giaVe;
                    }, 0).toLocaleString()}</p>
                </div>
                <hr style={{ borderTop: '1px solid grey' }} />
                <div className="row booking__priceItems">
                    <p className="mr-4 text-danger"> Total </p>
                    <p>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                        return tongTien += ghe.giaVe;
                    }, 0).toLocaleString()}</p>
                </div>
            </div>
            <button className="booking__btnpay container mt-4" onClick={() => {
                const action = new TicKetModel();
                action.maLichChieu = id;
                action.danhSachVe = danhSachGheDangDat;
                // kiểm tra user có đặt ghế chưa
                const dk = _.size(danhSachGheDangDat)
                if (dk > 0) {
                    // yes => post
                    dispatch(DatVeAction(action));
                } else {
                    // no => yêu cầu đặt ghế
                    alert("vui lòng chọn ghế")
                }
            }}> thanh toán </button>
        </div>
    }
    // bill render responsive
    const billStickRender = () => {
        return <nav className="row fixed-bottom bg-dark justify-content-around align-items-center " style={{ zIndex: '10' }}>
            <button className="booking__btnpay ml-3" onClick={() => {
                const action = new TicKetModel();
                action.maLichChieu = id;
                action.danhSachVe = danhSachGheDangDat;
                // kiểm tra user có đặt ghế chưa
                const dk = _.size(danhSachGheDangDat)
                if (dk > 0) {
                    // yes => post
                    dispatch(DatVeAction(action));
                } else {
                    // no => yêu cầu đặt ghế
                    alert("vui lòng chọn ghế")
                }
            }}> thanh toán </button>
            <div className="col-6">
                <div className="pt-1">
                    <div>
                        <span className="mr-5">Thường</span>
                        <span >{_.size(danhSachGheDangDatThuong)}</span>
                    </div>
                    <div>
                        <span className="mr-5">Đặc biệt</span>
                        <span>{_.size(danhSachGheDangDatVip)}</span>
                    </div>
                </div>
                <hr style={{ borderTop: '1px solid grey' }} />
                <div className="row mx-0">
                    <p className="mr-4 text-danger"> Total </p>
                    <p>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                        return tongTien += ghe.giaVe;
                    }, 0).toLocaleString()}</p>
                </div>
            </div>
        </nav>
    }

    return (
        <div style={{ backgroundColor: '#18181B', height: '100vh' }}>
            <div className="booking pb-5">
                {infoRender()}
                <div className="row mx-0 mt-5 align-items-center">
                    <div className="booking__items col-12 col-lg-9 mb-5">
                        {noteRender()}
                        {seatRender()}
                    </div>
                    {size > 990 ? billRender() : billStickRender()}
                </div>
            </div>
        </div>
    )
}
