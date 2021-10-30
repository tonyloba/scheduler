export function getAppointmentsForDay (state, day) {  
  const daySelected = state.days.filter(d => d.name === day);
  const appointments = daySelected ? daySelected.appointments : [];

  return appointments ? appointments.map(apptNum => state.appointments[apptNum]) : [];

};