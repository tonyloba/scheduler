const getAppointmentsForDay = (state, day) => {  
  const daySelected = state.days.find(d => d.name === day);
  const appointments = daySelected ? daySelected.appointments : [];
  return appointments ? appointments.map(appNum => state.appointments[appNum]) : [];
};

const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }
  const selectInterview = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };
  return selectInterview;
};

const getInterviewersForDay = (state, day) => {
  const daySelected = state.days.find(d => d.name === day);
  const interviewers = daySelected ? daySelected.interviewers : [];
  return interviewers ? interviewers.map(intNum => state.interviewers[intNum]) : [];
};


export { getAppointmentsForDay,getInterview,getInterviewersForDay};




