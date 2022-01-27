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

const apiURL = ' https://tpua2ywmzj.execute-api.us-east-1.amazonaws.com/';

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

export default function MealInstructions(props) {
    console.log(props.mealData)
    console.log(props.mealCardIndex)

    {
        if (props.mealData.length !== 0 && props.open) {
            console.log(props.mealData[props.mealCardIndex].recipe.M.ingredients.L)
            return (
                <div>
                    <Modal
                        open={props.open}
                        onClose={props.handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {props.mealData[props.mealCardIndex].mealName.S}
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
                                    <ul>
                                        {props.mealData[props.mealCardIndex].recipe.M.ingredients.L.map(el => {
                                            return <li>{el.S}: {props.mealData[props.mealCardIndex].recipe.M.measurements.L[props.mealData[props.mealCardIndex].recipe.M.ingredients.L.indexOf(el)].S}</li>
                                        })}
                                    </ul>


                                </Box>
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            );
        } else {
            return (
                <></>
            )
        }
    }

}