import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage({ onSetDate = () => {}, handleClearDate = () => {} }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCancel = () => {
    // setSelectedDate(new Date());
    handleClearDate();
  };

  const handleSetDate = () => {
    onSetDate(selectedDate);
  };

  return (
    <div className="calendar-area">
      <div className="text-center">
        <h4 className="inner-head">Search Date Wise</h4>
      </div>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <div className="text-center mt-3">
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>{" "}
        <Button variant="success" onClick={handleSetDate}>
          <i className="fa fa-check" /> Set date
        </Button>{" "}
      </div>
    </div>
  );
}

export default CalendarPage;
