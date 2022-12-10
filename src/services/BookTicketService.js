import { API_DATATICKET, API_DATVE } from "../redux/type/API/booking/ApiBookingtype";
import { baseService } from "./baseService";

class BookTicketService extends baseService{

    getDataTicket = (id)=>{
        return this.get(`${API_DATATICKET}=${id}`)
    }

    datVe = (data)=>{
        return  this.post(API_DATVE,data)
    }

}

export const bookTicketService = new BookTicketService();