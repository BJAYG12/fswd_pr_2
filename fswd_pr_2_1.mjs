import { addAppointment, getUpcomingAppointments, sendReminder, appointments } from './fswd_pr_2_2.mjs';

(async () => {
  await addAppointment("John Doe", new Date(Date.now() + 30 * 60 * 1000), "Consultation"); 
  await addAppointment("Jane Smith", new Date(Date.now() + 90 * 60 * 1000), "Follow-up"); 
  await addAppointment("Alice Brown", new Date(Date.now() + 15 * 60 * 1000), "Consultation"); 

  const upcoming = await getUpcomingAppointments();
  console.log("Upcoming Appointments in the next hour:", upcoming);

  for (const appointment of upcoming) {
    sendReminder(appointment);
  }
})();