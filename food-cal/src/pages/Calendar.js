import PageLayout from '../layouts/PageLayout';
import CalendarPanel from '../components/CalendarPanel';

function Calendar() {
  return (
    <PageLayout panel={(<CalendarPanel />)} />
  );
}

export default Calendar;
