import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// improt libs
import moment from 'moment';
// import action
import { FilmListAction } from '../../../redux/Actions/FilmListAction';
import { SET_PHIMSHOWED, SET_PHIMSHOWING } from '../../../redux/type/case/home/HomeType';
import { useState } from 'react';
import { Fragment } from 'react';


export default function FilmList(props) {
    const dispatch = useDispatch();

    // dữ liệu danh sách phim
    const { arrListPhim } = useSelector(state => state.FilmListReducer);

    // tình trạng btn showing
    const [onShow, setOnShow] = useState("btn__active");
    const [offShow, setOffShow] = useState("");

    useEffect(() => {
        // lấy dữ liệu danh sách phim
        dispatch(FilmListAction());
    }, [])

    // trạng thái popup trailer
    const [onPop, setOnPop] = useState({
        trailer:"",
        on:false,
    });

    //hiển thị trailer
    const trailerRender = () => {
        return <div className="filmList__trailer d-flex justify-content-center align-items-center"
            onClick={() => {
                setOnPop({})
            }}>
            <iframe style={{ height: '40vw', width: '60vw' }} src={onPop.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    }



    const renderListPhim = () => {
        return arrListPhim.slice(0, 16).map((phim, index) => {
            return <div key={index} className="filmList__items">
                {/* hình ảnh phim */}
                <div className="filmList__img">
                    <img src={phim.hinhAnh} alt="123" />
                    <div className="filmList__overPlay"></div>
                    <div className="filmList__overtxt text-center">
                        <div className="row justify-content-center align-items-center mb-5">
                            <div className="filmList__trailerBtn" onClick={() => {
                                setOnPop({
                                    trailer:phim.trailer,
                                    on:true,
                                })
                            }}>
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                        <NavLink to={`/detail/${phim.maPhim}`} ><button className="filmList__btn">Chi Tiết</button></NavLink>
                    </div>
                </div>
                {/* thông tin phim */}
                <div className="filmList__detail">
                    <div className="p-2">
                        <span> {phim.tenPhim} </span>
                        <p className="filmList__span"> Animation - adventure - horror </p>
                        <span className="text-danger" style={{ fontSize: '14px' }}> <i className="fa fa-clock"></i> {moment(phim.ngayKhoiChieu).format('DD-MM-YYYY')} </span>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <Fragment>
            <div className="filmList">
                {/* hiển thị phim đang chiếu và sắp chiếu */}
                <div className="btn__showing" style={{ width: '90%', margin: 'auto' }}>
                    <button className={onShow} onClick={() => {
                        // off nút sắp chiếu
                        setOffShow("");
                        // on nút đang chiếu
                        setOnShow("btn__active")
                        dispatch({
                            type: SET_PHIMSHOWED,
                        })
                    }}>đang chiếu</button>
                    <button className={offShow} onClick={() => {
                        // on nút sắp chiếu
                        setOffShow("btn__active");
                        // off nút đang chiếu
                        setOnShow("")
                        dispatch({
                            type: SET_PHIMSHOWING,
                        })
                    }}>sắp chiếu</button>
                    <hr style={{ borderTop: '1px solid rgba(0, 0, 0, 0.4)' }} />
                </div>
                {/* danh sách phim */}
                <div className="d-flex flex-wrap justify-content-center filmList__content">
                    {renderListPhim()}
                </div>
            </div>
            {onPop.on ? trailerRender() : null}
        </Fragment>
    )
}
