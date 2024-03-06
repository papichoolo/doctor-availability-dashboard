// DoctorList.js
import React from 'react';

const DoctorList = ({ doctors }) => {
  return (
    <div>
      <h2>Doctors</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
