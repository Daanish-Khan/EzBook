import Button from '@mui/material/Button';
import * as React from 'react';
import { Typography, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import axios from 'axios';

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
    const [updateText, setUpdateText] = React.useState({
        delete: "hotel",
        address: "",
    })
    const [submitError, setSubmitError] = React.useState('')


    const onUpdateAddressChange = e => {
        setUpdateText({ ...updateText, address: e.target.value });
    }






    const submit = async () => {
        if (
            updateText.address==="") {
            setSubmitError('Fields must not be empty!')
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
                delete: "hotel",
                address: "",

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
                Delete
        </Button>

        <Dialog
            open={open}
            onClose={handleClose}
            sx={{'& .MuiPaper-root': {backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2}}}
        >
            <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3}}>
                <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Delete Hotel</Typography>
            </DialogTitle>
            <DialogContent>
                <TextField
                    required
                    fullWidth
                    value={updateText.address}
                    onChange={onUpdateAddressChange}
                    label="Hotel Address"
                    variant="filled"
                    sx={textsx}
                />
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