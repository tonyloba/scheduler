import React, { useState } from "react";
import InterviewerList from "../InterviewerList";
import Button          from "../Button";


//EDIT STORY:
//    props.student        String
//    props.interviewer    String(Number))   Database ID of the interviewer.
//    props.interviewers   Array:    List of interviewers available for the timeslot.
//    props.onSave         Function: Save button callback.
//    props.onCancel       Function: Cancel button callback.

// Create story
// props.interviewers   Array:List of interviewers available for the timeslot.
//    setStudent:           Function
//    setInterviewer:       Function


export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = () => {
    setName("")
    setInterviewer(null)
  }

  const cancel = () => {
    reset()
    props.onCancel()
  }


  const validate =() => {
    if (name === "") {
    setError("Student name is empty");
    return;
      }

    if (interviewer === null) {
        setError("Interviewer is not selected");
        return;
      }
      setError("");
      props.onSave(name, interviewer);
    }

    


  return (
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <label htmlFor="name">Student Name</label>
        <input
          className="appointment__create-input text--semi-bold"
          name={name}
          value = {name}
          onChange = {event => setName(event.target.value)}
          type="text"
          placeholder="Enter Student Name"
          data-testid="student-name-input"
        />
      </form>
      
      <section className="appointment__validation">{error}</section>

      <InterviewerList 
       interviewers = {props.interviewers}
       value = {interviewer}
       onChange = {setInterviewer}
      />
    </section>

    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick = {cancel}>Cancel</Button> 
        <Button confirm onClick ={validate} >Save</Button>

      </section>
    </section>
  </main>
  
  )
}