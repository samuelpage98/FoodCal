import { useEffect, useState } from "react";
import MealCard from "./mealCard";
import MealInstructions from "./MealInstructions";


function MealsCardPanel(props) {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const instructionButtonHandler = (index) => {
        setOpen(true);
        props.setMealCardIndex(index)
    }

    return (
        <>
            {props.mealData.map(el => {
                if (el.inMyMeal.BOOL) {
                    return <MealCard removeHandler={props.removeHandler} addHandler={props.addHandler} mealData={el} inMyMeal={el.inMyMeal.BOOL} index={props.mealData.indexOf(el)} instructionButtonHandler={instructionButtonHandler} imageURL={el.imageURL.S} mealName={el.mealName.S} mealDescription="This is the meal description, to be added to db later or maybe not" />
                }
            })}
            <MealInstructions mealCardIndex={props.mealCardIndex} open={open} handleClose={handleClose} mealData={props.mealData} />
        </>
    )
}

export default MealsCardPanel