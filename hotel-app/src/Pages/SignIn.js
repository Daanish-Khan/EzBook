import './SignIn.css';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Waves from '../components/Waves';
import SignInBox from '../components/SignInBox';
import SignUpBox from '../components/SignUpBox';
import { motion } from 'framer-motion';
import * as React from 'react';

const focusedColor = "#CD5B68"
const defaultColor = "#EF5F67"
const primaryColor = "#C62368"
const primaryFocusedColor = "#B21868"

function SignIn() {

    const [animate, setAnimate] = React.useState(false);

    const onSwitchSignUpSignInClick = (() => {

        setAnimate(!animate);

    });

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

            <motion.div
                style={{
                    position:"absolute",
                    height: "100%",
                    width: "100%",  
                }}
                animate={{ y: animate ? "35vh" : "1vh" }}
                transition={{duration: 0.75, type: "spring"}}

            >
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
            </motion.div>

            {animate 
            ? <SignUpBox 
                defaultColor={defaultColor}
                focusedColor={focusedColor}
                primaryColor={primaryColor}
                primaryFocusedColor={primaryFocusedColor}
                onSignUpClick={onSwitchSignUpSignInClick}
            />
            :  <SignInBox 
                defaultColor={defaultColor}
                focusedColor={focusedColor}
                primaryColor={primaryColor}
                primaryFocusedColor={primaryFocusedColor}
                onSignUpClick={onSwitchSignUpSignInClick}
            />}

        </Container>

        
    );
}

export default SignIn;