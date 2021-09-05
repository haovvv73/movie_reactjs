import { API_BANNER, API_CINEMA, API_FILM, API_LISTPHIM, API_PHIMDETAIL } from "../redux/type/API/home/ApiHometype";
import { baseService } from "./baseService"



class HomeService extends baseService{

    constructor(){
        super();
    }

    getPictureBanner=()=>{
        return this.get(API_BANNER);
    }

    getListPhim=()=>{
        return this.get(API_LISTPHIM);
    }

    getPhimDetail=(id)=>{
        return this.get(`${API_PHIMDETAIL}=${id}`)
    }

    getDataCinema=()=>{
        return this.get(API_CINEMA);
    }

    getPhimDetailCinema=(id)=>{
        return this.get(`${API_FILM}=${id}`);
    }


}

export const homeService = new HomeService();