
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookTicketAction, DatVeAction } from '../../redux/Actions/datVeAction/BookTicketAction';
import _ from 'lodash';
import { TicKetModel } from '../../_core/models/DataTicketModel';

import { DAT_VE } from '../../redux/type/case/datVe/BookingType';
import { USER_LOGIN } from '../../util/setting';

export default function BookTiket(props) {
    const dispatch = useDispatch()
    
    const [size,setSize] = useState(window.innerWidth)

    // mã rạp chiếu
    let { id } = props.match.params;
    // dữ liệu vé xem phim // dữ liệu ghế đang đặt , thuong , vip
    const { dataTicket, danhSachGheDangDat, danhSachGheDangDatThuong, danhSachGheDangDatVip } = useSelector(state => state.BookTicketReducer);
    const { danhSachGhe, thongTinPhim } = dataTicket;

    useEffect(() => {
        // gọi api vé xem phim
        dispatch(BookTicketAction(id));
    },[])
    // responsive bill
    useEffect(()=>{
        let handSize = ()=>{
            setSize(window.innerWidth)
        }
        window.addEventListener('resize',handSize);
    },[])

    // hiển thị thông tin 
    const infoRender = () => {
        return <div className="booking__info" >
            <div className="p-5">
                <h1 className="text-center" >{thongTinPhim.tenPhim}</h1>
                <p className="text-secondary">
                    {thongTinPhim.tenCumRap}
                    <br />
                    {thongTinPhim.diaChi}
                </p>
            </div>
            <div className="row booking__infoTxt">
                <div className="row col-12 col-lg-6 justify-content-around">
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
                <div className="row col-12 col-lg-6 justify-content-around ">
                    <div>
                        <p className="text-secondary mb-0">ghế Thường</p>
                        <button className="chair__nomarl" disabled></button>
                    </div>
                    <div>
                        <p className="text-secondary mb-0">Ghế vip</p>
                        <button className="chair__vip" disabled></button>
                    </div>
                    <div>
                        <p className="text-secondary mb-0">đã đặt</p>
                        <button className="chair__booked" disabled></button>
                    </div>
                    <div>
                        <p className="text-secondary mb-0">ghế bạn đặt</p>
                        <button className="chair__user" disabled></button>
                    </div>
                </div>
            </div>
        </div>
    }

    let nguoiDung = JSON.parse(localStorage.getItem(USER_LOGIN));
    // hiển thị danh sách ghế
    const seatRender = () => {
        return <div className="booking__seat pt-2 pb-5">
            <div className="booking__screen container">
                <p className="text-center mt-4 text-muted">Màn hình</p>
            </div>
            <div className="booking__chair container px-0">
                {danhSachGhe.slice(0, 90).map((ghe, index) => {
                    // class ghe vip
                    let classVip = ghe.loaiGhe === 'Vip' ? "chair__vip" : "";
                    // class ghe dc dat
                    let classBooked = ghe.daDat === true ? "chair__booked" : "";
                    // class ghe chon
                    let classSelect = "";
                    // class ghe user
                    let classUser = "";
                    if(nguoiDung.taiKhoan == ghe.taiKhoanNguoiDat){
                        classUser = "chair__user"
                    }
                    // kiểm tra ghế có trong mảng ghế đang dặt ?
                    let indexGhe = danhSachGheDangDat.findIndex(gheDat => gheDat.maGhe === ghe.maGhe);
                    if (indexGhe !== -1) {
                        classSelect = "chair__select";
                    }
                    return <button key={index} disabled={ghe.daDat} className={`chair__nomarl m-1 ${classVip} ${classBooked} ${classSelect} ${classUser}`} onClick={() => {
                        dispatch({
                            type: DAT_VE,
                            gheDat: ghe,
                        })
                    }} ></button>
                })}
            </div>
        </div>
    }

    // hiển thị hóa đơn
    const billRender = () => {
        return <div className="booking__items col-3 container" >
            <div className="booking__img">
                <img src={thongTinPhim.hinhAnh} className="img-fluid" alt="123" />
            </div>
            <div className="booking__price">
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
                if( dk > 0){
                    // yes => post
                    dispatch(DatVeAction(action));
                }else{
                    // no => yêu cầu đặt ghế
                    alert("vui lòng chọn ghế")
                }
            }}> thanh toán </button>
        </div>
    }
    // hiển thị khi width < 950px
    const billStickRender = () => {
        return <nav className="row fixed-bottom bg-dark" style={{zIndex:'10'}}>
            <button className="booking__btnpay container m-4 col-4" onClick={() => {
                const action = new TicKetModel();
                action.maLichChieu = id;
                action.danhSachVe = danhSachGheDangDat;
                dispatch(DatVeAction(action));
            }}> thanh toán </button>
            <div className="col-6">
                <div className="row pt-3">
                    <span className="mr-5">Thường</span>
                    <span className="mr-5">{_.size(danhSachGheDangDatThuong)}</span>
                    <span className="mr-5">Đặc biệt</span>
                    <span className="mr-5">{_.size(danhSachGheDangDatVip)}</span>
                </div>
                <hr style={{ borderTop: '1px solid grey' }} />
                <div className="row ">
                    <p className="mr-4 text-danger"> Total </p>
                    <p>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                        return tongTien += ghe.giaVe;
                    }, 0).toLocaleString()}</p>
                </div>
            </div>
        </nav>
    }

    return (
        <div className="p-5" style={{ backgroundColor: '#1B202C' }}>
            <div className="booking">
                <div className="row mx-0">
                    <div className="booking__items col-12 col-lg-9 mb-5">
                        {infoRender()}
                        {seatRender()}
                    </div>
                    {size > 950 ? billRender() : billStickRender()}
                </div>
            </div>
        </div>
    )
}
