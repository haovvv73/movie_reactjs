import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilmListAction } from '../../../redux/Actions/FilmListAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';


export default function FilmList(props) {
    const dispatch = useDispatch();
    
    // dữ liệu danh sách phim
    const { arrListPhim } = useSelector(state => state.FilmListReducer)

    useEffect(() => {
        dispatch(FilmListAction());
    }, [])

    const renderListPhim = () => {
        return arrListPhim.slice(0, 16).map((phim, index) => {
            return <div key={index} className="filmList__items">
                {/* hình ảnh phim */}
                <div className="filmList__img">
                    <img src={phim.hinhAnh} alt="123"  />
                    <div className="filmList__overPlay"></div>
                    <div className="filmList__overtxt text-center">
                        <p className="text-danger" style={{ fontSize: '60px' }} > <i className="fa fa-play-circle"></i> </p>
                        <NavLink to={`/detail/${phim.maPhim}`} ><button>Chi Tiết</button></NavLink>
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
        <div className="filmList">
            {/* hiển thị phim đang chiếu và sắp chiếu */}
            <div className="btn__showing" style={{ width: '90%', margin: 'auto' }}>
                <button>đang chiếu</button>
                <button>sắp chiếu</button>
                <hr style={{borderTop:'1px solid rgba(0, 0, 0, 0.4)'}} />
            </div>
            {/* danh sách phim */}
            <div className="d-flex flex-wrap justify-content-center filmList__content">
                {renderListPhim()}
            </div>
        </div>
    )
}
