import React from 'react'

export default function ShowtimeManage() {









    return (
        <div className="text-dark">
            <h2 className="text-center">Thêm lịch chiếu</h2>
            <form>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="form-group">
                            <label htmlFor="inpTenPhim">tên Phim</label>
                            <select className="custom-select" id="inpTenPhim">
                                <option selected>Choose...</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>

                        <div className="form-group mb-3">

                            <label htmlFor="inpHeThongRap">Hệ Thống Rạp</label>

                            <select className="custom-select" id="inpHeThongRap">
                                <option selected>Choose...</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>

                        <div className="form-group mb-3">

                            <label htmlFor="inpRap">Rạp</label>

                            <select className="custom-select" id="inpRap">
                                <option selected>Choose...</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>

                        <div className="row">
                            <div className="form-group col">
                                <label >Ngày chiếu và Giờ chiếu</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group col">
                                <label >Giá Vé</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>


                        <button type="submit" className="btn btn-primary container">thêm lịch chiếu</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
