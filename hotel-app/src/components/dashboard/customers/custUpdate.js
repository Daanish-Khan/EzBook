import Button from '@mui/material/Button';
import * as React from 'react';
import { Grid, Divider, Typography, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import { DatePicker } from '@mui/x-date-pickers'
import axios from 'axios';
import dayjs from 'dayjs';

export default function CustomerUpdate() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setUpdateText({
            updates: "room",
            SSN:"",
            address:"",
            full_name:"",
            regdate:"",
        })
        setSearchError('')
        setSubmitError('')
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
    const [searchText, setSearchText] = React.useState({search: "customer", SSN: ""});
    const [updateText, setUpdateText] = React.useState({
        updates: "customer",
        SSN:"",
        address:"",
        full_name:"",
        regdate:"",
    })
    const [searchError, setSearchError] = React.useState('')
    const [submitError, setSubmitError] = React.useState('')

    const onSearchSSN = e => {
        setSearchText({...searchText, SSN: e.target.value});
    }
    const onUpdateAddressChange = e => {
        setUpdateText({...updateText, address: e.target.value});
    }
    const onUpdateNameChange = e => {
        setUpdateText({...updateText, full_name: e.target.value});
    }
    const onUpdateRegDateChange = e => {
        setUpdateText({...updateText, regdate: new Date(e).toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0]});
    }


    const search = async () => {
        
        if (searchText.chain_name === "") {
            setSearchError('Field must not be empty!')
            return
        }
        if (!/^\d+$/.test(searchText.SSN)) {
            setSearchError('SSN must only contain digits.')
            return
        }

        try {
            console.log(searchText)
            const res = await axios.post('http://localhost:8800/updatesearch', searchText)
            if (Object.keys(res.data)["code"] !== undefined || res.data.length === 0) {
                setSearchError('Something went wrong with the search. Please try again.')
                return
            }
            setSearchError('')
            setUpdateText({
                updates: "customer",
                SSN:res.data[0].SSN,
                address:res.data[0].address,
                full_name:res.data[0].full_name,
                regdate:res.data[0].regdate,
                
                
            })

        } catch (err) {
            console.log(err);
            
        }
    }

    const submit = async () => {
        if (
            searchText.SSN === "" || 
            updateText.address === "" ||
            updateText.full_name === "" ||
            updateText.regdate === "") {
            setSubmitError('Fields must not be empty!')
            return
        }


        if (!/^\d+$/.test(searchText.SSN)) {
            setSubmitError('SSN must only contain digits.')
            return
        }

        try {
            console.log(updateText)
            const res = await axios.post('http://localhost:8800/update', updateText)
            console.log(res.data)
            if (Object.keys(res.data)["code"] !== undefined || res.data.length === 0) {
                setSubmitError('Something went wrong with the search. Please try again.')
                return
            }
            setSubmitError('')
            setSearchError('')
            setUpdateText({
                updates: "customer",
                SSN:"",
                address:"",
                full_name:"",
                regdate:"",
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
                Update
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                alignItems='center'
                sx={{'& .MuiPaper-root': {backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2}}}
            >
                <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3}}>
                    <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Update Customers</Typography>
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
                        
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                onChange={onSearchSSN}
                                label="SSN"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
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
                        {searchError !== '' &&
                            <Grid item xs={12} color="white" display="flex" justifyContent="center">
                                <Typography variant="h7" fontWeight="bold" sx={{ top: 0, left: 0, }}>{searchError}</Typography>
                            </Grid>
                        }
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


                        <Grid item xs={6}>
                            <TextField
                                required
                                value={updateText.address}
                                onChange={onUpdateAddressChange}
                                fullWidth
                                label="Address"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                value={updateText.full_name}
                                onChange={onUpdateNameChange}
                                label="Full Name"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DatePicker
                                label="Registration Date" 
                                value={dayjs(updateText.regdate)}
                                onChange={onUpdateRegDateChange}
                                sx={datesx}
                                slotProps={{ textField: { fullWidth: true } }}
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