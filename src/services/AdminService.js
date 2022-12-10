import { API_CAPNHAPPHIM, API_GETPHIMCAPNHAP, API_LISTFILMPHANTRANG, API_LISTUSERPHANTRANG, API_THEMPHIMVAODANHSACH, API_XOAPHIM } from "../redux/type/API/admin/ApiAdminType";
import { API_CUMRAP, API_HETHONGRAP, API_TAOLICHCHIEU } from "../redux/type/API/home/ApiHometype";
import { baseService } from "./baseService";

class AdminService extends baseService {
    
    // người dùng
    listUserPhanTrangService = (param) => {
        return this.get(API_LISTUSERPHANTRANG + param);
    }

    // danh sách phim
    listFilmPhanTrangService = (param = 'soTrang=1&soPhanTuTrenTrang=5', textPhim = '') => {
        if (textPhim.trim() !== '') {
            return this.get(API_LISTFILMPHANTRANG + `tenPhim=${textPhim}`);
        }
        return this.get(API_LISTFILMPHANTRANG + param);
    }

    // cập nhập
    getPhimCapNhapService = (id) => {
        return this.get(API_GETPHIMCAPNHAP + id)
    }

    themPhimVaoDanhSachService = (data) => {
        return this.post(API_THEMPHIMVAODANHSACH, data);
    }

    capNhapPhim = (data) => {
        return this.post(API_CAPNHAPPHIM, data)
    }

    // xóa phim
    xoaPhim = (maPhim) => {
        return this.delete(API_XOAPHIM + maPhim)
    }

    // thêm lịch chiếu

    heThongRap = ()=>{
        return this.get(API_HETHONGRAP)
    }
    cumRap = (maHeThong)=>{
        return this.get(API_CUMRAP + maHeThong)
    }
    taoLichChieu = (data)=>{
        return this.post(API_TAOLICHCHIEU,data)
    }

}

export const adminService = new AdminService();