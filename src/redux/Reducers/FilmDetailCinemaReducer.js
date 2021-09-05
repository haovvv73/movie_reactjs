import { SET_DATACINEMADETAIL } from "../type/case/home/HomeType";

const stateDefault ={
    dataCinemaDetail:[],
}

export const FilmDetailCinemaReducer =(state=stateDefault,action)=>{
    switch(action.type){
        case SET_DATACINEMADETAIL:{
            state.dataCinemaDetail = action.dataCinemaDetail;
            return {...state};
        }

        default: return{...state};
    }
}