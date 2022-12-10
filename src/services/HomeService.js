import { API_BANNER, API_CINEMA, API_FILM, API_LISTPHIM, API_PHIMDETAIL } from "../redux/type/API/home/ApiHometype";
import { baseService } from "./baseService"



class HomeService extends baseService{

    getPictureBanner=()=>{
        return this.get(API_BANNER);
    }

    // phim
    getListPhim=()=>{
        return this.get(API_LISTPHIM);
    }

    getPhimDetail=(id)=>{
        return this.get(`${API_PHIMDETAIL}=${id}`)
    }

    // rạp
    getDataCinema=()=>{
        return this.get(API_CINEMA);
    }

    getPhimDetailCinema=(id)=>{
        return this.get(`${API_FILM}=${id}`);
    }

}

export const homeService = new HomeService();