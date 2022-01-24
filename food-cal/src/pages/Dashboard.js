import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'

function Dashboard() {
  return (

    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid red", width: "240px" }}>
        <Navbar />
      </div>
      <div>
        <h1>Dashboard</h1>
        <Link to="/calendar"><Button variant="contained">Calendar</Button></Link>
        <Link to="/meal-library"><Button variant="contained">Meal Library</Button></Link>
        <Link to="/shopping-list"><Button variant="contained">Shopping List</Button></Link>
      </div>
    </div>


  );
}

export default Dashboard;

