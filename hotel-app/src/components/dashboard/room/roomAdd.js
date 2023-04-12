import Button from '@mui/material/Button';
import * as React from 'react';
import { Grid, Typography, Box, TextField, FormControlLabel, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import axios from 'axios';

export default function RoomAdd() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setUpdateText({
            insert: "room",
            room_num: "",
            address: "",
            capacity: "",
            price: "",
            view: "",
            amenities: "",
            expandable: 0
            ,
            status: "Available"
        })
        setSubmitError('')
    };
    const [open, setOpen] = React.useState(false);
    const textsx = {
        '& .MuiFormHelperText-root': {
            color: "#ffff"
        },
        '& .MuiInputBase-root.Mui-focused': {
            backgroundColor: "#ffff"
        },
        '& .MuiInputBase-root': {
            backgroundColor: "#ffff"
        },
        '& .MuiInputBase-root:hover': {
            backgroundColor: "#ffff",
        },

        '&:hover label': {
            color: COLORS.focusedColor,
        },

        '& label.Mui-focused': {
            color: COLORS.focusedColor,

        },
        '& label': {
            color: COLORS.defaultColor,
        },

        '&& .MuiFilledInput-underline:hover:before': {
            borderBottomColor: COLORS.focusedColor
        },
        '& .MuiFilledInput-underline:after': {
            borderBottomColor: COLORS.focusedColor
        },
        '& .MuiFilledInput-underline:before': {
            borderBottomColor: COLORS.defaultColor,
        },

    }
    const [updateText, setUpdateText] = React.useState({
        insert: "employee",
        room_num: "",
        address: "",
        capacity: "",
        price: "",
        view: "",
        amenities: "",
        expandable: 0
        ,
        status: "Available"
    })
    const [submitError, setSubmitError] = React.useState('')

    const onUpdateAddressChange = e => {
        setUpdateText({ ...updateText, address: e.target.value });
    }
    const onUpdateRoomNumChange = e => {
        setUpdateText({ ...updateText, room_num: e.target.value });
    }
    const onUpdatePriceChange = e => {
        setUpdateText({ ...updateText, price: e.target.value });
    }
    const onUpdateCapacityChange = e => {
        setUpdateText({ ...updateText, capacity: e.target.value });
    }
    const onUpdateViewChange = e => {
        setUpdateText({ ...updateText, view: e.target.value });
    }
    const onUpdateAmenChange = e => {
        setUpdateText({ ...updateText, amenities: e.target.value });
    }
    const onUpdateExpandChange = e => {
        setUpdateText({ ...updateText, expandable: e.target.checked ? 1 : 0 });
    }




    const submit = async () => {
        if (
            updateText.room_num === "" ||
            updateText.address === "" ||
            updateText.capacity === "" ||
            updateText.amenities === "" ||
            updateText.view === "" ||
            updateText.price === ""
        ) {
            setSubmitError('Fields must not be empty!')
            return
        }


        if (!/^\d+$/.test(updateText.room_num)) {
            setSubmitError('Room # must only contain digits.')
            return
        }
        if (!/^\d+$/.test(updateText.capacity)) {
            setSubmitError('Capacity must only contain digits.')
            return
        }
        if (!/^[0-9]*\.?[0-9]*$/.test(updateText.room_num)) {
            setSubmitError('Price must be in correct format')
            return
        }

        try {
            console.log(updateText)
            const res = await axios.post('http://localhost:8800/insert', updateText)
            console.log(res.data)
            if (Object.keys(res.data)["code"] !== undefined || res.data.length === 0) {
                setSubmitError('Something went wrong with the search. Please try again.')
                return
            }
            setSubmitError('')
            setUpdateText({
                insert: "room",
                room_num: "",
                address: "",
                capacity: "",
                price: "",
                view: "",
                amenities: "",
                expandable: 0,
                status: "Available"
            })
            setOpen(false)
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <Box justifyContent={'center'} alignItems={'center'}>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                sx={{
                    color: 'white',
                    display: 'inline',
                    backgroundColor: COLORS.defaultColor,
                    borderRadius: "15px",
                    ':hover': {
                        backgroundColor: COLORS.focusedColor
                    },
                    margin: "2px"
                }}
            >
                Add
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{ '& .MuiPaper-root': { backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2 } }}
            >

                <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3 }}>
                    <Typography variant="h4" sx={{ top: 0, left: 0, color: "white" }}>Add Room</Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Room #"
                                variant="filled"
                                value={updateText.room_num}
                                onChange={onUpdateRoomNumChange}
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                value={updateText.address}
                                onChange={onUpdateAddressChange}
                                label="Hotel Address"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                value={updateText.price}
                                onChange={onUpdatePriceChange}
                                fullWidth
                                label="Price"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                required
                                value={updateText.capacity}
                                onChange={onUpdateCapacityChange}
                                fullWidth
                                label="Capacity"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                value={updateText.view}
                                onChange={onUpdateViewChange}
                                fullWidth
                                label="Type of View"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                value={updateText.amenities}
                                onChange={onUpdateAmenChange}
                                label="Amenities"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel sx={{ color: "white" }} control={
                                <Checkbox
                                    onChange={onUpdateExpandChange}
                                    checked={Boolean(updateText.expandable)}
                                    sx={{ color: "white", '& .MuiSvgIcon-root': { fontSize: 28, color: "white" } }} />} label="Expansion Available" />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    {submitError !== '' &&
                        <Typography variant="h7" fontWeight="bold" sx={{ top: 0, left: 0, color: "white", paddingRight: "10px" }}>{submitError}</Typography>
                    }
                    <Button
                        variant="contained"
                        onClick={submit}
                        sx={{
                            backgroundColor: COLORS.primaryColor,
                            ':hover': {
                                backgroundColor: COLORS.primaryFocusedColor
                            }
                        }}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}