import React from "react";
import styles from "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";


// InterviewerList component definition.
//
// props.interviewers   Array:    List of available interviewers.
// props.interviewer    Number:   Currently selected interviewer ID
// props.setInterviewer Function: Callback to Form for setting the
// interviewer for an appointment.

export default function InterviewerList(props) {

const renderInterviewers = props.interviewers.map((interviewer) => {
return (
      <InterviewerListItem 
        key = {interviewer.id} //or index if it was passed  as 2nd parameter as index
        name = {interviewer.name} 
        avatar = {interviewer.avatar}        
        selected = {interviewer.id === props.value} // or selected = {interviewer.id === props.interviewer}  (from applcation.js)
        //setInterviewer = {() => props.setInterviewer(interviewer.id)} // (from applcation.js)
        onChange = {(event)=> props.onChange(interviewer.id)}
      />
  )
})

  return(
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{renderInterviewers}</ul>
    </section>
  )
}