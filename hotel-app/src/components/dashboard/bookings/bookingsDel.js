import Button from '@mui/material/Button';
import * as React from 'react';
import { Typography, Grid, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import axios from 'axios';
import dayjs from 'dayjs';

export default function BookingsDel() {

    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
    };
    const [open, setOpen] = React.useState(false);
    const textsx={
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
    const datesx={
        '& .MuiInputAdornment-root': {
            display: "contents",
            colors: COLORS.defaultColor,
        },
        '& .MuiInputBase-root': {
            backgroundColor: "white",
        },
        '& input': {
            color: COLORS.defaultColor,
            
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
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.primaryColor + " !important",
        },
        
    }
    const [updateText, setUpdateText] = React.useState({
        delete: "booking",
        room_num: "",
        address:"",
        startDate:""
    })
    const [submitError, setSubmitError] = React.useState('')


    const onUpdateRoomNumChange = e => {
        setUpdateText({ ...updateText, room_num: e.target.value });
    }
    const onUpdateAddressChange = e => {
        setUpdateText({ ...updateText, address: e.target.value });
    }
    const onUpdateStartDateChange = e => {
        setUpdateText({...updateText, startDate: new Date(e).toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0]});
    }





    const submit = async () => {
        if (
            updateText.room_num===""|| updateText.address===""||updateText.startDate==="") {
            setSubmitError('Fields must not be empty!')
            return
        }


        if (!/^\d+$/.test(updateText.room_num)) {
            setSubmitError('Room Number must only contain digits.')
            return
        }

        try {
            console.log(updateText)
            const res = await axios.post('http://localhost:8800/delete', updateText)
            console.log(res.data)
            if (Object.keys(res.data)["code"] !== undefined || res.data.length === 0) {
                setSubmitError('Something went wrong with the search. Please try again.')
                return
            }
            setSubmitError('')
            setUpdateText({
                delete: "booking",
                room_num: "",
                address:"",
                startDate:""

            })
            setOpen(false)
        } catch (err) {
            console.log(err);
        }

    }


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
                Delete
        </Button>

        <Dialog
                open={open}
                onClose={handleClose}
                sx={{'& .MuiPaper-root': {backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2}}}
            >
                <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3}}>
                    <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Delete Booking</Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
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
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                label="Hotel Address"
                                variant="filled"
                                value={updateText.address}
                                onChange={onUpdateAddressChange} 
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker 
                                label="Start Date" 
                                value={dayjs(updateText.startDate)}
                                onChange={onUpdateStartDateChange} 
                                sx={datesx}
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