import './SignIn.css';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Waves from '../components/Waves';
import SignInBox from '../components/SignInBox';
import SignUpBox from '../components/SignUpBox';
import { motion } from 'framer-motion';
import { COLORS } from '../components/consts'
import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn({auth, authHandle}) {

    const [animate, setAnimate] = React.useState(false);
    const [error, setError] = React.useState('');
    const navigator = useNavigate();

    const onSwitchSignUpSignInClick = (() => {

        setAnimate(!animate);

    });

    const signInClick = async (text) => {
        console.log(!/^\d+$/.test(text))
        if (text === "" || !/^\d+$/.test(text)) {
            setError('Must not be empty and only contain digits.');
            return;
        } else {
            setError('');
        }
       try {
        const res = await axios.post("http://localhost:8800/login", {SSN: text})

        if (res.data[0][0][Object.keys(res.data[0][0])[0]] === 1) {
            authHandle({SSN: text, isAdmin: false});
            navigator('/bookings');
            setError('');
        } else if (res.data[1][0][Object.keys(res.data[1][0])[0]] === 1) {
            authHandle({SSN: text, isAdmin: true});
            navigator('/bookings');
            setError('');
        } else {
            setError('Incorrect SSN');
        }
       } catch (err) {
            console.log(err)
       }
    };

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
                <Typography variant="h1" sx={{color: COLORS.defaultColor}}>EzBook.</Typography>
            </Box>

            <motion.div
                style={{
                    position:"absolute",
                    height: "100%",
                    width: "100%",  
                }}
                animate={{ y: animate ? "35vh" : "1vh" }}
                initial={false}
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
                isError={error}
                authHandle={authHandle}
                signInClick={signInClick}
                swapToRegisterClick={onSwitchSignUpSignInClick}
            />
            :  <SignInBox
                isError={error}
                authHandle={authHandle}
                signInClick={signInClick}
                swapToRegisterClick={onSwitchSignUpSignInClick}
            />}

        </Container>

        
    );
}

export default SignIn;