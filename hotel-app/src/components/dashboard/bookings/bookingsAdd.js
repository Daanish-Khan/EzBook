import Button from '@mui/material/Button';
import * as React from 'react';
import { Typography, FormControlLabel, Grid, Checkbox, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function BookingsAdd() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [open, setOpen] = React.useState('');
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
                Add
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{'& .MuiPaper-root': {backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2}}}
            >
                <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3}}>
                <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Add Booking</Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Room #"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Hotel Address"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <DatePicker 
                                label="Start Date" 
                                sx={datesx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Customer SSN"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <DatePicker 
                                label="End Date" 
                                sx={datesx}
                            />
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="center">
                            <FormControlLabel sx={{color: "white"}}control={<Checkbox sx={{color: "white", '& .MuiSvgIcon-root': {fontSize: 28, color:"white"}}}/>} label="Paid for Room" />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button 
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