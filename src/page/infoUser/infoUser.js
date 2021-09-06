import React from 'react'

export default function InfoUser() {







    return (
        <div className="infoUser container text-dark mt-5">
            <div className="infoUser__content d-flex justify-content-center position-relative">
                <div className="infoUser__menu d-flex justify-content-center align-items-center">
                    <ul>
                        <li className="infoUser__itemsMenu">
                            <button data-toggle="tooltip" data-placement="left" title="thông tin">
                                <i className="fa fa-user ml-1"></i>
                            </button>
                        </li>
                        <li className="infoUser__itemsMenu">
                            <button data-toggle="tooltip" data-placement="left" title="vé đã đặt">
                                <i className="fa fa-ticket-alt"></i>
                            </button>
                        </li>
                        <li className="infoUser__itemsMenu">
                            <button data-toggle="tooltip" data-placement="left" title="đăng xuất">
                                <i className="fa fa-sign-out-alt mr-1"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="infoUser__diplay">
                    <div className="infoUser__btnMenu">

                    </div>
                    <div className="infoUser__img">
                        hinh anh
                        {/* https://i.pravatar.cc/300 */}
                    </div>
                    <div className="infoUser__tableContent">
                        bang noi dung
                    </div>
                </div>
            </div>
        </div>
    )
}
