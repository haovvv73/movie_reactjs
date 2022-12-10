import { SET_BANNER } from "../type/case/home/HomeType";

const stateDefault = {
    arrBanner:[],
}


export const BannerCarouselReducer = (state=stateDefault,action)=>{

    switch(action.type){
        case SET_BANNER:{
            state.arrBanner = action.arrBanner;

            return {...state}
        }

        default:return {...state};
    }

}