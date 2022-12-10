import { SET_DATACINEMA } from "../type/case/home/HomeType";

const stateDefault={
    dataCinema:[]
}

export const CinemaReducer = (state=stateDefault,action)=>{
            switch(action.type){   
                case SET_DATACINEMA:{
                    state.dataCinema = action.dataCinema;

                    return {...state};
                }
                default:return{...state}
            }
}






