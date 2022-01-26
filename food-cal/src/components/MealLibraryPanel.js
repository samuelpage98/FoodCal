import { Button } from "@mui/material"
import AddMealForm from './AddMealForm'
import './mealLibraryPanel.css'
import MealCard from "./mealCard"


function MealLibraryPanel() {
    return (
        <>
            <div className="mealLibraryHeader">
                <h1>Meal Library</h1>
                <AddMealForm />
            </div>
            <div className="mealsDisplayWrapper">
                <div className="myMealsDisplay">
                    <h3>My Meals</h3>
                </div>
                <div className="mealsDisplay">
                    <h3>Meals Library</h3>
                    <MealCard mealName="Jacket Potato" mealDescription="We have here, a wild potato in a north face jacket" imageURL="https://images.pexels.com/photos/5377338/pexels-photo-5377338.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                </div>
            </div>
        </>
    )
}

export default MealLibraryPanel