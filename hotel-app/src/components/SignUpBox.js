import { Box, Button, TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { COLORS } from '../components/consts'
import * as React from 'react'

function SignUpBox({ signInClick, swapToSignInClick, authHandle, isError }) {

    const [text, setText] = React.useState({first: "", last: "", address: "", SSN: ""});

    const onFirstChange = e => {
        setText({...text, first: e.target.value});
    }
    const onLastChange = e => {
        setText({...text, last: e.target.value});
    }
    const onAddressChange = e => {
        setText({...text, address: e.target.value});
    }
    const onSSNChange = e => {
        setText({...text, SSN: e.target.value});
    }

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
                        onChange={onFirstChange}
                        error={isError.first !== ""}
                        helperText={isError.first}
                        
                        sx={style}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        label="Last Name"
                        variant="filled"
                        onChange={onLastChange}
                        error={isError.last !== ""}
                        helperText={isError.last}
                        
                        sx={style}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Address"
                        variant="filled"
                        onChange={onAddressChange}
                        error={isError.address !== ""}
                        helperText={isError.address}
                        
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
                        onChange={onSSNChange}
                        error={isError.SSN !== ""}
                        helperText={isError.SSN}
                        
                        sx={style}
                    />
                </Grid>
            </Grid>
            
            
            
            <Button 
                variant="contained"
                onClick={() => signInClick(text)}
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
             onClick={swapToSignInClick}
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