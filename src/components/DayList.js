import React from "react";
import DayListItem from "./DayListItem";
import styles from "./DayListItem.scss";


export default function Daylist(props){

const renderedItems = props.days.map((day,index) => {
return (
  <DayListItem
  key = {index} 
  name = {day.name}
  spots = {day.spots} 
  selected = {props.day === day.name }
  setDay = {props.setDay} 
  />
)
})

return(
 <ul>{renderedItems}</ul>
)

}


