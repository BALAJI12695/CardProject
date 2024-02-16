import React from "react";
import PropTypes from "prop-types"


const userData = [
  {
  name:"Shyam",
  city:"Coimbatore",
  description: "Back End Developer",
  skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"],
  online: false,
  profile: "images/avatar.jpg"
  },
  {
  name:"Ponraj",
  city:"Trichy",
  description: "Full Stack Developer",
  skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"],
  online: false,
  profile: "images/scrat.png"
  },
  {
  name:"Vijay",
  city:"Chennai",
  description: "Manager ",
  skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"],
  online: false,
  profile: "images/avatar.jpg"
  },
  {
  name:"Vignesh",
  city:"Dindugal",
  description: "Engineer ",
  skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"],
  online: true,
  profile: "images/scrat.png"
  },
  {
  name:"Nanthu",
  city:"Madurai",
  description: "Manager ",
  skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"],
  online: true,
  profile: "images/avatar.jpg"
  }
]
const User = (props) => {
  return (
    <>
    <div className="card-container">
      <span className={props.online ? "pro online":"pro offline"}>{props.online ? "ONLINE":"OFFLINE" }</span>
      <img src={props.profile} className="img" alt="" height="200px" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
    <div className="buttons">
    <button className="primary">message</button>
    <button className="primary outline">following</button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>

        {props.skills.map((skill,index)=>(

          <li key={index}>{skill}</li> ))}
       
      </ul>
    </div>
    </div>
    </>
  );
};

export const UserCard = () => {
  return (


    <>
    <User name="Balaji" city="Madurai" description = "Front-end developer" skills ={["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"]} online = {true} profile='images/scrat.png' />

   {userData.map((user,index)=>(
    <User key={index}
      name={user.name}
      city={user.city}
      description={user.description}
      skills ={user.skills}
      online={user.online}
      profile ={user.profile}
    
    />
   ))}
  </>

  )
}

User.PropTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.string.isRequired,

};