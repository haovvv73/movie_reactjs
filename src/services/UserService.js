import { API_DANGKY, API_DANGNHAP } from "../redux/type/API/nguoiDung/ApiNguoiDungtype";
import { baseService } from "./baseService";

class UserService extends baseService{

    constructor(){
        super();
    }

    dangNhap=(data)=>{
        return this.post(API_DANGNHAP,data)
    }

    dangKy=(data)=>{
        return this.post(API_DANGKY,data)
    }


}

export const userService = new UserService();