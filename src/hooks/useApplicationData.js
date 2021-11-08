import { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";

export default function useApplicationData() {


  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    // interviewer: null,
    interviewers: {}
  });

  const setDay = (day) => {
    setState({...state, day})
  }



  useEffect(()=> {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers")
    ])
    .then((all) => {
      setState(prev => ({...prev, days: all[0].data,appointments: all[1].data,interviewers: all[2].data }));
      console.log(all);
 
    })

  },[])


   function bookInterview(id, interview) {

     const appointment = {...state.appointments[id], interview: {...interview}};
     const appointments = {...state.appointments, [id]: appointment};
    return axios.put(`/api/appointments/${id}`, {interview})
    .then (() => {
       
        setState({...state, appointments,days: updatedDaySpots(state.days, appointments)});
      })
    
  }
  
  function cancelInterview (id) {
    const appointment = {...state.appointments[id], interview: null};
    const appointments = {...state.appointments, [id]: appointment};
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
      
        setState({...state, appointments,days: updatedDaySpots(state.days, appointments)})
      })
  }

  
///// COUNTING REMAINING SPOTS(Appointments) : /////////////

const remainingDaySpots = (toDay, appointments) => {
  let availSpots = 0;
  
  for (const id of toDay.appointments) {
    if (!appointments[id].interview) {
      availSpots++;
    }
  }
  return availSpots;
}

const updatedDaySpots = (toDay, appointments) => {
  const updatedDays = toDay.map((day) => ({
    ...day,
    spots: remainingDaySpots(day, appointments)
  }))
 
  return updatedDays;
}


return { state, setDay, bookInterview, cancelInterview };


}