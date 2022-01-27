import { useEffect, useState } from "react";
import * as React from 'react';
import MealCard from "./mealCard";
import MealInstructions from "./MealInstructions";

const apiURL = ' https://tpua2ywmzj.execute-api.us-east-1.amazonaws.com/';

function MealsCardPanel() {
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
        console.log(await data)
    }, [])
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const instructionButtonHandler = (index) => {
        setOpen(true);
        setMealCardIndex(index)
    }

    return (
        <>
            {mealData.map(el => {
                if (!el.inMyMeal.BOOL) {
                    return <MealCard index={mealData.indexOf(el)} instructionButtonHandler={instructionButtonHandler} setMealCardIndex={setMealCardIndex} imageURL={el.imageURL.S} mealName={el.mealName.S} mealDescription="This is the meal description, to be added to db later or maybe not" />
                }
            })}
            <MealInstructions mealCardIndex={mealCardIndex} open={open} handleClose={handleClose} mealData={mealData} />

        </>
    )

}

export default MealsCardPanel