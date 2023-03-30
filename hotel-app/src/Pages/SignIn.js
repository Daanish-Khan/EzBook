import './SignIn.css';
import test from '../test.jpg' ;
import { Box, rgbToHex } from '@mui/material';
import { Container } from '@mui/system';

function SignIn() {
    return (
        <Container>
            <img src={test} className="bg" />
            <Box sx={{
                position: "relative",
                padding: "60px",
                backgroundColor: "#fffff40",
                backdropFilter: "blur(15px)"
            }}>
            </Box>


        </Container>
        


        
        /*<section>
            <img src={test} className="bg" />
            <div className="login">
                <h2>Sign In</h2>
                <div className="inputbox">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="inputbox">
                    <input type="text" placeholder="Password" />
                </div>
                <div className="inputbox">
                    <input type="submit" value="login" id="btn"/>
                </div>
                <div className="group">
                    <a href="#">Forgot Password</a>
                    <a href="3">Sign Up</a>
                </div>
            </div>
        </section>*/
    );
}

export default SignIn;