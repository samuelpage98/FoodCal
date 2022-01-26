import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MealCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
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
                <Button size="small">Add</Button>
                <Button size="small">Instructions</Button>
            </CardActions>
        </Card>
    );
}