import React, { useState } from "react";
import AppointmentBooking from "../Booking/AppointmentBooking";
import useGetUserSessions from "../../hooks/sessions/useGetUserSessions";
import { useEffect } from "react";
import formatDate from "../../services/formatDate";
import "./MySession.scss"
const MySession = () => {
  const [showOrders, setShowOrders] = useState(false);
  const { getUserSessions, sessions } = useGetUserSessions();
  const [selectedId, setSelectedId] = useState(0);
  const toggleShowOrders = (id) => {
    setSelectedId(id);
    setShowOrders(!showOrders);
  };
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    getUserSessions(token);
  }, []);

  const renderContent = () => {
    if (showOrders) {
      return <AppointmentBooking id={selectedId} onClose={toggleShowOrders} />;
    } else {
      return (
        <div className="my-session col-12">
          <h2>My Session</h2>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Session ID</th>
                <th className="dateTi">Start Time</th>
                <th className="dateTi">End Time</th>
                <th>Status</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {sessions &&
                sessions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{formatDate(transaction.startDateTime)}</td>
                    <td>{formatDate(transaction.endDateTime)}</td>
                    <td>{transaction.status}</td>
                    <td>
                      {transaction.status === "Scheduled" && (
                        <button className="btnT"
                          onClick={() => toggleShowOrders(transaction.id)}
                        >
                          Change Time
                        </button>
                      )}
                      {transaction.status !== "Scheduled" && (
                        <p>Change Not Vaild </p>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return renderContent();
};

export default MySession;
