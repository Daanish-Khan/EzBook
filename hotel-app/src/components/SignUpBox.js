import { Box, Button, TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { COLORS } from '../components/consts'
function SignUpBox({ onBackToSignInClick }) {

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
                        label="Address"
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
                        type="password"
                        
                        sx={style}
                    />
                </Grid>
            </Grid>
            
            
            
            <Button 
                variant="contained"
                sx={{
                    marginTop: "30px",
                    backgroundColor:  COLORS.primaryColor,
                    ':hover': {
                        backgroundColor: COLORS.primaryFocusedColor
                    }
                }}>
                Register
            </Button>
            <Button
             variant="contained"
             onClick={onBackToSignInClick}
             sx={{
                 marginTop: "30px",
                 backgroundColor: COLORS.defaultColor,
                 ':hover': {
                    backgroundColor: COLORS.focusedColor
                 }
             }}>
                Back to login
            </Button>
        </Box>
    );

}

export default SignUpBox;