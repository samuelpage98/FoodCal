import CalendarLayout from "./CalendarLayout"
import { useEffect } from "react";
import apiURL from "../../API_URL";

//GET MEALS FOR CALENDAR INFORMATION

const calendarData = {
    breakfast: [],
    lunch: [],
    dinner: []
}





function CalendarPanel() {
    return (
        <>
            <h1>Calendar</h1>
            <CalendarLayout calendarData={calendarData} />
        </>
    )
}

export default CalendarPanel
