import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const apiURL = ' https://tpua2ywmzj.execute-api.us-east-1.amazonaws.com/';

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
    let data = await response.json()
    console.log(await data)



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
    let data = await response.json()
    console.log(await data)

}

export default function MealCard(props) {
    return (
        <Card sx={{ maxWidth: 250, margin: 1 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={props.imageURL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.mealName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.mealDescription}
                </Typography>
            </CardContent>
            <CardActions>
                {props.inMyMeal ? <Button onClick={() => removeHandler(props.mealData)} size="small">Remove</Button> : <Button onClick={() => addHandler(props.mealData)} size="small">Add</Button>}
                <Button size="small">Instructions</Button>
            </CardActions>
        </Card>
    );
}