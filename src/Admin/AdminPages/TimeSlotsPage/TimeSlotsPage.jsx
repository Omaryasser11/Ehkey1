import React, { useEffect, useState } from "react";
import "./TimeSlotPage.scss";
import useGetTimeSlots from "../../../hooks/admin/time-slots/useGetTimeSlots";
import convertTo12HourFormat from "../../../services/convertTo12HourFormat";
import useRemoveTimeSlot from "../../../hooks/admin/time-slots/useRemoveTimeSlot";
import Pagination from "../../CompentsAdmin/Pagination/Pagination";
import useAddTimeSlot from "../../../hooks/admin/time-slots/useAddTimeSlot";
import useUpdateTimeSlotStatus from "../../../hooks/admin/time-slots/useUpdateTimeSlotStatus";
import Swal from 'sweetalert2';

const TimeSlotPage = () => {
  const { getTimeSlots, slots: fetchedSlots, totalPages } = useGetTimeSlots();
  const { addTimeSlot, success: addSuccess } = useAddTimeSlot();
  const { removeTimeSlot, success: removeSuccess, error: removeError } = useRemoveTimeSlot();

  const {
    activateTimeSlot,
    deactivateTimeSlot,
    success: updateSuccess,
  } = useUpdateTimeSlotStatus();

  const [currentPage, setCurrentPage] = useState(1);
  const [slots, setSlots] = useState([]);
  const [showAddTimeSlotPage, setShowAddTimeSlotPage] = useState(false);

  const token = localStorage.getItem("authToken");

  const [formData, setFormData] = useState({
    day: "",
    from: "",
    to: "",
    duration: "",
    timeZone: "UTC",
    isActive: true,
  });

  useEffect(() => {
    setSlots(fetchedSlots);
  }, [fetchedSlots]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTimeSlots({ timezone: "UTC" }, token, currentPage);
        setSlots(data);
      } catch (error) {
        console.error('Error fetching time slots:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to fetch time slots. Please try again later.',
        });
      }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTimeSlot(formData, token);
      setFormData({
        day: "",
        from: "",
        to: "",
        duration: "",
        timeZone: "UTC",
        isActive: true,
      });
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Time slot added successfully!',
      });
    } catch (error) {
      console.error('Error adding time slot:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to add time slot. Please try again later.',
      });
    }
  };

  const handleRemoveTimeSlot = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removeTimeSlot(token, id, (deletedId) => {
            setSlots((prevSlots) => prevSlots.filter(slot => slot.id !== deletedId));
          });
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The time slot has been deleted.',
          });
        } catch (error) {
          console.error('Error removing time slot:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: removeError || 'Failed to delete time slot. Please try again later.',
          });
        }
      }
    });
  };
  const handleActivateTimeSlot = async (id) => {
    try {
      await activateTimeSlot(token, id);
      const updatedSlots = slots.map(slot => {
        if (slot.id === id) {
          return { ...slot, isActive: true };
        }
        return slot;
      });
      setSlots(updatedSlots);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Time slot activated successfully!',
      });
    } catch (error) {
      console.error('Error activating time slot:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to activate time slot. Please try again later.',
      });
    }
  };
  
  const handleDeactivateTimeSlot = async (id) => {
    try {
      await deactivateTimeSlot(token, id);
      // Update slots after deactivation
      const updatedSlots = slots.map(slot => {
        if (slot.id === id) {
          return { ...slot, isActive: false };
        }
        return slot;
      });
      setSlots(updatedSlots);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Time slot deactivated successfully!',
      });
    } catch (error) {
      console.error('Error deactivating time slot:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to deactivate time slot. Please try again later.',
      });
    }
  };
  
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="time-slot-page mainPage col-12">
      <h2>Time Slot Management</h2>

      {showAddTimeSlotPage ? (
        <div className="time-slot-form">
          <h4>Add New Time Slot</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="day"
              value={formData.day}
              onChange={handleInputChange}
              placeholder="Day (e.g., Sunday)"
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
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              placeholder="Duration (e.g., 01:00:00)"
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
          <button onClick={() => setShowAddTimeSlotPage(false)} className="btn">
            Available Time Slots
          </button>
        </div>
      ) : (
        <div className="time-slot-list">
          {slots && slots.length > 0 ? (
            slots.map((slot) => (
              <div className="time-slot" key={slot.id}>
                <p>Day: {slot.day}</p>
                <p>From: {convertTo12HourFormat(slot.from)}</p>
                <p>To: {convertTo12HourFormat(slot.to)}</p>
                <p>Duration: {slot.duration}</p>
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
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <div className="col-12 flex">
            <button onClick={() => setShowAddTimeSlotPage(true)} className="btn">
              Add New Time Slot
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlotPage;
