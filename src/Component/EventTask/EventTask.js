import React from 'react';
import './EventTask.css'
import img from '../../logos/extraVolunteer.png'

const EventTask = (props) => {
     const {date,title,_id} = props.event
      
     const handleDelete =(id)=>{
         console.log(id)
        fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(result =>{
           const element = document.getElementById('main')
           if(result){
               element.style.display="none"
           }
           console.log(element)
        })
     }
    
    return (
       <div className="container">
           
          <div className="card" id ="main" >
          <div className="img">
                <img src={img} alt=""/>
            </div>
            <div className="content">
                <h2>{title}</h2>
                <h4>{date}</h4>
                <p>{_id}</p>
                <button type ="submit" onClick={()=>handleDelete(`${_id}`)} className="btn btn-secondary">Cancel</button>
            </div>
          </div>
         
       </div>
    );
};

export default EventTask;