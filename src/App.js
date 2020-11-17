import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import VolunteerPage from './Component/VolunteerPage/VolunteerPage';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Component/Register/Register';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import VolunteerInformation from './Component/VolunteerInformation/VolunteerInformation';

export const UserContext = createContext()

function App() {
const [loggedInUser,setLoggedInUser] = useState({})
console.log(loggedInUser)

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
              <Home></Home>
          </Route>
          <Route path ='/login'>
              <Login></Login>
          </Route>
          <PrivateRoute path ='/register/:title'>
              <Register></Register>
          </PrivateRoute>
          <Route path ='/event'>
            <VolunteerInformation></VolunteerInformation>
          </Route>
          <Route path ='/'>
                <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App;
