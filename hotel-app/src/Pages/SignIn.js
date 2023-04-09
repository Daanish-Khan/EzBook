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
    const [registerError, setRegisterError] = React.useState({first: "", last: "", address: "", SSN: ""});
    
    const navigator = useNavigate();

    const onSwitchSignUpSignInClick = (() => {

        setAnimate(!animate);

    });

    const registerClick = async (text) => {
        let e = {};
        if (!/^[a-zA-Z]+$/.test(text.first) || text.first === "") {
            e.first="Must contain only characters."
        } else {
            e.first=""
        }

        if (!/^[a-zA-Z]+$/.test(text.last) || text.last === "") {
            e.last="Must contain only characters."
        } else {
            e.last=""
        }

        if (text.address === "") {
            e.address="Must not be empty."
        } else {
            e.address=""
        }

        if (text.SSN === "" || !/^\d+$/.test(text.SSN)) {
            e.SSN="Must not be empty and only contain digits."
        } else {
            e.SSN=""
        } 

        if (e.first !== "" || e.last !== "" || e.address !== "" || e.SSN !== "") {
            setRegisterError(e)
            return
        }

        try {
            const res = await axios.post("http://localhost:8800/register", {SSN: text.SSN, name: text.first + " " + text.last, address: text.address})
            if (res.data["code"] !== undefined) {

                if (res.data.code === "ER_DUP_ENTRY") {
                    e.SSN="Duplicate entry found, please use another SSN."
                    setRegisterError(e)
                }
            } else {
                e.SSN=""
                setRegisterError(e)
                authHandle({SSN: text.SSN, isAdmin: false})
                navigator('/bookings');
            }
            
        } catch (err) {
            console.log(err)
        }

    }

    const signInClick = async (text) => {

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
            setError('');
            navigator('/bookings');
            
        } else if (res.data[1][0][Object.keys(res.data[1][0])[0]] === 1) {
            authHandle({SSN: text, isAdmin: true});
            setError('');
            navigator('/bookings');
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
                isError={registerError}
                authHandle={authHandle}
                signInClick={registerClick}
                swapToSignInClick={onSwitchSignUpSignInClick}
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