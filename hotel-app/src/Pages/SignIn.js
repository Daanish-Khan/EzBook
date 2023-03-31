import './SignIn.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Container, padding } from '@mui/system';
import Waves from '../components/Waves';

const focusedColor = "#CD5B68"
const defaultColor = "#EF5F67"
const primaryColor = "#C62368"
const primaryFocusedColor = "#B21868"

function SignIn() {
    return (
        <Container fixed
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowX: "hidden",
            width: "100%",
            height: "100vh",
        }}>

            <div className="bg"/>
            <Box
            sx={{
                position:"fixed",
                top: "15vh",
            }}>
                <Typography variant="h1" sx={{color: defaultColor}}>EzBook.</Typography>
            </Box>
            <Waves
                colorArray={[
                    "#FA7268",
                    "#EF5F67",
                    "#E34C67",
                    "#D53867",
                    "#C62368",
                ]}
                style={{
                    position:"absolute",
                    width: "100vw",
                    height: "55vh",
                    bottom:"0px",
                    left:"0px",
                    margin: "0px"
                }}
                gap={100}
                height={170}
                speed={0.35}
                points={5}
                amplitude={20}
            
            />
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

        </Container>

        
    );
}

export default SignIn;