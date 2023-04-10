import Button from '@mui/material/Button';
import * as React from 'react';
import { Grid, Stack, Divider, Typography, Box, TextField, FormControlLabel, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import { DatePicker } from '@mui/x-date-pickers'

export default function BookingsUpdate() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [open, setOpen] = React.useState('');
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
                alignItems='center'
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
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                label="Hotel Address"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker 
                                label="Start Date" 
                                sx={datesx}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                fullWidth 
                                variant="contained"
                                onClick={handleClickOpen}
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
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                label="Hotel Address"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                label="Customer"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker 
                                label="Start Date" 
                                sx={datesx}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <DatePicker 
                                label="End Date" 
                                sx={datesx}
                            />
                        </Grid>
                       
                        <Grid item xs={4} display="flex" justifyContent="center">
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
        </Box >
    )
}