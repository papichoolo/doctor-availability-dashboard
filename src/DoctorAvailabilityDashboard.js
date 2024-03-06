// DoctorAvailabilityDashboard.js
import React from 'react';
import DoctorList from './DoctorList';
import AppointmentSchedule from './AppointmentSchedule';

const DoctorAvailabilityDashboard = () => {
  // Mocked data for demonstration
  const doctors = [
    { id: 1, name: 'Dr. John Doe' },
    { id: 2, name: 'Dr. Jane Smith' },
    // Add more doctors as needed
  ];

  return (
    <div>
      <h1>Doctor Availability Dashboard</h1>
      <DoctorList doctors={doctors} />
      <AppointmentSchedule />
    </div>
  );
};

export default DoctorAvailabilityDashboard;
