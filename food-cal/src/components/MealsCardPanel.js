import { useEffect, useState } from "react";
import MealCard from "./mealCard";

const apiURL = ' https://tpua2ywmzj.execute-api.us-east-1.amazonaws.com/';

function MealsCardPanel() {
    const [mealData, setMealData] = useState([]);
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

    return (
        <>
            {mealData.map(el => {
                if (!el.inMyMeal.BOOL) {
                    return <MealCard inMyMeal={el.inMyMeal.BOOL} imageURL={el.imageURL.S} mealName={el.mealName.S} mealDescription="This is the meal description, to be added to db later or maybe not" />
                }
            })}

        </>
    )
}

export default MealsCardPanel