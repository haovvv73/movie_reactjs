import { SET_LISTPHIM } from "../type/case/home/HomeType";

const stateDefault = {
    arrListPhim : [
        {}
    ]
}


export const FilmListReducer = (state=stateDefault,action) => {
        switch(action.type){
            case SET_LISTPHIM:{
                state.arrListPhim = action.arrListPhim;

                return {...state};
            }
            default:return {...state};
        }
}