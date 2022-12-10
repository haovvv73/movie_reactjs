import { SET_DETAILPHIM } from "../type/case/home/HomeType";


const stateDefault = {
    arrPhimDetail: []
}


export const FilmDetailReducer = (state=stateDefault,action) => {
        switch(action.type){
            case SET_DETAILPHIM:{
                state.arrPhimDetail = action.arrPhimDetail;

                return {...state}
            }

            default:return{...state};
        }
}