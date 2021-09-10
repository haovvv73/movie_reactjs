import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { AdminReducer } from './Reducers/adminReducer/AdminReducer';
import { BannerCarouselReducer } from './Reducers/BannerCarouselReducer';
import { CinemaReducer } from './Reducers/CinemaReducer';
import { BookTicketReducer } from './Reducers/datVeReducer/BookTicketReducer';
import { FilmDetailCinemaReducer } from './Reducers/FilmDetailCinemaReducer';
import { FilmDetailReducer } from './Reducers/FilmDetailReducer';
import { FilmListReducer } from './Reducers/FilmListReducer';
import { LoadingReducer } from './Reducers/loadingReducer/LoadingReducer';
import { InfoUserReducer } from './Reducers/nguoiDungReducer/InfoUserReducer';
import { LoginReducer } from './Reducers/nguoiDungReducer/LoginReducer';
import { sucessReducer } from './Reducers/sucessReducer/sucessReducer';

const rootReducer = combineReducers({
    // big states
    BannerCarouselReducer:BannerCarouselReducer,
    FilmListReducer:FilmListReducer,
    FilmDetailReducer:FilmDetailReducer,
    CinemaReducer:CinemaReducer,
    FilmDetailCinemaReducer:FilmDetailCinemaReducer,
    LoginReducer:LoginReducer,
    BookTicketReducer:BookTicketReducer,
    LoadingReducer:LoadingReducer,
    sucessReducer:sucessReducer,
    InfoUserReducer:InfoUserReducer,
    AdminReducer:AdminReducer,
});

export const store = createStore(rootReducer,applyMiddleware(thunk));