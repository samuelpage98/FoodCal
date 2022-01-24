import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import DashboardCard from '../components/DashboardCard'
import DashboardGreeting from "./DashboardGreeting"
import CheckListWidget from "./checkListWidget"
import MealWidget from "./mealWidget"


function DashboardPanel() {
    return (
        <>
            <h1>Dashboard</h1>
            <DashboardGreeting name="Samgar" />
            <div style={{ display: "flex" }}>
                <CheckListWidget/>
                <MealWidget/>
                <DashboardCard width={500} height={500} />
            </div>
        </>
    )
}

export default DashboardPanel