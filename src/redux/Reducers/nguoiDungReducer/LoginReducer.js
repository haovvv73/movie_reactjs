import { ACCESSTOKEN, USER_LOGIN } from "../../../util/setting";
import { DANG_NHAP } from "../../type/case/nguoiDung/UserType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    loginUser: user,
}

export const LoginReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case DANG_NHAP: {
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.loginData));
            localStorage.setItem(ACCESSTOKEN, (action.loginData.accessToken));

            let user = {};
            if (localStorage.getItem(USER_LOGIN)) {
                user = JSON.parse(localStorage.getItem(USER_LOGIN));
            }

            state.loginUser = user;

            return { ...state };
        }

        default: return { ...state };
    }

}