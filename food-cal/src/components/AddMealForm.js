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
                        <form>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="Meal Name" variant="outlined" />
                                <TextField id="outlined-basic" label="Calories" variant="outlined" />
                                <TextField id="outlined-basic" label="Ingredients" variant="outlined" />
                                <TextField id="outlined-basic" label="Measurements" variant="outlined" />
                                <TextField multiline rows={4} id="outlined-basic" label="Method" variant="outlined" />
                                <FormControlLabel control={<Switch defaultChecked />} label="Add to My Meals" />
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <label htmlFor="contained-button-file">
                                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                        <Button variant="contained" component="span">
                                            Upload Picture
                                        </Button>
                                    </label>
                                </Stack>
                                <Button variant="text">Add new meal</Button>


                            </Box>



                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}