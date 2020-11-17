import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from './firbase.config'
import {UserContext }from '../../App'
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    let history = useHistory();
   let location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleLogin =()=>{
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
           
            const {displayName,email} = result.user;
            const user ={name:displayName, email}
            console.log(user)
            setLoggedInUser(user)
            history.replace(from);
            
          }).catch(function(error) {
            console.log(error.message)
          });
    
    }

  
     
    return (
        <div className="login">
            <h2>Login with</h2>
            <input type="text" onClick={handleLogin} placeholder="continue with google"className="search_btn"></input>
        </div>
    );
};

export default Login;