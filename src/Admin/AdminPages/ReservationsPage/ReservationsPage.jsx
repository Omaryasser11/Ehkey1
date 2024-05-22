import React, { useState, useEffect } from "react";
import "./ReservationsPage.scss"; // Import SCSS file for styling
import useGetReservations from "../../../hooks/admin/reservation/useGetReservations";

const ReservationsPage = () => {
  const {
    success,
    error,
    getReservations,
    data: reservations,
    totalPages,
  } = useGetReservations();

  const [currentPage, setCurrentPage] = useState(1);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await getReservations(token, currentPage);
    };

    fetchReservations();
  }, [currentPage]);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="reservations-page mainPage">
      <h1>Reservations</h1>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Reserved Time</th>
            <th>End Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length > 0 &&
            reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.user.name}</td>
                <td>{reservation.user.email}</td>
                <td>{formatDate(reservation.startDateTime)}</td>
                <td>{formatDate(reservation.endDateTime)}</td>
                <td>{reservation.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ReservationsPage;
