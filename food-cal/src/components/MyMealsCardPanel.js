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
                    return <MealCard deleteHandler={props.deleteHandler} removeHandler={props.removeHandler} addHandler={props.addHandler} mealData={el} inMyMeal={el.inMyMeal.BOOL} index={props.mealData.indexOf(el)} instructionButtonHandler={instructionButtonHandler} imageURL={el.imageURL.S} mealName={el.mealName.S} mealDescription={el.description.S} />
                }
            })}
            <MealInstructions deleteHandler={props.deleteHandler} mealCardIndex={props.mealCardIndex} open={open} handleClose={handleClose} mealData={props.mealData} />
        </>
    )
}

export default MealsCardPanel