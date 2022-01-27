import { Button } from "@mui/material"
import AddMealForm from './AddMealForm'
import './mealLibraryPanel.css'
import MealsCardPanel from "./MealsCardPanel"
import MyMealsCardPanel from "./MyMealsCardPanel"
import { useEffect, useState } from "react";

import apiURL from '../API_URL';

function MealLibraryPanel() {
    const [refresh, setRefresh] = useState(true)
    const [mealData, setMealData] = useState([]);
    const [mealCardIndex, setMealCardIndex] = useState();

    useEffect(async () => {
        let response = await fetch(apiURL + 'meals', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        });
        let data = await response.json()
        setMealData(data);
    }, [refresh])

    const removeHandler = async (mealData) => {
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
        setRefresh(!refresh)
    }

    const addHandler = async (mealData) => {
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
        setRefresh(!refresh)
    }


    const deleteHandler = async (mealData) => {

        let response = await fetch(apiURL + 'meal', {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ "mealId": mealData.mealId.S })
        });
        setRefresh(!refresh)
    }

    return (
        <>
            <div className="mealLibraryHeader">
                <h1>Meal Library</h1>
                <AddMealForm setRefresh={setRefresh} refresh={refresh} />
            </div>
            <div className="mealsDisplayWrapper">
                <div className="myMealsDisplay">
                    <h3>My Meals</h3>
                    <MyMealsCardPanel mealData={mealData} mealCardIndex={mealCardIndex} setMealCardIndex={setMealCardIndex} deleteHandler={deleteHandler} removeHandler={removeHandler} addHandler={addHandler} />
                </div>
                <div className="mealsDisplay">
                    <h3>Meals Library</h3>
                    <div className="mealsContainer">
                        <MealsCardPanel mealData={mealData} mealCardIndex={mealCardIndex} setMealCardIndex={setMealCardIndex} deleteHandler={deleteHandler} removeHandler={removeHandler} addHandler={addHandler} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MealLibraryPanel