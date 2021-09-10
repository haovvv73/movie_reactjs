import { adminService } from "../../../services/AdminService";
import { SET_LISTFILMPHANTRANG } from "../../type/case/admin/AdminType";

export const ListFilmPhanTrangAction = (param)=>{
    return async (dispatch)=>{
        try{
            const result = await adminService.listFilmPhanTrangService(param);

            dispatch({
                type:SET_LISTFILMPHANTRANG,
                listFilmPhanTrang:result.data.content,
            })

        }catch(error){
    
        }
    }
}