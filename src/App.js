import logo from './logo.svg';
// import './App.css';
import HeaderComponent from './component/Header/HeaderComponent';
import {Switch,Route} from 'react-router-dom';
import Passenger from './views/Passenger';
import Vehicle from './views/Vehicle';
import Bookings from './views/Bookings';
import BookingInfo from './views/BookingInfo';
import SaveVehicle from './views/SaveVehicle';

function App() {
  return (
    <div className="App">
     
     <Switch>
       <Route exact path="/" component={Passenger}/>
       <Route exact path="/vehicle" component={Vehicle} />
       <Route exact path="/booking" component={Bookings} />
       <Route exact path="/savevehicle" component={SaveVehicle} />
       <Route exact path="/bookinginfo/:info" component={BookingInfo} />
     </Switch>
    </div>
  );
}

export default App;
