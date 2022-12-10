import React from 'react';
import { NavLink } from 'react-router-dom';
// import libs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import moment from 'moment';

export default function FilmDetail_cinema(props) {

    // dữ liệu suất chiếu phim 
    const data = props.dataCinemaDetail;

    // hàm hiển thị hệ thống các rạp
    const renderHeThongRap = () => {
        return data.heThongRapChieu.map((heThongRap, index) => {
            return <Tab key={index}> <img src={heThongRap.logo} alt="123" className="img-fluid" /> </Tab>
        })
    }

    // hàm hiển thị địa chỉ và suất chiếu phim
    const renderDanhSachPhim = () => {
        return data.heThongRapChieu.map((rap, index) => {
            return <TabPanel key={index}>
                <Tabs>
                    <div className="row mx-0">
                        {/* thông tin địa điểm */}
                        <TabList className="cinemaFilm__contentListAddress col-12 col-lg-4 ">
                            {rap.cumRapChieu.map((cumRap, index) => {
                                return <Tab className="cinemaFilm__contentAddress" key={index}>
                                    <div className="d-flex align-items-center">
                                        <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} className="img-fluid" src={cumRap.hinhAnh} alt="123" />
                                        <span className="m-2">{cumRap.tenCumRap}</span>
                                    </div>
                                    <small className="form-text text-muted">{cumRap.diaChi}</small>
                                </Tab>
                            })}
                        </TabList>
                        {/* thông tin suất chiếu phim */}
                        <div className="cinemaFilm__contentListFilm col-12 col-lg-8">
                            {rap.cumRapChieu.map((cumRap, index) => {
                                return <TabPanel key={index}>
                                    {<div className="cinemaFilm__contentFilm row mx-0">
                                        {/* hinh anh phim */}
                                        <img src={data.hinhAnh} alt="123" />
                                        {/* suất chiếu và thông tin suất chiếu */}
                                        <div className="cinemaFilm__contentFilmtxt col-sm-6 col-12">
                                            <h4 className="m-2">{data.tenPhim}</h4>
                                            <small className="form-text text-muted ml-2">{cumRap.diaChi}</small>
                                            <div className="row mx-0">
                                                {/* suất chiếu theo giờ  */}
                                                {cumRap.lichChieuPhim.slice(0, 4).map((gioChieu, index) => {
                                                    return <NavLink to={`/booking/${gioChieu.maLichChieu}`} key={index} > <p className="cinemaFilm__choosefilm p-2 m-2">
                                                        {moment(gioChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                    </p></NavLink>
                                                })}
                                            </div>
                                        </div>
                                    </div>}
                                </TabPanel>
                            })}
                        </div>
                    </div>
                </Tabs>
            </TabPanel>
        })
    }

    return (
        <div className="container cinemaFilm">
            {data.heThongRapChieu.length <= 0 ? <div className="p-5 text-center text-danger">
                phim hiện không có suất chiếu mong bạn quay lại sau
            </div> : <Tabs>
                <div className="cinemaFilm__logo">
                    <TabList className="cinemaFilm__logoList d-flex justify-content-center flex-wrap">
                        {renderHeThongRap()}
                    </TabList>
                </div>
                <div className="cinemaFilm__content" >
                    {renderDanhSachPhim()}
                </div>
            </Tabs>}
        </div>
    )
}

