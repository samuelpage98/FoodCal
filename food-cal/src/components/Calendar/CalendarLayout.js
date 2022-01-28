import { Grid } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MealCard from '../MealCard'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function CalendarLayout(props) {


    const calItemWidth = 1.7;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let breakfast = [];
    let lunch = [];
    let dinner = [];


    //////////////// ONLY FOR TESTING PURPOSES //////////////
    let exampleMealData = {
        'mealId': { S: 'mealId' },
        'mealName': { S: 'mealName' },
        'calories': { N: '300' },
        'recipe': {
            'M': {
                'ingredients': { L: [{ S: 'egg' }, { S: 'rice' }] },
                'measurements': { L: [{ S: '1' }, { S: '200g' }] }
            },
        },
        'imageURL': { S: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        'inMyMeal': { BOOL: false },
        'method': { S: 'method' },
        'description': { S: 'description' },
        'isVegan': { BOOL: true },
        'isVegetarian': { BOOL: true },
        'isGlutenFree': { BOOL: true },
        'isPescatarian': { BOOL: false }

    }
    breakfast = new Array(7).fill(exampleMealData);
    lunch = new Array(7).fill(exampleMealData)
    dinner = new Array(7).fill(exampleMealData)
    //////////////////////////////////////////////////////////


    //Iterate over breakfasts from props and GET meal data then push to breakfast


    //Iterate over lunches from props and GET meal data then push to lunch

    //Iterate over dinners from props and GET meal data then push to dinner


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
                {breakfast.map(el => {
                    return (
                        <Grid item xs={calItemWidth}>
                            <MealCard mealName={el.mealName.S} imageURL={el.imageURL.S} mealDescription={el.description.S} noControls={true} />
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container spacing={2}>
                {lunch.map(el => {
                    return (
                        <Grid item xs={calItemWidth}>
                            <MealCard mealName={el.mealName.S} imageURL={el.imageURL.S} mealDescription={el.description.S} noControls={true} />
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container spacing={2}>
                {dinner.map(el => {
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