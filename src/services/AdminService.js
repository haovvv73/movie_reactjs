import { API_CAPNHAPPHIM, API_GETPHIMCAPNHAP, API_LISTFILMPHANTRANG, API_LISTUSERPHANTRANG, API_THEMPHIMVAODANHSACH, API_XOAPHIM } from "../redux/type/API/admin/ApiAdminType";
import { baseService } from "./baseService";

class AdminService extends baseService{

    listFilmPhanTrangService =(param = 'soTrang=1&soPhanTuTrenTrang=5',textPhim = '')=>{
        if(textPhim.trim() !== ''){
            return this.get(API_LISTFILMPHANTRANG + `tenPhim=${textPhim}`);
        }
        return this.get(API_LISTFILMPHANTRANG + param);
    }

    listUserPhanTrangService = (param)=>{
        return this.get(API_LISTUSERPHANTRANG + param);
    }

    getPhimCapNhapService = (id)=>{
        return this.get(API_GETPHIMCAPNHAP + id)
    }

    capNhapPhim = (data)=>{
        return this.post(API_CAPNHAPPHIM,data)
    }

    themPhimVaoDanhSachService = (data)=>{
        return this.post(API_THEMPHIMVAODANHSACH,data);
    }

    xoaPhim =(maPhim)=>{
        return this.delete(API_XOAPHIM + maPhim)
    }
    
}

export const adminService = new AdminService();