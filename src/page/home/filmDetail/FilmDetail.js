import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilmDetailAction } from '../../../redux/Actions/FilmDetailAction';
import moment from 'moment';
import FilmDetail_cinema from './filmDetail_cinema/FilmDetail_cinema';
import { FilmDetailCinemaAction } from '../../../redux/Actions/FilmDetailCinemaAction';

export default function FilmDetail(props) {
    const dispatch = useDispatch();
    
    // mã phim
    let { id } = props.match.params;
    // dữ liệu phim
    const { arrPhimDetail } = useSelector(state => state.FilmDetailReducer);
    // dữ liệu suất chiếu của phim
    const { dataCinemaDetail } = useSelector(state => state.FilmDetailCinemaReducer);

    useEffect(() => {
        dispatch(FilmDetailAction(id));
        dispatch(FilmDetailCinemaAction(id));
    }, []);

    let { tenPhim, ngayKhoiChieu, hinhAnh, trailer, moTa } = arrPhimDetail;

    return (
        <div>
            <div className="filmDetail" style={{ backgroundImage: `url(${hinhAnh})` }}>
                <div className="filmDetail__content d-flex justify-content-center align-items-center flex-wrap"  >
                    {/* hình ảnh phim */}
                    <div className="filmDetail__img mt-5 ">
                        <img src={hinhAnh} alt="123" />
                    </div>
                    {/* nội dung phim */}
                    <div className="filmDetail__txt">
                        <div className="p-5">
                            <h2 className="text-white" >{tenPhim}</h2>
                            <p>{moTa}</p>
                            <span><i className="fa fa-clock mr-3"></i>{moment(ngayKhoiChieu).format('DD-MM-YYYY')}</span>
                            <p></p>
                            <button className="filmDetail__booking">trailer</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* thông tin suất chiếu */}
            <div className="filmDetail__cinema" >
                <FilmDetail_cinema dataCinemaDetail={dataCinemaDetail} />
            </div>
        </div>

    )
}
