import { userService } from "../../../services/UserService";
import { DisplayLoading, HideLoading } from "../../type/case/loading/LoadingType";
import { SET_INFOUSER } from "../../type/case/nguoiDung/UserType";


export const InfoUserAction = ()=>{
    return async (dispatch)=>{
        try{
            dispatch(DisplayLoading)
            const result = await userService.getInfoUser();

            dispatch({
                type:SET_INFOUSER,
                dataInfoUser: result.data.content,
            })
            dispatch(HideLoading)
        }catch(error){
            
        }
    }
}