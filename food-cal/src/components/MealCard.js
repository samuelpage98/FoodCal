import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
                {
                    !props.noControls ? props.inMyMeal ? <Button onClick={() => props.removeHandler(props.mealData)} size="small">Remove</Button> : <Button onClick={() => props.addHandler(props.mealData)} size="small">Add</Button>
                        : <></>
                }
                <Button size="small" onClick={() => props.instructionButtonHandler(props.index)} >Instructions</Button>
                {!props.noControls ? <Button variant="text" onClick={() => props.deleteHandler(props.mealData)}>Delete</Button> : <></>}
            </CardActions>
        </Card>
    );
}