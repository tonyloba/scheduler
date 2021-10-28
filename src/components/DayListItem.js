import React from "react";
import styles from "./DayListItem.scss";
import classNames from 'classnames';

// DayListItem component definition.
//
//    props.name       String:   Day name (e.g. Caturday).
//    props.spots      String:   Number of appointment timeslots available.
//    props.selected   Boolean:  Whether or not this day is selected in the sidebar.
//    props.setDay     Function: Callback that selects the day when it is clicked.

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  const formatSpots = () => 
    (props.spots ? `${props.spots} spot${props.spots ===1 ? `` : `s`} remaining` : `no spots remaining`)

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}