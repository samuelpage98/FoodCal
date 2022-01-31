/* eslint-disable react-hooks/exhaustive-deps */
import CalendarLayout from "./CalendarLayout"
import { useEffect, useState } from "react";
import apiURL from "../../API_URL";


function CalendarPanel() {

    const [calendarData, setCalendarData] = useState()
    const [sortedBreakfast, setSortedBreakfast] = useState([]);
    const [sortedLunch, setSortedLunch] = useState([]);
    const [sortedDinner, setSortedDinner] = useState([]);

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
        setCalendarData(await data)
    }, [])

    useEffect(() => {
        if (calendarData) {
            let breakfastArray = [];
            let lunchArray = [];
            let dinnerArray = [];
            for (let i = 0; i < 7; i++) {
                let dayMeals = calendarData.days.L[i].L;
                breakfastArray.push(dayMeals[0].S);
                lunchArray.push(dayMeals[1].S)
                dinnerArray.push(dayMeals[2].S)

            }
            setSortedBreakfast(breakfastArray);
            setSortedLunch(lunchArray);
            setSortedDinner(dinnerArray);
        }
    }, [calendarData])

    return (
        <>
            <h1>Calendar</h1>
            <CalendarLayout breakfast={sortedBreakfast} lunch={sortedLunch} dinner={sortedDinner} />
        </>
    )
}

export default CalendarPanel
