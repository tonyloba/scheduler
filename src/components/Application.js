import React, { Fragment, useState, useEffect } from "react";
import DayList from "components/DayList";
import "components/Application.scss";
import Appointment from "./Appointment/index";
import { getAppointmentsForDay,getInterview,getInterviewersForDay} from "helpers/selectors";

import useApplicationData from "hooks/useApplicationData";

//    Main application component responsible for rendering everything.

export default function Application(props) {

    // Initialize the application state and get callbacks for different operations:
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();



  const interviewersForDay  = getInterviewersForDay(state, state.day);
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    
    return (
      <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
      interviewers={interviewersForDay}
      bookInterview = {bookInterview}
      cancelInterview = {cancelInterview}
      
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
          day={state.day} 
          setDay={day => setDay(day)} 
        />

        </nav>
        <img className="sidebar__lhl sidebar--centered"
              src="images/lhl.png"
              alt="Lighthouse Labs"/>
      </section>

      <section className="schedule">
          {schedule}       
        <Appointment 
        id="last"
        time="5pm" />
      </section>
    </main>
  );
}


