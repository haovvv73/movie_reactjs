import { SET_LISTPHIM, SET_PHIMSHOWED, SET_PHIMSHOWING } from "../type/case/home/HomeType";

const stateDefault = {
    arrListPhim : [],
    backupArrPhim:[],
}

export const FilmListReducer = (state=stateDefault,action) => {
        switch(action.type){
            case SET_LISTPHIM:{
                state.arrListPhim = action.arrListPhim;
                state.backupArrPhim = action.arrListPhim;

                return {...state};
            }
            case SET_PHIMSHOWING:{
                const sapChieu = state.backupArrPhim.filter(state => state.sapChieu === true);
                state.arrListPhim = sapChieu;

                return {...state}
            }
            case SET_PHIMSHOWED:{
                const dangChieu = state.backupArrPhim;
                state.arrListPhim = dangChieu;

                return {...state}
            }

            default: return {...state};
        }
}