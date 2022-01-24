import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import DashboardCard from '../components/DashboardCard'
import DashboardGreeting from "./DashboardGreeting"

function DashboardPanel() {
    return (
        <>
            <h1>Dashboard</h1>
            <DashboardGreeting name="Steven Hawking" />
            <div style={{ display: "flex" }}>
                <DashboardCard width={500} height={500} />
                <DashboardCard width={500} height={500} />
                <DashboardCard width={500} height={500} />
            </div>
        </>
    )
}

export default DashboardPanel