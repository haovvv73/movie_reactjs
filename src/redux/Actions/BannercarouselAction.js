
import { homeService } from '../../services/HomeService';
import { SET_BANNER } from '../type/case/home/HomeType';

export const BannerCarouselAction = ()=>{
    return async (dispatch)=>{
        try{
            const result = await homeService.getPictureBanner() ;
            dispatch({
                type:SET_BANNER,
                arrBanner:result.data.content,
            })

        }catch(error){
            
        }
    }
}