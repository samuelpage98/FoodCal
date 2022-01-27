/* eslint-disable no-lone-blocks */
import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 630,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function MealInstructions(props) {

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
                                        '& > :not(style)': { m: 1, width: '60ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <h3>Ingredients</h3>
                                    <ul>
                                        {props.mealData[props.mealCardIndex].recipe.M.ingredients.L.map(el => {
                                            return <li>{el.S}: {props.mealData[props.mealCardIndex].recipe.M.measurements.L[props.mealData[props.mealCardIndex].recipe.M.ingredients.L.indexOf(el)].S}</li>
                                        })}
                                    </ul>
                                    <h3>Method</h3>
                                    <p>{props.mealData[props.mealCardIndex].method.S}</p>
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