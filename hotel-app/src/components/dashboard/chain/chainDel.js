import Button from '@mui/material/Button';
import * as React from 'react';
import { Typography, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'

export default function ChainDel() {

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
                <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Delete Chain</Typography>
            </DialogTitle>
            <DialogContent>
                <TextField
                    required
                    fullWidth
                    label="Chain Name"
                    variant="filled"
                    sx={textsx}
                />
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