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




export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    }

  console.log("inter;",props.interview);
  
  
  return(
    <article className="appointment">
    <Header time={props.time} />
    
    {/* render component depending on mode status:  */}
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}

      />
)}
    {mode === CREATE && (
        <Form 
        name={""}
        // interviewer={}
        
        interviewers= {props.interviewers} //  {[]}
        onSave = {save}      
        onCancel={back}
        />
      )}
      {mode === SAVING && <Status message="SAVING" />}



    </article>
    

  )
}



// Set up the mode state and transition handling hook.
  // Possible mode transitions:
  //    EMPTY -> CREATE -> SAVING -> SHOW | ERROR_SAVE -> EMPTY
  //    SHOW  -> EDIT   -> SAVING -> SHOW | ERROR_SAVE -> SHOW
  //    SHOW  -> CONFIRM_DELETE -> DELETING -> EMPTY | ERROR_DELETE -> SHOW