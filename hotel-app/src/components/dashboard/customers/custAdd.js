import Button from '@mui/material/Button';
import * as React from 'react';
import { Typography, Grid, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import axios from 'axios';
import dayjs from 'dayjs';

export default function CustomerAdd() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setUpdateText({
            insert:"customer",
            name: "",
            address: "",
            startDate: dayjs(new Date()),
            SSN: "",
        })
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
        insert: "customer",
        name: "",
        address: "",
        startDate: new Date().toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0],
        SSN: "",
    })
    const [submitError, setSubmitError] = React.useState('')

    const onUpdateAddressChange = e => {
        setUpdateText({ ...updateText, address: e.target.value });
    }
    const onUpdateSSNChange = e => {
        setUpdateText({ ...updateText, SSN: e.target.value });
    }
    const onUpdateNameChange = e => {
        setUpdateText({...updateText, name: e.target.value});
    }





    const submit = async () => {
        if (
            updateText.address === "" ||
            updateText.startDate === "" ||
            updateText.SSN==="") {
            setSubmitError('Fields must not be empty!')
            return
        }


        if (!/^\d+$/.test(updateText.SSN)) {
            setSubmitError('SSN must only contain digits.')
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
                insert: "customer",
                name: "",
                address: "",
                startDate: new Date().toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0],
                SSN: "",

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
                onClose={handleClose}
                sx={{'& .MuiPaper-root': {backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2}}}
            >
                <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3}}>
                    <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Add Customer</Typography>
                </DialogTitle>
                <DialogContent>

                <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="SSN"
                                onChange={onUpdateSSNChange}
                                value={updateText.SSN}
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                onChange={onUpdateAddressChange}
                                value={updateText.address}
                                label="Address"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                onChange={onUpdateNameChange}
                                value={updateText.name}
                                label="Full Name"
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
                    onClick={submit}
                        variant="contained"
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