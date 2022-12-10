import { homeService } from "../../services/HomeService";
import { SET_DETAILPHIM } from "../type/case/home/HomeType";


export const FilmDetailAction = (id)=>{

    return async (dispatch)=>{
        try{
            const result = await homeService.getPhimDetail(id);
            dispatch({
                type:SET_DETAILPHIM,
                arrPhimDetail : result.data.content,
            })

        }catch(error){
            
        }
    } 

}




