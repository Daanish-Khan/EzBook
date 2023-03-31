import { Box, Button, TextField } from '@mui/material';
import { Grid } from '@mui/material';
function SignUpBox({ defaultColor, focusedColor, primaryColor, primaryFocusedColor, onSignUpClick }) {

    const style = {
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
    }

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
            <h2>Sign Up</h2>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        label="First Name"
                        variant="filled"
                        
                        sx={style}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        label="Last Name"
                        variant="filled"
                        
                        sx={style}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="SSN"
                        variant="filled"
                        
                        sx={style}
                    />
                </Grid>
            </Grid>
            
            
            
            <Button 
                variant="contained"
                sx={{
                    marginTop: "30px",
                    backgroundColor:  primaryColor,
                    ':hover': {
                        backgroundColor: primaryFocusedColor
                    }
                }}>
                Register
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
                Back to login
            </Button>
        </Box>
    );

}

export default SignUpBox;