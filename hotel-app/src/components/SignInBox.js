import { Box, Button, TextField } from '@mui/material';

function SignInBox({ defaultColor, focusedColor, primaryColor, primaryFocusedColor, onSignUpClick }) {

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
                        color: focusedColor,
                        
                    },

                    '& label.Mui-focused': {
                        color: focusedColor,
                        
                    },
                    '& label': {
                        color: defaultColor,
                    },

                    '&& .MuiFilledInput-underline:hover:before': {
                        borderBottomColor: focusedColor
                    },
                    '& .MuiFilledInput-underline:after': {
                        borderBottomColor: focusedColor
                    },
                    '& .MuiFilledInput-underline:before': {
                        
                        borderBottomColor: defaultColor,
                    },

                }}
            />
            <Button 
                variant="contained"
                sx={{
                    marginTop: "30px",
                    backgroundColor:  primaryColor,
                    ':hover': {
                        backgroundColor: primaryFocusedColor
                    }
                }}>
                login
            </Button>
            <Button
             variant="contained"
             onClick={onSignUpClick}
             sx={{
                 marginTop: "30px",
                 backgroundColor: defaultColor,
                 ':hover': {
                    backgroundColor: focusedColor
                 }
             }}>
                Sign Up
            </Button>
        </Box>
    );

}

export default SignInBox;