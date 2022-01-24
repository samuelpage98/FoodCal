import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import DashboardCard from '../components/DashboardCard'
import CheckListWidget from "./checkListWidget"
import MealWidget from "./mealWidget"

function DashboardPanel() {
    return (
        <>
            <h1>Dashboard</h1>
            {/* <Link to="/calendar"><Button variant="contained">Calendar</Button></Link>
            <Link to="/meal-library"><Button variant="contained">Meal Library</Button></Link>
            <Link to="/shopping-list"><Button variant="contained">Shopping List</Button></Link> */}
            <DashboardCard width={1530} height={200} />
            <div style={{ display: "flex" }}>
                <CheckListWidget/>
                <MealWidget/>
                <DashboardCard width={500} height={500} />
            </div>
        </>
    )
}

export default DashboardPanel