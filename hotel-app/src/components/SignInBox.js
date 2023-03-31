import { Box, Button, TextField } from '@mui/material';
import { COLORS } from '../components/consts'

function SignInBox({ onSignInClick }) {

    return (
        <Box sx={{
            position: "relative",
            padding: "60px",
            paddingTop: "20px",
            backgroundColor: "#fffff40",
            backdropFilter: "blur(15px)",
            border: "1px solid #fff",
            borderBottom: "1px solid #ffffff80",
            borderRight: "1px solid #ffffff80",
            borderRadius: "20px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 25px 50px #0000001a"
        }}>
            <h2>Sign In</h2>
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
            <Button 
                variant="contained"
                sx={{
                    marginTop: "30px",
                    backgroundColor:  COLORS.primaryColor,
                    ':hover': {
                        backgroundColor: COLORS.primaryFocusedColor
                    }
                }}>
                login
            </Button>
            <Button
             variant="contained"
             onClick={onSignInClick}
             sx={{
                 marginTop: "30px",
                 backgroundColor: COLORS.defaultColor,
                 ':hover': {
                    backgroundColor: COLORS.focusedColor
                 }
             }}>
                Sign Up
            </Button>
        </Box>
    );

}

export default SignInBox;