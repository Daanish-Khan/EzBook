import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button, TextField, Stack } from '@mui/material';
import { COLORS } from './consts';

function BookingModal({open, handleClose, isAdmin}) {
    return(
        <Dialog
                
            open={open.open}
            onClose={handleClose}
            sx={{'& .MuiPaper-root': {backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2}}}
            
        >
            <DialogTitle sx={{ color: "white", textAlign:"center", padding: 0, paddingBottom: 1}}>
                {open.title}
            </DialogTitle>
            <DialogContent sx={{ alignItems: "center", display: "flex", justifyContent: "center"}}>
                <Stack spacing={2}>
                    <DialogContentText sx={{color: "white"}}>
                        Would you like to {isAdmin ? "rent" : "book"} this room?
                    </DialogContentText>
                    {isAdmin ? 
                    
                        <TextField 
                            id="filled-password-input"
                            label="SSN"
                            type="password"
                            variant="filled"
                            
                            sx={{
                                
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
            
                            }}
                        />
                        :
                        null  
                    }
                </Stack>
            </DialogContent>
            <DialogActions sx={{}}>
                <Button onClick={handleClose} sx={{color: "white", ':hover': {backgroundColor: COLORS.focusedColor}}}>Cancel</Button>
                
                {isAdmin ? 
                    <Button 
                        onClick={handleClose} 
                        sx={{
                            color: "white", 
                            backgroundColor: COLORS.primaryColor, 
                            ':hover': {backgroundColor: COLORS.primaryFocusedColor}
                        }} 
                        autoFocus
                    >
                        Rent Now
                    </Button> 
                    : 
                    <Button 
                        onClick={handleClose} 
                        sx={{
                            color: "white", 
                            backgroundColor: COLORS.primaryColor, 
                            ':hover': {backgroundColor: COLORS.primaryFocusedColor}
                            }} 
                            autoFocus
                    >
                        Book Now
                    </Button>
                }
            </DialogActions>
        </Dialog>
    )
}

export default BookingModal;