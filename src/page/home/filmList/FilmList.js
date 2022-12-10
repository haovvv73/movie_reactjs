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
        trailer: "",
        on: false,
    });

    //hiển thị trailer
    const trailerRender = () => {
        return <div className="filmList__trailer d-flex justify-content-center align-items-center"
            onClick={() => {
                setOnPop({})
            }}>
            <iframe style={{ height: '550px', width: '90vw' }} src={`${onPop.trailer.replace('https://www.youtube.com/', 'https://www.youtube.com/embed/').replace('watch?v=','')}?rel=0&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }

    const renderListPhim = () => {
        return arrListPhim.slice(0, 16).map((phim, index) => {
            return <div key={index} className="filmList__items">
                {/* hình ảnh phim */}
                <div className="filmList__img">
                    <img src={phim.hinhAnh} alt="123" />
                    <div className="filmList__overPlay"></div>
                    <div className="filmList__overtxt text-center container">
                        <div className="row justify-content-center align-items-center mb-4">
                            <div className="filmList__trailerBtn" onClick={() => {
                                setOnPop({
                                    trailer: phim.trailer,
                                    on: true,
                                })
                            }}>
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                        <NavLink to={`/detail/${phim.maPhim}`} ><button className="filmList__btn">Chi Tiết</button></NavLink>
                    </div>
                </div>
                {/* thông tin phim */}
                <div className="filmList__detail p-2">
                    <span> {phim.tenPhim} </span>

                    <div className="filmList__spangroup">
                        <p className="filmList__span"> Animation - adventure - horror </p>
                        <div className="d-flex justify-content-between ">
                            <small> <i className="fa fa-clock text-secondary"></i> {moment(phim.ngayKhoiChieu).format('DD-MM-YYYY')} </small>
                            <small>PG 15</small>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <Fragment>
            <div className="filmList">
                {/* btn hiển thị phim đang chiếu và sắp chiếu */}
                <div className="btn__showing" style={{ width: '90%', margin: 'auto' }}>
                    <div className="row">
                        <button className={onShow} onClick={() => {
                            // off nút sắp chiếu
                            setOffShow("");
                            // on nút đang chiếu
                            setOnShow("btn__active")
                            dispatch({
                                type: SET_PHIMSHOWED,
                            })
                        }}>Đang chiếu</button>
                        <button className={offShow} onClick={() => {
                            // on nút sắp chiếu
                            setOffShow("btn__active");
                            // off nút đang chiếu
                            setOnShow("")
                            dispatch({
                                type: SET_PHIMSHOWING,
                            })
                        }}>Sắp chiếu</button>
                    </div>
                    <hr style={{ borderTop: '1px solid rgba(0, 0, 0, 0.4)' }} />
                </div>
                {/* danh sách phim */}
                <div className="filmList__content">
                    {renderListPhim()}
                </div>
            </div>
            {/* trailer film position */}
            {onPop.on ? trailerRender() : null}
        </Fragment>
    )
}
