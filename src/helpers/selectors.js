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


export { getAppointmentsForDay,getInterview};



// export function getAppointmentsForDay (state, day) {
//   const filteredDay = state.days.filter(days => days.name === day)[0]
//   // if days array is empty or a word is entered for days that does not exist in days array
//   if (filteredDay === undefined || state.days.length === 0) { 
//     return [];
//   }
//   const dayAppts = filteredDay.appointments
//   const appts = dayAppts.map((apptNum) => state.appointments[apptNum])
//   return appts; 
// };