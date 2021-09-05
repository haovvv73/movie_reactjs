import { DISPLAY_SUCESS, HIDE_SUCESS } from "../../type/case/sucess/sucessType"

const stateDefault = {
    isSucess : false,
}

export const sucessReducer =(state=stateDefault,action)=>{
    switch(action.type){
        case DISPLAY_SUCESS:{
            state.isSucess = true;

            return {...state}
        }
        case HIDE_SUCESS:{
            state.isSucess = false;

            return {...state}
        }

        default: return{...state}
    }
}