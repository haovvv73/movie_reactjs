import { SET_LISTFILMPHANTRANG } from "../../type/case/admin/AdminType"

const stateDefault = {
    listFilmPhanTrang: {
        currentPage: "",
        count: "",
        totalPages: "",
        totalCount: "",
        items: []
    },
}

export const AdminReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_LISTFILMPHANTRANG: {
            state.listFilmPhanTrang = action.listFilmPhanTrang;

            return { ...state }
        }

        default: return { ...state }
    }
}