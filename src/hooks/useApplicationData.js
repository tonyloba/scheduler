import { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";

export default function useApplicationData() {


  // const [day,setDay] = useState('Monday');
  // const [days, setDays] = useState([]);
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

  //const setDays = (days) => {
    //setState({...state, days})
   // setState(prev => ({ ...prev, days }));
  //}
 

  useEffect(()=> {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers")
    ])
    .then((all) => {
      setState(prev => ({...prev, days: all[0].data,appointments: all[1].data,interviewers: all[2].data }));
      console.log(all);
    //.then(response =>{
      // setDays([...response.data])
     // console.log(response.data);
    })

  },[])



   function bookInterview(id, interview) {

     const appointment = {...state.appointments[id], interview: {...interview}};
     const appointments = {...state.appointments, [id]: appointment};
    return axios.put(`/api/appointments/${id}`, {interview})
    .then (() => {
        setState({...state, appointments});
      })
    
  }
  
  function cancelInterview (id) {
    const appointment = {...state.appointments[id], interview: null};
    const appointments = {...state.appointments, [id]: appointment};
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setState({...state, appointments})
      })
  }

  return { state, setDay, bookInterview, cancelInterview };

}