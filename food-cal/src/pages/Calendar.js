
import Navbar from '../components/Navbar'

function Calendar() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid red", width: "240px" }}>
        <Navbar />
      </div>
      <div>
        <h1>Calendar</h1>
      </div>
    </div>
  );
}

export default Calendar;
