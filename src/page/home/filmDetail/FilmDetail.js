import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import action
import { FilmDetailAction } from '../../../redux/Actions/FilmDetailAction';
import { FilmDetailCinemaAction } from '../../../redux/Actions/FilmDetailCinemaAction';
//import libs
import moment from 'moment';
//improt page
import FilmDetail_cinema from './filmDetail_cinema/FilmDetail_cinema';
import { Fragment } from 'react';
import { useState } from 'react';

export default function FilmDetail(props) {
    const dispatch = useDispatch();

    // mã phim
    let { id } = props.match.params;
    // dữ liệu phim
    const { arrPhimDetail } = useSelector(state => state.FilmDetailReducer);
    // dữ liệu suất chiếu của phim
    const { dataCinemaDetail } = useSelector(state => state.FilmDetailCinemaReducer);

    useEffect(() => {
        //lấy dữ liệu phim chi tiết 
        dispatch(FilmDetailAction(id));
        // lấy dữ liệu lịch chiếu theo phim
        dispatch(FilmDetailCinemaAction(id));
    },[]);

    let { tenPhim, ngayKhoiChieu, hinhAnh, trailer, moTa } = arrPhimDetail;

    // trạng thái rating sao cho phim
    const [rating, setRating] = useState(null);
    const [hoverStar, setHoverStar] = useState(3);

    // trạng thái popup trailer
    const [onPop, setOnPop] = useState(false);

    //hiển thị trailer
    const trailerRender = () => {
        return <div className="filmDetail__trailer d-flex justify-content-center align-items-center"
            onClick={() => {
                setOnPop('')
            }}>
            <iframe style={{ height: '40vw', width: '60vw' }} src={trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }

    return (
        <Fragment>
            <div>
                <div className="filmDetail" style={{ backgroundImage: `url(${hinhAnh})` }}>
                    <div className="filmDetail__content row justify-content-center align-items-center mx-0 px-2"  >
                        {/* hình ảnh phim */}
                        <div className="filmDetail__img col-lg-4 col-12 text-center mt-5">
                            <img src={hinhAnh} alt="123" />
                        </div>
                        {/* nội dung phim */}
                        <div className="filmDetail__txt col-lg-7 col-12 mt-5">
                            <div className="p-2">
                                <h2 className="text-white" >{tenPhim}</h2>
                                <div className="row my-3">
                                    <div className="col-12 col-md-5">
                                        {[...Array(5)].map((star, index) => {
                                            const ratingValue = index + 1;
                                            return <label className="filmDetail__star mr-2" key={index}>
                                                <input
                                                    className="rate"
                                                    type="radio"
                                                    name="rating"
                                                    value={ratingValue}
                                                    onClick={() => setRating(ratingValue)} />

                                                <span
                                                    className={`star ${ratingValue <= (rating || hoverStar) ? 'starRating' : ''} `}
                                                    onMouseEnter={() => setHoverStar(ratingValue)}
                                                    onMouseLeave={() => setHoverStar(null)}
                                                > <i className="fa fa-star"></i> </span>
                                            </label>
                                        })}
                                    </div>
                                    <span className="col-12 col-md-5"><i className="fa fa-clock mr-3"></i>{moment(ngayKhoiChieu).format('DD-MM-YYYY')}</span>
                                </div>
                                <p className="mb-4">{moTa}</p>
                                <button className="filmDetail__btn" onClick={() => {
                                    setOnPop(true)
                                }}>trailer</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* thông tin suất chiếu */}
                <div className="filmDetail__cinema" >
                    <FilmDetail_cinema dataCinemaDetail={dataCinemaDetail} />
                </div>
            </div>
            {onPop ? trailerRender() : null}
        </Fragment>
    )
}
