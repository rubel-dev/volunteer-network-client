import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App'; 
import EventTask from '../EventTask/EventTask';
 

const VolunteerInformation = () => {
     
    const [volunteerIn,setVolunteerIn] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(()=>{
        fetch('http://localhost:5000/volunteers')
        .then(res => res.json())
        .then(result =>setVolunteerIn(result))
    },[])
    return (
        <div>
           {
                volunteerIn.map(Info=><EventTask event = {Info}></EventTask>) 
           }
        </div>
    );
};

export default VolunteerInformation;