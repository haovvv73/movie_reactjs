
import React from 'react';
import './assets/scss/style.scss';
import {createBrowserHistory} from 'history';
import { Router, Switch} from 'react-router-dom';
import { HomeTemp } from './template/homeTemplate/HomeTemplate';
import FilmDetail from './page/home/filmDetail/FilmDetail';
import HomePage from './page/home/HomePage';
import Login from './page/login/Login';
import Register from './page/register/Register';
import { UserTemp } from './template/userTemplate/UserTemplate';
import { BookingTemp } from './template/bookingTemplate/BookingTemp';
import BookTicket from './page/booking/BookTicket';
import Loading from './component/loading/Loading';
import { AdminTemp } from './template/adminTemplate/AdminTemplate';
import Bookingsucess from './component/sucess/Bookingsucess';
import InfoUser from './page/infoUser/infoUser';
import { InfoTemp } from './template/userTemplate/InfoUserTemplate';
import ScrollToTop from './component/autoScrollToTop/ScrollToTop';
import Dasboard from './page/admin/Dasboard';
import UserManage from './page/admin/userManage/UserManage';
import FilmManage from './page/admin/filmManage/FilmManage';
import ShowtimeManage from './page/admin/filmManage/ShowtimeManage';
import EditFilm from './page/admin/filmManage/EditFilm';
import AddFilm from './page/admin/filmManage/AddFilm';
import { FilmTemp } from './template/homeTemplate/FilmTemplate';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading/>
      <ScrollToTop/>
      <Bookingsucess/>
      <Switch>
        {/* home */}
        <HomeTemp path="/" exact Component={HomePage} />
        <FilmTemp path="/detail/:id" exact Component={FilmDetail} />
        {/* user */}
        <UserTemp path="/login" exact Component={Login} />
        <UserTemp path="/register" exact Component={Register}/>
        <InfoTemp path="/info" exact Component={InfoUser}/>
        {/* booking */}
        <BookingTemp path="/booking/:id" exact Component={BookTicket}/>
        {/* admin */}
        <AdminTemp path="/admin" exact Component={Dasboard} />
        <AdminTemp path="/userManage" exact Component={UserManage} />
        <AdminTemp path="/filmManage" exact Component={FilmManage} />
        <AdminTemp path="/showtimeManage/:id" exact Component={ShowtimeManage}/>
        <AdminTemp path="/filmManage/addFilm" exact Component={AddFilm}/>
        <AdminTemp path="/filmManage/editFilm/:id" exact Component={EditFilm}/>
      </Switch>
    </Router>
  );
}

export default App;
