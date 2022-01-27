import { Button } from "@mui/material"
import AddMealForm from './AddMealForm'
import './mealLibraryPanel.css'
import MealsCardPanel from "./MealsCardPanel"
import MyMealsCardPanel from "./MyMealsCardPanel"
import { useState } from "react";

import apiURL from '../API_URL';

function MealLibraryPanel() {
    const [refresh, setRefresh] = useState(true)

    const removeHandler = async (mealData) => {
        setRefresh(!refresh)
        const updatedMealData = JSON.parse(JSON.stringify(mealData));
        updatedMealData.inMyMeal.BOOL = false;

        let response = await fetch(apiURL + 'my-meals', {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedMealData)
        });
        let data = await response.json()
        console.log(await data)
    }

    const addHandler = async (mealData) => {
        setRefresh(!refresh)
        const updatedMealData = JSON.parse(JSON.stringify(mealData));
        updatedMealData.inMyMeal.BOOL = true;

        let response = await fetch(apiURL + 'my-meals', {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedMealData)
        });
        let data = await response.json()
        console.log(await data)
    }

    return (
        <>
            <div className="mealLibraryHeader">
                <h1>Meal Library</h1>
                <AddMealForm />
            </div>
            <div className="mealsDisplayWrapper">
                <div className="myMealsDisplay">
                    <h3>My Meals</h3>
                    <MyMealsCardPanel removeHandler={removeHandler} addHandler={addHandler} />
                </div>
                <div className="mealsDisplay">
                    <h3>Meals Library</h3>
                    <div className="mealsContainer">
                        <MealsCardPanel removeHandler={removeHandler} addHandler={addHandler} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MealLibraryPanel