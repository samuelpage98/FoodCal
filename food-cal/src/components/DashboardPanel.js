import { Link } from "react-router-dom"
import { Button } from "@mui/material"

function DashboardPanel() {
    return (
        <>
            <h1>Dashboard</h1>
            <Link to="/calendar"><Button variant="contained">Calendar</Button></Link>
            <Link to="/meal-library"><Button variant="contained">Meal Library</Button></Link>
            <Link to="/shopping-list"><Button variant="contained">Shopping List</Button></Link>
        </>
    )
}

export default DashboardPanel