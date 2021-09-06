
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
import Admin from './page/admin/Admin';
import Bookingsucess from './component/sucess/Bookingsucess';
import InfoUser from './page/infoUser/InfoUser';
import { InfoTemp } from './template/userTemplate/InfoUserTemp';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading/>
      <Bookingsucess/>
      <Switch>
        <HomeTemp path="/" exact Component={HomePage} />
        <HomeTemp path="/detail/:id" exact Component={FilmDetail} />
        <UserTemp path="/login" exact Component={Login} />
        <UserTemp path="/register" exact Component={Register}/>
        <InfoTemp path="/info" exact Component={InfoUser}/>
        <BookingTemp path="/booking/:id" exact Component={BookTicket}/>
        <AdminTemp path="/admin" exact Component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
