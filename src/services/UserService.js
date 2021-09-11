import { API_DANGKY, API_DANGNHAP, API_INFOUSER } from "../redux/type/API/nguoiDung/ApiNguoiDungtype";
import { baseService } from "./baseService";

class UserService extends baseService{

    dangNhap=(data)=>{
        return this.post(API_DANGNHAP,data)
    }

    dangKy=(data)=>{
        return this.post(API_DANGKY,data)
    }

    getInfoUser=()=>{
        return this.post(API_INFOUSER)
    }


}

export const userService = new UserService();