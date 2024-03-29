import React from "react";
import styles from "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";

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
        key = {interviewer.id} 
        name = {interviewer.name} 
        avatar = {interviewer.avatar}        
        selected = {interviewer.id === props.value} 
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};