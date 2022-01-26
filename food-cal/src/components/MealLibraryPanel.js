import { Button } from "@mui/material"
import AddMealForm from './AddMealForm'
import './mealLibraryPanel.css'

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
                </div>
            </div>
        </>
    )
}

export default MealLibraryPanel