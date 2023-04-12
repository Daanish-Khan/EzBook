import Button from '@mui/material/Button';
import * as React from 'react';
import { Typography, Grid, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import axios from 'axios';

export default function ChainAdd() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setUpdateText({
            insert: "chain",
            chain_name:"",
            address:"",
            city:"",
            country:"",
            num_hotels:""
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
        insert: "chain",
        chain_name:"",
        address:"",
        city:"",
        country:"",
        num_hotels:""
    })
    const [submitError, setSubmitError] = React.useState('')

    const onUpdateAddressChange = e => {
        setUpdateText({ ...updateText, address: e.target.value });
    }
    const onUpdateChainNameChange = e => {
        setUpdateText({ ...updateText, chain_name: e.target.value });
    }
    const onUpdateCityChange = e => {
        setUpdateText({...updateText, city: e.target.value});
    }
    const onUpdateCountryChange = e => {
        setUpdateText({...updateText, country: e.target.value});
    }
    const onUpdateNumHotelsChange = e =>{
        setUpdateText({...updateText, num_hotels: e.target.value});
        
    }



    const submit = async () => {
        if (
            updateText.address === "" ||
            updateText.chain_name === "" ||
            updateText.country === "" ||
            updateText.city === ""||
            updateText.num_hotels==="") {
            setSubmitError('Fields must not be empty!')
            return
        }


        if (!/^\d+$/.test(updateText.num_hotels)) {
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
                insert: "chain",
                chain_name:"",
                address:"",
                city:"",
                country:"",
                num_hotels:""
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
                    <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Add Chain</Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Name"
                                variant="filled"
                                onChange={onUpdateChainNameChange}
                                value={updateText.chain_name}
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Office Address"
                                onChange={onUpdateAddressChange}
                                value={updateText.address}
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="City"
                                onChange={onUpdateCityChange}
                                value={updateText.city}
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Country"
                                variant="filled"
                                onChange={onUpdateCountryChange}
                                value={updateText.country}
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="# of Hotels"
                                onChange={onUpdateNumHotelsChange}
                                value={updateText.num_hotels}
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