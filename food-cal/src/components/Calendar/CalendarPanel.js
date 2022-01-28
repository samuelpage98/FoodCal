import CalendarLayout from "./CalendarLayout"

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
