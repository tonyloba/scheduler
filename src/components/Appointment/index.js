import React from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Error from "./Error";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

//////// SAVE mode //////////////
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(() => {
      transition(ERROR_SAVE, true)
    })
    }

//////// DELETE mode //////////////

  function onDelete() {
    props.cancelInterview(props.id)
    .then(transition(DELETING,true))
    .then(() => transition(EMPTY))
    .catch(() => {
      transition(ERROR_DELETE, true)
    })
  }

  function onConfirm() {
    transition(CONFIRM)
  }

  function onEdit() {
    transition(EDIT)
  }
  
  function onClose() {
    back(SHOW)
  }


  // Set up the mode state and transition handling hook. Possible mode transitions:
  //    EMPTY -> CREATE -> SAVING -> SHOW | ERROR_SAVE -> EMPTY
  //    SHOW  -> EDIT   -> SAVING -> SHOW | ERROR_SAVE -> SHOW
  //    SHOW  -> CONFIRM_DELETE -> DELETING -> EMPTY | ERROR_DELETE -> ////SHOW
  
  return(
    <article className="appointment">
    <Header time={props.time} />    
   
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

    {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete={() => onConfirm()}
        onEdit={() => onEdit()}
      />
)}
    {mode === CREATE && (
        <Form 
        name={""}               
        interviewers= {props.interviewers} //  {[]}
        onSave = {save}      
        onCancel={back}
        />
      )}
    {mode === SAVING && <Status message="SAVING" />}

    {mode === DELETING && <Status message="DELETING" />}

    {mode === CONFIRM && <Confirm message="Are you sure you want to delete?" onCancel={() => back()} 
      onConfirm={() => onDelete()} />}

    {mode === EDIT && (
      <Form
        name={props.interview.student}
        interviewer={props.interview.interviewer.id}
        interviewers={props.interviewers}
        onCancel={() => back()}
        onSave={save}
      />
      )}  

      {mode === ERROR_DELETE && <Error message="Unable to delete appointment" onClose={onClose}/>}
      {mode === ERROR_SAVE && <Error message="Unable to save  appointment" onClose={onClose} />}


    </article>
  )  
}



