import Button from '@mui/material/Button';
import * as React from 'react';
import { Chip, Stack } from '@mui/material';
import { COLORS } from './../../consts'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function BookingsUpdate() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [open, setOpen] = React.useState('');

    return (
        <Box>
            <Button 
                variant="contained"
                onClick={handleClickOpen}
                sx={{
                    color: 'white', 
                    display: 'inline', 
                    backgroundColor: COLORS.defaultColor, 
                    borderRadius:"15px",
                    ':hover': {
                        backgroundColor: COLORS.focusedColor
                    },
                    margin: "2px"
                }}
            >
                Update
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                alignItems='center'>

                <DialogTitle>
                    Update Booking
                </DialogTitle>
                <DialogContent>

                    <Stack direction={"column"} alignItems={'center'}>
                        <Stack direction={"row"}>
                            <Stack direction={"column"}>
                                <DialogContentText>
                                    Room Number
                                </DialogContentText>
                                <TextField />
                            </Stack>
                            <Stack direction={"column"}>
                                <DialogContentText>
                                    Previous Room Number
                                </DialogContentText>
                                <TextField />
                            </Stack>

                        </Stack>
                        <Stack direction={"row"}>
                            <Stack direction={"column"}>
                                <DialogContentText>
                                    Hotel
                                </DialogContentText>
                                <TextField />
                            </Stack>
                            <Stack direction={"column"}>
                                <DialogContentText>
                                    Previous Hotel
                                </DialogContentText>
                                <TextField />
                            </Stack>
                        </Stack>
                        <Stack direction={"row"}>
                            <Stack direction={"column"}>
                                <DialogContentText>
                                    Start Date
                                </DialogContentText>
                                <TextField />
                            </Stack>
                            <Stack direction={"column"}>
                                <DialogContentText>
                                    Previous Start Date
                                </DialogContentText>
                                <TextField />
                            </Stack>
                        </Stack>
                        <Stack direction={"row"}>
                            <Stack direction={"column"}>
                                <DialogContentText>
                                    End Date
                                </DialogContentText>
                                <TextField />
                            </Stack>
                        </Stack>
                        <Stack direction={"row"}>
                            <Stack direction={"column"}>
                                <DialogContentText>
                                    Paid Status
                                </DialogContentText>
                                <TextField />
                            </Stack>
                        </Stack>
                        <Stack direction={"row"}>
                            <Stack direction={"column"}>
                                <DialogContentText>
                                    Customer
                                </DialogContentText>
                                <TextField />
                            </Stack>
                        </Stack>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button>Submit</Button>
                </DialogActions>
            </Dialog>
        </Box >
    )
}