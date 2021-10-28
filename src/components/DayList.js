import React from "react";
import DayListItem from "./DayListItem";
import styles from "./DayListItem.scss";


export default function Daylist(props)
{

const renderedItems = props.days.map((day,index) => {
return (
  <DayListItem
  key = {index} // or props.id
  name = {day.name}
  spots = {day.spots}
// check if the day that is selected matches the name of the day in the object we are currently processing (props.day from application.js-nav ) : 
  selected = {props.day === day.name }    // or change from props.day to props.value 
  setDay = {props.setDay}  // or setDay={props.onChange}
  />
)
})

return(
 <ul>{renderedItems}</ul>
)

}


/// hardcoded :
{/* <ul>
      <DayListItem 
        key={props.days[0].id}
        name={props.days[0].name} 
        spots={props.days[0].spots} 
        selected={props.days[0].name === props.day}
        setDay={props.setDay}  
      />
      <DayListItem
        key={props.days[1].id} 
        name={props.days[1].name} 
        spots={props.days[1].spots} 
        selected={props.days[1].name === props.day}
        setDay={props.setDay}  
      />
      <DayListItem 
        key={props.days[2].id}
        name={props.days[2].name}
        spots={props.days[2].spots} 
        selected={props.days[2].name === props.day}
        setDay={props.setDay}  
      />      
    </ul> */}