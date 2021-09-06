import { userService } from "../../../services/UserService";
import {history} from "../../../App";

export const RegisterAction = (data)=>{
    return async ()=>{
        try{
            await userService.dangKy(data);
            history.push("/login");
        }catch(errors){
            
        }
    }
}