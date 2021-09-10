import { API_LISTFILMPHANTRANG } from "../redux/type/API/admin/ApiAdminType";
import { baseService } from "./baseService";

class AdminService extends baseService{

    listFilmPhanTrangService =(param)=>{
        return this.get(API_LISTFILMPHANTRANG + param);
    }

}

export const adminService = new AdminService();