import './SignIn.css';
import test from '../test.jpg' ;
import { Box, Button, rgbToHex, TextField } from '@mui/material';
import { Container } from '@mui/system';

function SignIn() {
    return (
        <Container fixed
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowX: "hidden",
            width: "100%",
            height: "100vh"
        }}>
            <img src={test} className="bg" />
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
                            color: "#d64c42",
                            
                        },

                        '& label.Mui-focused': {
                            color: "#d64c42",
                            
                        },
                        '& label': {
                            color: "#8f2c24",
                        },

                        '&& .MuiFilledInput-underline:hover:before': {
                            borderBottomColor: "#d64c42"
                        },
                        '& .MuiFilledInput-underline:after': {
                            borderBottomColor: "#d64c42"
                        },
                        '& .MuiFilledInput-underline:before': {
                            
                            borderBottomColor: "#8f2c24",
                        },

                    }}
                />
                <Button 
                    variant="contained"
                    sx={{
                        marginTop: "30px",
                        backgroundColor: "#8f2c24",
                        ':hover': {
                            backgroundColor: "#d64c42"
                        }
                    }}>
                    login
                </Button>
                <Button
                 variant="outlined"
                 sx={{
                     marginTop: "30px",
                     borderColor: "#8f2c24",
                     color: "#8f2c24",
                     ':hover': {
                         borderColor: "#d64c42",
                         color: "#d64c42"
                     }
                 }}>
                    Sign Up
                </Button>
            </Box>
            

        </Container>
        
    );
}

export default SignIn;