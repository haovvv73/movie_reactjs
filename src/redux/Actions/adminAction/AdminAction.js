import { adminService } from "../../../services/AdminService";
import { SET_LISTFILMPHANTRANG, SET_LISTUSERPHANTRANG, SET_PHIMCAPNHAP } from "../../type/case/admin/AdminType";

// lấy phim từ data 
export const ListFilmPhanTrangAction = (param,textPhim)=>{
    return async (dispatch)=>{
        try{
            const result = await adminService.listFilmPhanTrangService(param,textPhim);

            dispatch({
                type:SET_LISTFILMPHANTRANG,
                listFilmPhanTrang:result.data.content,
            })

        }catch(error){
    
        }
    }
}

// lấy người dùng từ data
export const ListUserPhanTrangAction = (param)=>{
    return async (dispatch)=>{
        try{
            const result = await adminService.listUserPhanTrangService(param);

            dispatch({
                type:SET_LISTUSERPHANTRANG,
                listUserPhanTrang:result.data.content,
            })

        }catch(error){

        }
    }
}

// đưa phim lên data
export const ThemPhimVaoDanhSachAction = (data)=>{
    return async ()=>{
        try{
            await adminService.themPhimVaoDanhSachService(data);
            alert("thêm thành công :)")
        }catch(error){
            alert("hãy thử lại :(")
        }

    }
}

// lấy phim cập nhập từ data
export const GetPhimCapNhapAction = (id)=>{
    return async (dispatch)=>{
        try{
            const result = await adminService.getPhimCapNhapService(id);

            dispatch({
                type:SET_PHIMCAPNHAP,
                phimCapNhap: result.data.content,
            })

        }catch(error){
        }
    }
}

// cập nhập phim lên data
export const CapNhapPhimAction = (data)=>{
    return async ()=>{
        try{
            await adminService.capNhapPhim(data);
            alert("cập nhập thành công :)")
            
        }catch(error){
            alert("cập nhập ko thành công :( ")
        }
    }
}

// xóa phim trên data
export const XoaPhimAction = (maPhim)=>{
    return async (dispatch)=>{
        try{
            await adminService.xoaPhim(maPhim);

            alert("xóa được r đó")
            // reload lại danh sách phim
            dispatch(ListFilmPhanTrangAction())

        }catch(error){
        }
    }
}



