import Button from '@mui/material/Button';
import * as React from 'react';
import { Grid, Divider, Typography, Box, TextField, FormControlLabel, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import { DatePicker, dayCalendarSkeletonClasses } from '@mui/x-date-pickers'
import axios from 'axios';
import dayjs from 'dayjs';

export default function BookingsUpdate() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSearchError('')
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

    const [searchText, setSearchText] = React.useState({search: "booking", room_num: "", hotel: "", start_date: ""});
    const [updateText, setUpdateText] = React.useState({
        updates: "booking",
        room_num: "",
        hotel: "",
        customer: "",
        start_date: "",
        end_date: "",
        isPaid: 0
    })
    const [searchError, setSearchError] = React.useState('')
    const [submitError, setSubmitError] = React.useState('')

    const onSearchRoomChange = e => {
        setSearchText({...searchText, room_num: e.target.value});
    }
    const onSearchAddressChange = e => {
        setSearchText({...searchText, hotel: e.target.value});
    }
    const onSearchDateChange = e => {
        setSearchText({...searchText, start_date: new Date(e).toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0]});
    }
    const onUpdateRoomChange = e => {
        setUpdateText({...updateText, room_num: e.target.value});
        console.log(updateText)
    }
    const onUpdateAddressChange = e => {
        setUpdateText({...updateText, hotel: e.target.value});
    }
    const onUpdateCustomerChange = e => {
        setUpdateText({...updateText, customer: e.target.value});
    }
    const onUpdateStartDateChange = e => {
        setUpdateText({...updateText, start_date: new Date(e).toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0]});
    }
    const onUpdateEndDateChange = e => {
        setUpdateText({...updateText, end_date: new Date(e).toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0]});
    }
    const onUpdatePaidChange = e => {
        setUpdateText({...updateText, isPaid: e.target.checked ? 1 : 0});
    }

    const search = async () => {
        
        if (searchText.room_num === "" ||
            searchText.hotel === "" || 
            searchText.start_date === "") {
            setSearchError('Fields must not be empty!')
            return
        }
        
        if (!/^\d+$/.test(searchText.room_num)) {
            setSearchError('Room # must only contain digits.')
            return
        }
        try {
            const res = await axios.post('http://localhost:8800/updatesearch', searchText)
            if (Object.keys(res.data)["code"] !== undefined || res.data.length === 0) {
                setSearchError('Something went wrong with the search. Please try again.')
                return
            }
            setSearchError('')
            setUpdateText({
                updates: "booking",
                room_num: res.data[0].room_num,
                hotel: res.data[0].hotel,
                customer: res.data[0].customer,
                start_date: new Date(res.data[0].startDate).toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0],
                end_date: new Date(res.data[0].startDate).toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0],
                isPaid: res.data[0].isPaid
            })

        } catch (err) {
            console.log(err);
        }
    }

    const submit = async () => {
        if (updateText.room_num === "" ||
            updateText.hotel === "" || 
            updateText.customer === "" ||
            updateText.start_date === "" ||
            updateText.end_date === "") {
            setSubmitError('Fields must not be empty!')
            return
        }

        if (searchText.room_num === "" ||
            searchText.hotel === "" || 
            searchText.start_date === "") {
            setSearchError('Fields must not be empty!')
            return
        }

        if (!/^\d+$/.test(updateText.room_num)) {
            setSubmitError('Room # must only contain digits.')
            return
        }

        if (!/^\d+$/.test(searchText.room_num)) {
            setSearchError('Room # must only contain digits.')
            return
        }

        try {
            console.log(updateText)
            const res = await axios.post('http://localhost:8800/update', updateText)
            if (Object.keys(res.data)["code"] !== undefined || res.data.length === 0) {
                setSubmitError('Something went wrong with the search. Please try again.')
                return
            }
            setSubmitError('')
            setSearchError('')
            setUpdateText({
                updates: "booking",
                room_num: "",
                hotel: "",
                customer: "",
                start_date: "",
                end_date: "",
                isPaid: 0
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
                Update
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{'& .MuiPaper-root': {backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2}}}
            >
                <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3}}>
                    <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Update Bookings</Typography>
                </DialogTitle>
                <DialogContent>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Divider 
                                sx={{
                                    '&:before': {borderTopColor: "white", borderWidth: "2px"}, 
                                    '&:after': {borderTopColor: "white", borderWidth: "2px"},
                                    '& .MuiDivider-wrapper': {  
                                        paddingLeft: "calc(2px * 10)",
                                        paddingRight: "calc(2px * 10)",
                                        overflow: "visible"
                                    },
                                    width: "100%",
                                    color: "white",
                                    
                                }}>
                                    <Typography variant="h6" sx={{ top: 0, left: 0, }}>Search Terms</Typography>
                            </Divider>
                        </Grid>
                        
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                label="Room #"
                                variant="filled"
                                onChange={onSearchRoomChange}
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                label="Hotel Address"
                                variant="filled"
                                onChange={onSearchAddressChange}
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker 
                                label="Start Date"
                                onChange={onSearchDateChange} 
                                sx={datesx}
                            />
                        </Grid>
                        {searchError !== '' &&
                            <Grid item xs={12} color="white" display="flex" justifyContent="center">
                                <Typography variant="h7" fontWeight="bold" sx={{ top: 0, left: 0, }}>{searchError}</Typography>
                            </Grid>
                        }
                        <Grid item xs={12}>
                            <Button
                                fullWidth 
                                variant="contained"
                                onClick={search}
                                sx={{
                                    overflow: "visible",
                                    color: 'white', 
                                    display: 'inline', 
                                    backgroundColor: COLORS.primaryColor, 
                                    borderRadius:"15px",
                                    ':hover': {
                                        backgroundColor: COLORS.primaryFocusedColor
                                    },
                                }}
                            >
                                Search Records
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Divider 
                                sx={{
                                    '&:before': {borderTopColor: "white", borderWidth: "2px"}, 
                                    '&:after': {borderTopColor: "white", borderWidth: "2px"},
                                    '& .MuiDivider-wrapper': {  
                                        paddingLeft: "calc(2px * 10)",
                                        paddingRight: "calc(2px * 10)",
                                        overflow: "visible"
                                    },
                                    width: "100%",
                                    color: "white"
                                    
                                }}>
                                    <Typography variant="h6" sx={{ top: 0, left: 0, }}>Data to Update</Typography>
                            </Divider>
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                label="Room #"
                                variant="filled"
                                value={updateText.room_num}
                                onChange={onUpdateRoomChange}
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                label="Hotel Address"
                                variant="filled"
                                value={updateText.hotel}
                                onChange={onUpdateAddressChange}
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                label="Customer"
                                variant="filled"
                                value={updateText.customer}
                                onChange={onUpdateCustomerChange}
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker 
                                label="Start Date"
                                value={dayjs(updateText.start_date)}
                                onChange={onUpdateStartDateChange} 
                                sx={datesx}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <DatePicker 
                                label="End Date"
                                value={dayjs(updateText.end_date)}
                                onChange={onUpdateEndDateChange} 
                                sx={datesx}
                            />
                        </Grid>
                       
                        <Grid item xs={4} display="flex" justifyContent="center">
                            <FormControlLabel 
                                sx={{color: "white"}}
                                control={
                                    <Checkbox 
                                        onChange={onUpdatePaidChange}
                                        checked={Boolean(updateText.isPaid)} 
                                        sx={{
                                            color: "white", 
                                            '& .MuiSvgIcon-root': {fontSize: 28, color:"white"}
                                        }}
                                    />
                                } 
                                label="Paid for Room" 
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
        </Box >
    )
}