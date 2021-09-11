import { SET_LISTFILMPHANTRANG, SET_LISTUSERPHANTRANG, SET_PHIMCAPNHAP } from "../../type/case/admin/AdminType"

const stateDefault = {
    listFilmPhanTrang: {
        currentPage: "",
        count: "",
        totalPages: "",
        totalCount: "",
        items:[],
    },
    listUserPhanTrang:{
        currentPage: "",
        count: "",
        totalPages: "",
        totalCount: "",
        items:[],
    },
    phimCapNhap:{
        tenPhim: "",
        trailer: "",
        moTa: "",
        ngayKhoiChieu: "",
        dangChieu: false,
        sapChieu: false,
        hot: false,
        danhGia: 0,
        maNhom: 'GP01',
        hinhAnh: null,
    }
}

export const AdminReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_LISTFILMPHANTRANG: {
            state.listFilmPhanTrang = action.listFilmPhanTrang;

            return { ...state }
        }
        case SET_LISTUSERPHANTRANG:{
            state.listUserPhanTrang = action.listUserPhanTrang;

            return {...state}
        }
        case SET_PHIMCAPNHAP:{
            state.phimCapNhap = action.phimCapNhap;

            return {...state}
        }

        default: return { ...state }
    }
}