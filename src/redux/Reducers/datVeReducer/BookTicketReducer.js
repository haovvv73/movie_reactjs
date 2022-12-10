import { DataTicketModel } from "../../../_core/models/DataTicketModel";
import { DAT_VE, DAT_VE_HOAN_TAT, SET_DATATICKET } from "../../type/case/datVe/BookingType";

const stateDefault = {
    dataTicket: new DataTicketModel(),
    danhSachGheDangDat:[],
    danhSachGheDangDatThuong:[],
    danhSachGheDangDatVip:[],
}

export const BookTicketReducer = (state = stateDefault, action)=>{
    switch(action.type){
        case SET_DATATICKET:{
            state.dataTicket = action.dataTicket;
            return {...state};
        }
        case DAT_VE:{
            let danhSachGheCapNhap = [...state.danhSachGheDangDat];
            let viTri = danhSachGheCapNhap.findIndex(ghe => ghe.maGhe === action.gheDat.maGhe );
            // kiểm tra ghế đặt có tồn tại không
            if(viTri !== -1){
                // nếu có => xóa
                danhSachGheCapNhap.splice(viTri,1);
            }else{
                // nếu không => thêm
                danhSachGheCapNhap.push(action.gheDat);
            }
            // lọc ghế thường
            let thuong = danhSachGheCapNhap.filter(ghe=> ghe.loaiGhe === 'Thuong');
            // lọc ghế vip
            let vip = danhSachGheCapNhap.filter(ghe=> ghe.loaiGhe === 'Vip');
            
            return {...state,danhSachGheDangDat:danhSachGheCapNhap,danhSachGheDangDatThuong:thuong,danhSachGheDangDatVip:vip};
        }
        case DAT_VE_HOAN_TAT:{
            state.danhSachGheDangDat = [];
            state.danhSachGheDangDatThuong = [];
            state.danhSachGheDangDatVip = [];

            return {...state,}
        }

        default: return {...state}
    }
}