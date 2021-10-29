import React from "react";
import "./InterviewerListItem.scss";
import classNames from 'classnames';

// Interviewer 

// const interviewer = {
//   id: 1,
//   name: "Sylvia Palmer",
//   avatar: "https://i.imgur.com/LpaY82x.png"
// };

// InterviewerListItem component definition.
//
//    props.name             String:   Interviewer name.
//    props.avatar           String:   Interviewer mug shot.
//    props.selected         Boolean:  Whether or not this interviewer is selected.
//    props.setInterviewer   Function: Callback that selects the interviewer when clicked.

export default function InterviewerListItem(props){
  const interviewerClass = classNames(
    "interviewers__item",{"interviewers__item-image": props.image,"interviewers__item--selected": props.selected});
    

    
  return (
<li className={interviewerClass} onClick= {props.onChange}> 
{/* or props.setInterviewer */}
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && props.name}
</li>

  );
}


// for condition :
// propName={ condition ? something : somethingElse }
// propName={ condition && something }

//multiply props:
// { ...( condition ? { ...setOfProps } : { ...setOfOtherProps })}
// { ...( condition && { ...setOfProps })}