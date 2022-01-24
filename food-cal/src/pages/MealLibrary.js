import Navbar from '../components/Navbar'

function MealLibrary() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid red", width: "240px" }}>
        <Navbar />
      </div>
      <div>
        <h1>Meal Library</h1>
      </div>
    </div>
  );
}

export default MealLibrary;
