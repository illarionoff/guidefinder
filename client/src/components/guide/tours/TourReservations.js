import React from "react";

export default function TourReservations({ reservs }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {reservs.map(reservation => {
          let date = new Date(reservation.selectedDate);
          let fullDate =
            date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate();

          let today = new Date();

          if (today > date) {
            return (
              <tr key={reservation._id}>
                <td>
                  <p>{fullDate}</p>
                </td>
                <td>
                  <p>{reservation.user}</p>
                </td>
                <td>
                  <p>Completed</p>
                </td>
              </tr>
            );
          } else {
            return (
              <tr key={reservation._id}>
                <td>
                  <h3>{fullDate}</h3>
                </td>
                <td>
                  <h3>{reservation.user}</h3>
                </td>
                <td>
                  <h3>Upcoming</h3>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}
