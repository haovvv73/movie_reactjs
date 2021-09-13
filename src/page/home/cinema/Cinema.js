import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import libs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import moment from 'moment';

import { CinemaAction } from '../../../redux/Actions/CinemaAction';

export default function Cinema(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        // lấy dữ liệu cinema
        dispatch(CinemaAction());
    },[])

    // dữ liệu các suất chiếu của các phim
    const { dataCinema } = useSelector(state => state.CinemaReducer);

    // hàm hiển thị hệ thống các rạp
    const renderHeThongRap = () => {
        return dataCinema.map((heThongRap, index) => {
            return <Tab key={index}> <img src={heThongRap.logo} alt="123" className="img-fluid" /> </Tab>
        })
    }

    // hàm hiển thị địa điểm và suất chiếu phim
    const renderDanhSachPhim = () => {
        return dataCinema.map((rap, index) => {
            return <TabPanel key={index}>
                <Tabs>
                    <div className="row mx-0">
                        {/* thông tin địa điểm */}
                        <TabList className="cinema__contentListAddress cinema__items cinema__itemspan col-12 col-lg-4">
                            {rap.lstCumRap.map((cumRap, index) => {
                                return <Tab className="cinema__contentAddress" key={index}>
                                    <div className="d-flex align-items-center">
                                        <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} className="img-fluid" src={cumRap.hinhAnh} alt="123" />
                                        <span className="m-2">{cumRap.tenCumRap}</span>
                                    </div>
                                    <small className="form-text text-muted">{cumRap.diaChi}</small>
                                </Tab>
                            })}
                        </TabList>
                        {/* thông tin suất chiếu phim */}
                        <div className="cinema__contentListFilm cinema__items col-12 col-lg-8">
                            {rap.lstCumRap.map((cumRap, index) => {
                                return <TabPanel key={index}>{cumRap.danhSachPhim.slice(0,9).map((phim, index) => {
                                    return <div key={index} className="cinema__contentFilm row mx-0">
                                        {/* hinh anh phim */}
                                        <img src={phim.hinhAnh} alt="123" />
                                        {/* suất chiếu và thông tin suất chiếu */}
                                        <div className="cinema__contentFilmtxt col-12 col-sm-6 col-lg-7">
                                            <h4 className="m-2">{phim.tenPhim}</h4>
                                            <small className="form-text text-muted ml-2">{cumRap.diaChi}</small>
                                            <div className="row mx-0">
                                                {/* lựa chọn suất chiếu */}
                                                {phim.lstLichChieuTheoPhim.slice(0,4).map((gioChieu, index) => {
                                                return <NavLink to={`/booking/${gioChieu.maLichChieu}`}  key={index}> <p className="cinema__choosefilm p-2 m-1">
                                                    {moment(gioChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                </p></NavLink>
                                            })}</div>
                                        </div>
                                    </div>
                                })}</TabPanel>
                            })}
                        </div>
                    </div>
                </Tabs>
            </TabPanel>
        })
    }

    return (
        <div className="container cinema">
            <Tabs>
                <div className="cinema__logo">
                    <TabList className="cinema__logoList d-flex justify-content-center flex-wrap">
                        {renderHeThongRap()}
                    </TabList>
                </div>
                <div className="cinema__content">
                    {renderDanhSachPhim()}
                </div>
            </Tabs>
        </div>
    )
}
