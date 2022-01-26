import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Switch } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const meal = {
    mealName: "",
    calories: "",
    ingredients: "",
    measurements: "",
    inMyMeal: true,
    imageURL: ""
}

const handleMealName = (event) => {
    meal.mealName = event.target.value;
    console.log(meal.mealName)
}

const handleCalories = (event) => {
    meal.calories = event.target.value;
    console.log(meal.calories)
}

const handleIngredients = (event) => {
    meal.ingredients = event.target.value;
    console.log(meal.ingredients)
}

const handleMeasurements = (event) => {
    meal.measurements = event.target.value;
    console.log(meal.measurements)
}

const handleInMyMeal = (event) => {
    meal.inMyMeal = event.target.checked;
    console.log(meal.inMyMeal)
}

const handleImageURL = (event) => {
    meal.imageURL = event.target.value;
    console.log(meal.imageURL)
}

const handleSubmit = () => {
    console.log(meal)
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Input = styled('input')({
    display: 'none',
});

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Add new meal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a new meal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Meal Name" variant="outlined" onChange={handleMealName} />
                            <TextField id="outlined-basic" label="Calories" variant="outlined" onChange={handleCalories} />
                            <TextField id="outlined-basic" label="Ingredients" variant="outlined" onChange={handleIngredients} />
                            <TextField id="outlined-basic" label="Measurements" variant="outlined" onChange={handleMeasurements} />
                            <TextField multiline rows={4} id="outlined-basic" label="Method" variant="outlined" />
                            <FormControlLabel control={<Switch defaultChecked onChange={handleInMyMeal} />} label="Add to My Meals" />
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImageURL} />
                                    <Button variant="contained" component="span">
                                        Upload Picture
                                    </Button>
                                </label>
                            </Stack>
                            <Button onClick={handleSubmit} variant="text">Add new meal</Button>


                        </Box>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}