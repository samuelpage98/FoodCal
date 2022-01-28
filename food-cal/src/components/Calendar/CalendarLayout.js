import { Grid } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MealCard from '../MealCard'
import apiURL from "../../API_URL";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function CalendarLayout(props) {

    const calItemWidth = 1.7;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let breakfastInfo = [];
    let lunchInfo = [];
    let dinnerInfo = [];

    const getMealInformation = async (mealId) => {
        let response = await fetch(apiURL + `meal?mealId=${mealId}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        let data = await response.json()
        return await data
    }


    //Iterate over breakfasts from props and GET meal data then push to breakfast
    for (let breakfastMeal of props.breakfast) {
        if (breakfastMeal !== '') {
            breakfastInfo.push(getMealInformation(breakfastMeal))
        }
    }

    //Iterate over lunches from props and GET meal data then push to lunch
    for (let lunchMeal of props.lunch) {
        if (lunchMeal !== '') {
            lunchInfo.push(getMealInformation(lunchMeal))
        }
    }

    //Iterate over dinners from props and GET meal data then push to dinner
    for (let dinnerMeal of props.dinner) {
        if (dinnerMeal !== '') {
            dinnerInfo.push(getMealInformation(dinnerMeal))
        }
    }


    return (
        <>
            <Grid container spacing={2}>
                {days.map(el => {
                    return (
                        <Grid item xs={calItemWidth}>
                            <Item>{el}</Item>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container spacing={2}>
                {breakfastInfo.map(el => {
                    return (
                        <Grid item xs={calItemWidth}>
                            <MealCard mealName={el.mealName.S} imageURL={el.imageURL.S} mealDescription={el.description.S} noControls={true} />
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container spacing={2}>
                {lunchInfo.map(el => {
                    return (
                        <Grid item xs={calItemWidth}>
                            <MealCard mealName={el.mealName.S} imageURL={el.imageURL.S} mealDescription={el.description.S} noControls={true} />
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container spacing={2}>
                {dinnerInfo.map(el => {
                    return (
                        <Grid item xs={calItemWidth}>
                            <MealCard mealName={el.mealName.S} imageURL={el.imageURL.S} mealDescription={el.description.S} noControls={true} />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default CalendarLayout