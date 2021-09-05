import { userService } from "../../../services/UserService";
import {history} from '../../../App';
import { DANG_NHAP } from "../../type/case/nguoiDung/UserType";

export const LoginAction = (data)=>{
    return async (dispatch)=>{
        try{
            const result = await userService.dangNhap(data);
            if(result.data.statusCode === 200){
                dispatch({
                    type:DANG_NHAP,
                    loginData:result.data.content,
                });
                history.replace("/");
            }
        }catch(error){
            
        }
    }
}