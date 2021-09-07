import { dataInfoUserModel } from "../../../_core/models/DataInfoUserModel";
import { SET_INFOUSER } from "../../type/case/nguoiDung/UserType";


const stateDefault = {
    dataInfoUser: new dataInfoUserModel(),
}

export const InfoUserReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_INFOUSER:{
            state.dataInfoUser = action.dataInfoUser;

            return {...state}
        }

        default: return{...state}
    }
}