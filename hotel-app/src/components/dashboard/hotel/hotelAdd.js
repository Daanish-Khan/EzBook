import Button from '@mui/material/Button';
import * as React from 'react';
import { Typography, Grid, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import axios from 'axios';

export default function BookingsAdd() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setUpdateText({
            insert: "hotel",
            address: "",
            chain_name: "",
            city:"",
            country:"",
            rating:"",
            num_rooms:"",
            phonenumber:"",
            manager:""
        })
        setSubmitError('')
    };
    const [open, setOpen] = React.useState(false);
    const textsx ={
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
        insert: "hotel",
        address: "",
        chain_name: "",
        city:"",
        country:"",
        rating:"",
        num_rooms:"",
        phonenumber:"",
        manager:""
        
    })
    const [submitError, setSubmitError] = React.useState('')

    const onUpdateHotelAddressChange = e => {
        setUpdateText({...updateText, address: e.target.value});
    }
    const onUpdateCityChange = e => {
        setUpdateText({...updateText, city: e.target.value});
    }
    const onUpdateCountryChange = e => {
        setUpdateText({...updateText,country: e.target.value });
    }
    const onUpdateNumRoomsChange = e => {
        setUpdateText({...updateText, num_rooms: e.target.value});
    }
    const onUpdateChainNameChange = e => {
        setUpdateText({...updateText, chain_name: e.target.value});
    }
    const onUpdateRatingChange = e => {
        setUpdateText({...updateText, rating: e.target.value});
    }
    const onUpdatePhoneChange = e => {
        setUpdateText({...updateText, phonenumber: e.target.value});
    }
    const onUpdateManagerChange = e => {
        setUpdateText({...updateText, manager: e.target.value});
    }



    const submit = async () => {
        if (
            updateText.chain_name === "" ||
            updateText.address === "" ||
            updateText.city === "" ||
            updateText.country === ""||
            updateText.manager === "" ||
            updateText.rating === "" ||
            updateText.num_rooms === "" ||
            updateText.phonenumber === "") {
            setSubmitError('Fields must not be empty!')
            return
        }


        if (!/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(updateText.phonenumber)) {
            setSubmitError('Phone Number be in correct format (X-XXX-XXX-XXXX)')
            return
        }
        if (!/^\d+$/.test(updateText.num_rooms)) {
            setSubmitError('# of Hotels must only contain digits.')
            return
        }
        if (!/^\d+$/.test(updateText.manager)) {
            setSubmitError('Manager must only contain digits.')
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
                insert: "hotel",
                address: "",
                chain_name: "",
                city:"",
                country:"",
                rating:"",
                num_rooms:"",
                phonenumber:"",
                manager:""
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
                    borderRadius:"15px",
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
                onClose={handleClose}sx={{'& .MuiPaper-root': {backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2}}}
                >
                    <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3}}>
                        <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Add Hotel</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Hotel Address"
                                    variant="filled"
                                    sx={textsx}
                                    value={updateText.address}
                                    onChange={onUpdateHotelAddressChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Chain Name"
                                    variant="filled"
                                    sx={textsx}
                                    value={updateText.chain_name}
                                    onChange={onUpdateChainNameChange}
                                />
                            </Grid>
                            
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    value={updateText.city}
                                    onChange={onUpdateCityChange}
                                    fullWidth
                                    label="City"
                                    variant="filled"
                                    sx={textsx}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    value={updateText.country}
                                    onChange={onUpdateCountryChange}
                                    fullWidth
                                    label="Country"
                                    variant="filled"
                                    sx={textsx}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={updateText.rating}
                                    onChange={onUpdateRatingChange}
                                    label="Rating"
                                    variant="filled"
                                    sx={textsx}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={updateText.num_rooms}
                                    onChange={onUpdateNumRoomsChange}
                                    label="# of Rooms"
                                    variant="filled"
                                    sx={textsx}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    requiredvalue={updateText.phonenumber}
                                    onChange={onUpdatePhoneChange}
                                    fullWidth
                                    label="Phone Number"
                                    variant="filled"
                                    sx={textsx}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={updateText.manager}
                                    onChange={onUpdateManagerChange}
                                    label="Manager"
                                    variant="filled"
                                    sx={textsx}
                                />
                            </Grid>
                        </Grid>
                </DialogContent>
                <DialogActions>
                {submitError !== '' &&
                        <Typography variant="h7" fontWeight="bold" sx={{ top: 0, left: 0, color: "white", paddingRight: "10px"}}>{submitError}</Typography>
                    }
                    <Button 
                        variant="contained"
                        onClick={submit}
                        sx={{
                            backgroundColor:  COLORS.primaryColor,
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