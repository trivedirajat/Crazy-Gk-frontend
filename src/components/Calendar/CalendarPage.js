import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  const [value, onChange] = useState();
  return (
    <div className="calendar-area">
      <div className="text-center">
        <h4 className="inner-head">Search Date Wise</h4>
      </div>
      <Calendar onChange={onChange} value={value} />
      <div className="text-center mt-3">
        <Button variant="secondary">Cancel</Button>{" "}
        <Button variant="success">
          <i className="fa fa-check" /> Set date
        </Button>{" "}
      </div>
    </div>
  );
}

export default CalendarPage;
