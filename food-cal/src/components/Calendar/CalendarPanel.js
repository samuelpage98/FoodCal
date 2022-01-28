/* eslint-disable react-hooks/exhaustive-deps */
import CalendarLayout from "./CalendarLayout"
import { useEffect, useState } from "react";
import apiURL from "../../API_URL";


function CalendarPanel() {

    const calendarDataSorted = {
        breakfast: [],
        lunch: [],
        dinner: []
    }

    const [calendarData, setCalendarData] = useState({})

    //GET MEALS FOR CALENDAR INFORMATION

    useEffect(async () => {
        let response = await fetch(apiURL + `mealSchedule?userId=One`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        let data = await response.json()
        console.log(await data)
        setCalendarData(data)
    }, [])

    useEffect(() => {
        console.log(calendarData)
        if (calendarData !== {}) {
            for (let i = 0; i < 7; i++) {
                let dayMeals = calendarData.days.L[i];
                calendarDataSorted.breakfast.push(dayMeals[0].S);
                calendarDataSorted.lunch.push(dayMeals[1].S)
                calendarDataSorted.dinner.push(dayMeals[2].S)
            }
        }
    }, [calendarData])


    return (
        <>
            <h1>Calendar</h1>
            <CalendarLayout breakfast={calendarDataSorted.breakfast} lunch={calendarDataSorted.lunch} dinner={calendarDataSorted.dinner} />
        </>
    )
}

export default CalendarPanel
