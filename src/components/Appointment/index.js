import React from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Error from "./Error";
import Status from "./Status";
import Confirm from "./Confirm";




export default function Appointment(props) {
 
  
  return(
    <article className="appointment">
    <Header time={props.time}></Header>
    {props.interview  ? <Show student="Lydia Miller-Jones"/> : <Empty />}
    
    
    </article>
    

  )
}