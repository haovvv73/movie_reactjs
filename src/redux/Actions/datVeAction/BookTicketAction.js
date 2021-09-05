import { bookTicketService } from "../../../services/BookTicketService";
import { DisplayLoading, HideLoading } from "../../type/case/loading/LoadingType";
import { DAT_VE_HOAN_TAT, SET_DATATICKET } from "../../type/case/datVe/BookingType";
import { DISPLAY_SUCESS } from "../../type/case/sucess/sucessType";

export const BookTicketAction = (id)=>{
    return async (dispatch)=>{
        try{
            dispatch(DisplayLoading);
            const result = await bookTicketService.getDataTicket(id);
            if(result.data.statusCode === 200){
                dispatch({
                    type: SET_DATATICKET,
                    dataTicket: result.data.content,
                })
            }
            dispatch(HideLoading);
        }catch(error){
            
        }
    }
}

export const DatVeAction = (data)=>{
    return async (dispatch)=>{
        try{
            await bookTicketService.datVe(data);
            await dispatch({
                type:DAT_VE_HOAN_TAT,
            })
            dispatch({
                type:DISPLAY_SUCESS,
            })
    
        }catch(error){
    
        }
    }
}