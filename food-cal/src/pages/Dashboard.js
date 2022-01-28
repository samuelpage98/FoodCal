import * as React from 'react';
import PageLayout from '../layouts/PageLayout';
import DashboardPanel from '../components/Dashboard/DashboardPanel';

function Dashboard() {
  return (
    <PageLayout panel={(<DashboardPanel />)} />
  );
}

export default Dashboard;

