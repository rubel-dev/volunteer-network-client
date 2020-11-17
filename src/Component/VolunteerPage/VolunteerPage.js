import React from 'react';
import { useHistory } from 'react-router-dom';
import './VolunteerPage.css'

const VolunteerPage = (props) => {
     const {title,img,id,color} = props.data;
     const history = useHistory()
       const handleVolunteer = (title)=>{
            
            history.push(`/register/${title}`)
             
       }
    return (
        <div className="container">
          <div onClick = {()=>handleVolunteer(title)}>
            <div class="img">
                
                <img src={img} width="300" height="200"></img>
                
                    <div class="info" style={{backgroundColor:`${color}`}}>
                        <p>{title}</p>
                    </div>
                </div>
          </div>
       </div>
    );
};

export default VolunteerPage;