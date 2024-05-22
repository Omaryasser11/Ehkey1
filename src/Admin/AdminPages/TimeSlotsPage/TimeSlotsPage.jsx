import React, { useEffect, useState } from "react";
import "./TimeSlotPage.scss"; // Import SCSS file for styling
import useGetTimeSlots from "../../../hooks/admin/time-slots/useGetTimeSlots";
import convertTo12HourFormat from "../../../services/convertTo12HourFormat";
import useRemoveTimeSlot from "../../../hooks/admin/time-slots/useRemoveTimeSlot";
import Pagination from "../../CompentsAdmin/Pagination/Pagination";
import useAddTimeSlot from "../../../hooks/admin/time-slots/useAddTimeSlot";
import useUpdateTimeSlotStatus from "../../../hooks/admin/time-slots/useUpdateTimeSlotStatus";

const TimeSlotPage = () => {
  const { getTimeSlots, slots: fetchedSlots, totalPages } = useGetTimeSlots();
  const { addTimeSlot, success: addSuccess } = useAddTimeSlot();
  const { removeTimeSlot, success: removeSuccess } = useRemoveTimeSlot();
  const {
    activateTimeSlot,
    deactivateTimeSlot,
    success: updateSuccess,
  } = useUpdateTimeSlotStatus();
  const [currentPage, setCurrentPage] = useState(1);
  const [slots, setSlots] = useState([]);
  const token = localStorage.getItem("authToken");

  const [formData, setFormData] = useState({
    day: "",
    to: "",
    from: "",
    timeZone: "UTC",
    isActive: true,
  });
  useEffect(() => {
    setSlots(fetchedSlots);
  }, [fetchedSlots]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTimeSlots({ timezone: "UTC" }, token, currentPage);
      console.log("Fetched Slots:", data);
      setSlots(data);
    };

    fetchData();
  }, [currentPage, addSuccess, updateSuccess, removeSuccess]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTimeSlot(formData, token);
  };

  const handleRemoveTimeSlot = async (id) => {
    await removeTimeSlot(token, id);
    const data = await getTimeSlots({ timezone: "UTC" }, token, currentPage);
    console.log("Slots after removal:", data);
    setSlots(data);
  };

  const handleActivateTimeSlot = async (id) => {
    await activateTimeSlot(token, id);
    const data = await getTimeSlots({ timezone: "UTC" }, token, currentPage);
    console.log("Slots after activation:", data);
    setSlots(data);
  };

  const handleDeactivateTimeSlot = async (id) => {
    await deactivateTimeSlot(token, id);
    const data = await getTimeSlots({ timezone: "UTC" }, token, currentPage);
    console.log("Slots after deactivation:", data);
    setSlots(data);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="time-slot-page mainPage col-12">
      <h1>Time Slot Management</h1>
      <div className="time-slot-form">
        <h2>Add New Time Slot</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="day"
            value={formData.day}
            onChange={handleInputChange}
            placeholder="Day (e.g., Monday)"
            required
          />
          <input
            type="time"
            name="from"
            value={formData.from}
            onChange={handleInputChange}
            required
          />
          <input
            type="time"
            name="to"
            value={formData.to}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="timeZone"
            value={formData.timeZone}
            onChange={handleInputChange}
            required
          />
          <label>
            Available:
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Add Time Slot</button>
        </form>
      </div>
      <div className="time-slot-list">
        {slots && slots.length > 0 ? (
          slots.map((slot) => (
            <div className="time-slot" key={slot.id}>
              <p>Day: {slot.day}</p>
              <p>From: {convertTo12HourFormat(slot.from)}</p>
              <p>To: {convertTo12HourFormat(slot.to)}</p>
              <p>Available: {slot.isActive ? "Yes" : "No"}</p>
              <div className="slot-actions">
                <button onClick={() => handleRemoveTimeSlot(slot.id)}>
                  Remove
                </button>
                {slot.isActive ? (
                  <button onClick={() => handleDeactivateTimeSlot(slot.id)}>
                    Deactivate
                  </button>
                ) : (
                  <button onClick={() => handleActivateTimeSlot(slot.id)}>
                    Activate
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No time slots available.</p>
        )}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TimeSlotPage;
