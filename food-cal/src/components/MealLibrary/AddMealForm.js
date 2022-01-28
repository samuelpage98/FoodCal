import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Switch } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Grid } from '@mui/material';
import { Checkbox } from '@mui/material';
import apiURL from '../../API_URL'


const meal = {
    mealName: "",
    calories: "",
    ingredients: [],
    measurements: [],
    inMyMeal: true,
    imageURL: "",
    description: "",
    method: "",
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPescatarian: false
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
    meal.ingredients = event.target.value.split(',')
    meal.ingredients = meal.ingredients.map(el => el.trim())
    console.log(meal.ingredients)
}

const handleMeasurements = (event) => {
    meal.measurements = event.target.value.split(',')
    meal.measurements = meal.measurements.map(el => el.trim())
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

const handleMethod = (event) => {
    meal.method = event.target.value;
    console.log(meal.method)
}

const handleDescription = (event) => {
    meal.description = event.target.value;
    console.log(meal.description)
}

const handleIsVegan = (event) => {
    meal.isVegan = event.target.checked;
    console.log(meal.isVegan)
}

const handleIsVegetarian = (event) => {
    meal.isVegetarian = event.target.checked;
    console.log(meal.isVegetarian)
}

const handleIsGlutenFree = (event) => {
    meal.isGlutenFree = event.target.checked;
    console.log(meal.isGlutenFree)
}

const handleIsPescatarian = (event) => {
    meal.isPescatarian = event.target.checked;
    console.log(meal.isPescatarian)
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddMealForm(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async () => {
        await fetch(apiURL + 'meal', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(meal)
        });
        props.setRefresh(!props.refresh)
        handleClose()
    }
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
                        <Grid container>
                            <Grid item xs={6}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '50ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Meal Name" variant="outlined" onChange={handleMealName} />
                                    <TextField id="outlined-basic" label="Calories" variant="outlined" onChange={handleCalories} />
                                    <TextField id="outlined-basic" label="Ingredients" variant="outlined" onChange={handleIngredients} />
                                    <TextField id="outlined-basic" label="Measurements" variant="outlined" onChange={handleMeasurements} />
                                    <TextField multiline rows={4} id="outlined-basic" label="Method" variant="outlined" onChange={handleMethod} />

                                    {/* <Stack direction="row" alignItems="center" spacing={2}>
                                        <label htmlFor="contained-button-file">
                                            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImageURL} />
                                            <Button variant="contained" >
                                                Upload Picture
                                            </Button>
                                        </label>
                                    </Stack> */}
                                    <TextField id="outlined-basic" label="Image URL" variant="outlined" onChange={handleImageURL} />
                                    <FormControlLabel control={<Switch defaultChecked onChange={handleInMyMeal} />} label="Add to My Meals" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '50ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField multiline rows={4} id="outlined-basic" label="Description" variant="outlined" onChange={handleDescription} />
                                    <FormControlLabel control={<Checkbox onChange={handleIsVegetarian} />} label="Vegetarian" />
                                    <FormControlLabel control={<Checkbox onChange={handleIsVegan} />} label="Vegan" />
                                    <FormControlLabel control={<Checkbox onChange={handleIsGlutenFree} />} label="Gluten Free" />
                                    <FormControlLabel control={<Checkbox onChange={handleIsPescatarian} />} label="Pescatarian" />
                                </Box>
                            </Grid>
                        </Grid>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button onClick={handleSubmit} variant="contained">Add new meal</Button>
                        </div>


                    </Typography>
                </Box>
            </Modal>
        </div >
    );
}