import { homeService } from "../../services/HomeService";
import { SET_DATACINEMADETAIL } from "../type/case/home/HomeType";


export const FilmDetailCinemaAction = (id)=>{
    return async (dispatch)=>{
        try{
            const result = await homeService.getPhimDetailCinema(id);
            dispatch({
                type:SET_DATACINEMADETAIL,
                dataCinemaDetail:result.data.content,
            })

        }catch(error){
            
        }
    }
}