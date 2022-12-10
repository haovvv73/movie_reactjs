
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';


export default function FilmDetail_chat() {

    const initstate = [
        {
            img: 'https://i.pravatar.cc/50',
            userName: 'Minh Trí',
            comment: 'phim cũng được đấy',
        },
        {
            img: 'https://i.pravatar.cc/50',
            userName: 'Mỹ Anh',
            comment: 'phim coi rất bùng nổ',
        },
    ]

    const [onAvatar, setOnAvatar] = useState(false)
    const [dataComent, setdataComent] = useState(initstate);

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

    const inpComent = useRef()

    const RenderComent = () => {
        return (
            <>
                {dataComent.map((item, index) => {
                    return (
                        <div className="chat__item d-flex" key={index} >
                            <div>
                                <img style={{ borderRadius: "10px" }} src={item.img} alt="123" />
                            </div>
                            <div className="ml-4">
                                <span>{item.userName}</span>
                                <p className="text-secondary" style={{ fontSize: "15px" }} >{item.comment}</p>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    const handleSendComent = ()=>{
        let userName = localStorage.getItem('USER_LOGIN')
        userName = JSON.parse(userName)
        setdataComent([
            ...dataComent,
            {
                img: 'https://i.pravatar.cc/50',
                userName: userName.taiKhoan,
                comment: inpComent.current.value,
            }
        ])
        inpComent.current.value = ''
    }


    return (
        <div className="container filmDetailChat p-0">
            <div className="chat__inp text-dark d-flex justify-content-around align-items-center">
                {/* avatar user */}
                {onAvatar ? <img style={{ borderRadius: "10px" }} src="https://i.pravatar.cc/70" alt="123" /> : ''}
                {/* input txt */}
                <textarea className="chat__txt p-2" placeholder="nhận xét của bạn" ref={inpComent} ></textarea>
                {/* button send txt */}
                <button className="chat__btn p-1"
                    onClick={handleSendComent} >
                    <i className="fa fa-paper-plane"></i>
                </button>
            </div>
            <div className="chat__content text-dark p-4">
                <RenderComent />
            </div>
        </div>
    )
}
