const appointments = [];

/**
 * @param {string} clientName 
 * @param {Date} appointmentTime 
 * @param {string} serviceType 
 */
export async function addAppointment(clientName, appointmentTime, serviceType) {
  try {
    if (!clientName || typeof clientName !== "string") {
      throw new Error("Invalid client name.");
    }
    if (!(appointmentTime instanceof Date) || isNaN(appointmentTime.getTime())) {
      throw new Error("Invalid appointment time.");
    }
    if (!serviceType || typeof serviceType !== "string") {
      throw new Error("Invalid service type.");
    }

    await new Promise((resolve) => setTimeout(resolve, 500)); 

    appointments.push({ clientName, appointmentTime, serviceType });
    console.log(`Appointment added: ${clientName}, ${appointmentTime}, ${serviceType}`);
  } catch (error) {
    console.error(`Error adding appointment: ${error.message}`);
  }
}

/**
 * @returns {Array} 
 */
export async function getUpcomingAppointments() {
  try {
    const currentTime = new Date();
    const oneHourLater = new Date(currentTime.getTime() + 60 * 60 * 1000);

    return await new Promise((resolve) => {
      const upcoming = appointments.filter(
        (appt) => appt.appointmentTime > currentTime && appt.appointmentTime <= oneHourLater
      );
      resolve(upcoming);
    });
  } catch (error) {
    console.error(`Error fetching upcoming appointments: ${error.message}`);
    return [];
  }
}

/**
 * Send a reminder for an appointment
 * @param {object} appointment 
 */
export async function sendReminder(appointment) {
  try {
    const timeUntilAppointment = appointment.appointmentTime.getTime() - new Date().getTime();

    if (timeUntilAppointment > 0) {
      setTimeout(() => {
        console.log(
          `Reminder: Your appointment for ${appointment.serviceType} with ${appointment.clientName} is scheduled at ${appointment.appointmentTime}.`
        );
      }, timeUntilAppointment);
    } else {
      console.log(`The appointment time for ${appointment.clientName} has already passed.`);
    }
  } catch (error) {
    console.error(`Error sending reminder: ${error.message}`);
  }
}

export { appointments };