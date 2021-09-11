
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
import AddUser from './page/admin/userManage/AddUser';
import EditFilm from './page/admin/filmManage/EditFilm';



export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <ScrollToTop/>
      <Loading/>
      <Bookingsucess/>
      <Switch>
        {/* home */}
        <HomeTemp path="/" exact Component={HomePage} />
        <HomeTemp path="/detail/:id" exact Component={FilmDetail} />
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
        <AdminTemp path="/showtimeManage" exact Component={ShowtimeManage}/>

        <AdminTemp path="/userManage/addUser" exact Component={AddUser}/>
        <AdminTemp path="/filmManage/addFilm" exact Component={AddUser}/>
        <AdminTemp path="/filmManage/editFilm/:id" exact Component={EditFilm}/>
      </Switch>
    </Router>
  );
}

export default App;
