import { SET_DATACINEMADETAIL } from "../type/case/home/HomeType";

const stateDefault = {
    dataCinemaDetail: {
        heThongRapChieu: [],
        maPhim: "",
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: "",
        moTa: "",
        maNhom: "",
        hot: "",
        dangChieu: "",
        sapChieu: "",
        ngayKhoiChieu: "",
        danhGia: ""
    },
}

export const FilmDetailCinemaReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DATACINEMADETAIL: {
            state.dataCinemaDetail = action.dataCinemaDetail;
            return { ...state };
        }

        default: return { ...state };
    }
}