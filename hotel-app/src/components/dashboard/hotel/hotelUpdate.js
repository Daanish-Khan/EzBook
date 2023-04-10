import Button from '@mui/material/Button';
import * as React from 'react';
import { Divider, Typography, Grid, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'


export default function BookingsUpdate() {

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
                sx={{'& .MuiPaper-root': {backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2}}}
            >
                <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3}}>
                    <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Update Hotel</Typography>
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
                                label="Hotel Address"
                                variant="filled"
                                sx={textsx}
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
                            <TextField
                                required
                                fullWidth
                                label="Chain Name"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="City"
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
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Rating"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="# of Rooms"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
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
                                label="Manager"
                                variant="filled"
                                sx={textsx}
                            />
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