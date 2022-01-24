import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CheckList from '../components/shoppingCheckList';
// import Stack from '@mui/material/Stack';

function Dashboard() {
  return (
    <>
      <Link to="/calendar"><Button variant="contained">Calendar</Button></Link>
      <Link to="/meal-library"><Button variant="contained">Meal Library</Button></Link>
      <Link to="/shopping-list"><Button variant="contained">Shopping List</Button></Link>
      <CheckList />
    </>

  );
}

export default Dashboard;

