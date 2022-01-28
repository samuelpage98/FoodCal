import './dashboardGreeting.css'

function DashboardGreeting({ name }) {
    return (
        <div className="dashboardWidget dashboardGreeting">
            <h1>Welcome {name}</h1>
        </div>
    )
}

export default DashboardGreeting