import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Register.css'
import {UserContext} from '../../App'
 
 
 const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { title } = useParams()                                                                                                    
  
    console.log(title)
    const [dateChange,setDateChange] = useState()
    const [volunteerDescription,setVolunteerDescription] = useState()
     console.log(dateChange)

    const handleDate = (event)=>{
         const date = event.target.value;
         setDateChange(date)
         
    }
    const handleDescription = (event)=>{
         const description = event.target.value;
          setVolunteerDescription(description)
    }
    const handleSubmit =()=>{
        const date = dateChange;
        const description = volunteerDescription;
        const newVolunteer ={...loggedInUser,title,date,description}
        fetch('http://localhost:5000/addVolunteer',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body : JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
   
     
    return (
      <div className="from">
          <h2 style={{textAlign:"center"}}>Register as a Volunteer</h2>
          <br/>
          <form onSubmit={handleSubmit}>
              <input type="text" name ="name" value={loggedInUser.name} placeholder="Full Name"/>
              <br/>
              <input type="email" name ="email" value ={loggedInUser.email} placeholder="Username or Eamil"/>
              <br/>
               <input type="date"onChange={handleDate}  format="yyyy/MM/dd" name="date"/>
               <br/>
               <input type="text" name ="name" onBlur={handleDescription} placeholder="Description"/>
               <br/>
              <input type="text" value={title} placeholder="Organize books at the library"/>
              <br/>
              <input type="submit"  style={{backgroundColor:"#3F90FC"}} value="Registration"/>
          </form>
      </div>
    );
 };
 
 export default Register;