
import { homeService } from "../../services/HomeService";
import { SET_LISTPHIM } from "../type/case/home/HomeType";

export const FilmListAction = ()=>{

    return async (dispatch)=>{
        try{
            const result = await homeService.getListPhim();
            await dispatch({
                type:SET_LISTPHIM,
                arrListPhim:result.data.content,
            })
        }catch(error){

        }
    }
} 