import React from 'react'

export const Adminattendance = () => {
  return (
    <div>Adminattendance</div>
  )
}

// import React, { useState, useEffect } from 'react';

// export const AdminAttendance = () => {
//   // State to store attendance data
//   const [attendance, setAttendance] = useState([]);

//   // Fetch attendance data (you can replace this with an actual API call)
//   useEffect(() => {
//     // Dummy data for attendance
//     const fetchAttendance = () => {
//       const data = [
//         { name: 'John Doe', date: '2024-10-01', status: 'Present' },
//         { name: 'Jane Smith', date: '2024-10-01', status: 'Absent' }
//       ];
//       setAttendance(data);
//     };

//     fetchAttendance();
//   }, []);

//   return (
//     <div>
//       <h2>Admin Attendance</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendance.map((record, index) => (
//             <tr key={index}>
//               <td>{record.name}</td>
//               <td>{record.date}</td>
//               <td>{record.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

