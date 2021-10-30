import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import DayList from "components/DayList";
import "components/Application.scss";
import Appointment from "./Appointment/index";



export default function Application(props) {
  // const [day,setDay] = useState('Monday');
  // const [days, setDays] = useState([]);
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const setDay = (day) => {
    setState({...state, day})
  }
  const setDays = (days) => {
    // setState({...state, days})
    setState(prev => ({ ...prev, days }));
  }


  useEffect(()=> {
    axios.get("api/days")
    .then(response =>{
      setDays([...response.data])
      console.log(response.data);
    })

  },[])

  const schedule = appointments.map((appointment) => {
    
    
    return (
      <Appointment
      key={appointment.id}s
      id={appointment.id}
      time={appointment.time}
      interview={appointment.interview}

      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
  />
        <hr className="sidebar__separator sidebar--centered" />

        <nav className="sidebar__menu">
        <DayList
          days={state.days}
          day={state.day} // or value={day} 
          setDay={day => setDay(day)} // or onChange={setDay}
        />

        </nav>
        <img className="sidebar__lhl sidebar--centered"
              src="images/lhl.png"
              alt="Lighthouse Labs"/>
      </section>

      <section className="schedule">
          {schedule}       
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}






const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
  }
];