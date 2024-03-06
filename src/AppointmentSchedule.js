// AppointmentSchedule.js
import React from 'react';

const AppointmentSchedule = () => {
  // Mocked data for demonstration
  const appointments = [
    { time: '9:00 AM', doctor: 'Dr. John Doe', availability: 'Available' },
    { time: '10:00 AM', doctor: 'Dr. Jane Smith', availability: 'Booked' },
    // Add more appointment data as needed
  ];

  return (
    <div>
      <h2>Appointment Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.time}>
              <td>{appointment.time}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentSchedule;
