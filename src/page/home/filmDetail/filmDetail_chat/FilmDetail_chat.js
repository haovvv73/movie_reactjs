
import React, { useEffect, useState } from 'react'


export default function FilmDetail_chat() {

    // class avatar người dùng
    const [onAvatar, setOnAvatar] = useState(true);

    // ẩn / hiện avatar event 
    useEffect(() => {
        const hideAvatar = () => {
            if (window.innerWidth < 599) {
                setOnAvatar(false);
            } else {
                setOnAvatar(true)
            }
        }
        hideAvatar();
        window.addEventListener('resize', hideAvatar)
        return () => {
            window.removeEventListener('resize', hideAvatar)
        }
    }, [])

    return (
        <div className="container filmDetailChat p-0">
            <div className="chat__inp text-dark d-flex justify-content-around align-items-center">
                {/* avatar user */}
                {onAvatar ? <img style={{ borderRadius: "10px" }} src="https://i.pravatar.cc/70" alt="123" /> : ''}
                {/* input txt */}
                <textarea className="chat__txt p-2" placeholder="nhận xét của bạn" ></textarea>
                {/* button send txt */}
                <button className="chat__btn p-1"
                    onClick={() => {
                        console.log("hello");
                    }} >
                    <i className="fa fa-paper-plane"></i>
                </button>
            </div>
            <div className="chat__content text-dark p-4">
                <div className="chat__item d-flex">
                    <div>
                        <img style={{ borderRadius: "10px" }} src="https://i.pravatar.cc/50" alt="123" />
                    </div>
                    <div className="ml-4">
                        <span>Minh Trí</span>
                        <p className="text-secondary" style={{ fontSize: "15px" }} >phim cũng được đấy</p>
                    </div>
                </div>
                <div className="chat__item d-flex">
                    <div>
                        <img style={{ borderRadius: "10px" }} src="https://i.pravatar.cc/50" alt="123" />
                    </div>
                    <div className="ml-4">
                        <span> Mỹ Anh </span>
                        <p className="text-secondary" style={{ fontSize: "15px" }} >phim coi rất bùng nổ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
