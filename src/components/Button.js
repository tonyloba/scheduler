import React from "react";
import classNames from "classnames";

import "components/Button.scss";

// Show component definition.
//
//    props.confirm    Boolean:  Sets a positive style.
//    props.danger     Boolean:  Sets a negative style.
//    props.disabled   Boolean:  Sets a disabled style.
//    props.onClick    Function: Button click callback.


export default function Button(props) {
   //let buttonClass = "button";
   
   // if (props.confirm) {
   //   buttonClass += "button--confirm";
   // }
   // if (props.danger) {
   //   buttonClass += "button--danger";
   // }
/// after refactoring :
const buttonClass = classNames("button", {
   "button--confirm": props.confirm,
   "button--danger": props.danger
 });   

   return (<button 
   className={buttonClass}
   onClick={props.onClick}
   disabled={props.disabled}
   
      >
   {props.children}
   </button>
   );
 }


