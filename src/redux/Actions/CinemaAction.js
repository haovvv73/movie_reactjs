import { homeService } from "../../services/HomeService";
import { SET_DATACINEMA } from "../type/case/home/HomeType";
import { DisplayLoading, HideLoading } from "../type/case/loading/LoadingType";

export const CinemaAction = ()=>{
    return async (dispatch)=>{
        try{
            dispatch(DisplayLoading)
            const result = await homeService.getDataCinema();
            await dispatch({
                type:SET_DATACINEMA,
                dataCinema: result.data.content,
            })
            dispatch(HideLoading)
        }catch(error){
            
        }
    }
}