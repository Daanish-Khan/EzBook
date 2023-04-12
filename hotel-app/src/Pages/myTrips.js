import { Container } from '@mui/system';
import './myTrips.css';
import { COLORS } from '../components/consts'
import { Stack, Box } from '@mui/material';
import Navbar from '../components/navbar';
import Waves from '../components/Waves';
import BookingList from '../components/BookingList';
import Chips from '../components/Chips.js';
import axios from 'axios';

import * as React from 'react';
import BookingModal from '../components/BookingModal';
import { useNavigate } from 'react-router-dom';

export default function CustomerBookings({auth, authHandle}) {
    const handleClickBooking = () => {
        console.log(":)")
    };
    const [data, setData] = React.useState([]);
    const navigator = useNavigate();
    const myTripsData = {SSN:auth.SSN}
    React.useEffect(() => {
        if (auth.SSN === 0) {
            navigator('/');
        }
    })

    React.useEffect(() => {

        const fetch = async () => {
            try {
                console.log()
                const bookings = await axios.post("http://localhost:8800/myTrips", myTripsData )
                console.log(bookings.data)
                setData(bookings.data)
            } catch (err) {
                console.log(err.message)
                console.log("hi :)")
            }
        }

        fetch();
        
    }, []);

    return (
        <Container disableGutters maxWidth="false"
            sx={{
                display: "flex",
                width: "100vw",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            
            <div className="bg" />

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
                        height: "70vh",
                        bottom:"0px",
                        left:"0px",
                        margin: "0px"
                    }}
                    gap={100}
                    height={500}
                    speed={0.35}
                    points={5}
                    amplitude={20}
                />
            
            <Stack useFlexGap sx={{width: "100vw", height: "100vh"}} spacing={0} >
                <Navbar onBookingsPage={false}
                    sx={{
                        borderBottomLeftRadius: "20px", 
                        borderBottomRightRadius: "20px", 
                        backgroundColor: COLORS.defaultColor,
                        top: "0",
                        left: "0",
                        padding: 0,
                        margin: 0,
                        position: "relative",
                    }}
                    isAdmin={auth.isAdmin}
                    authHandle={authHandle}
                />
                
                
                <Box
                    sx={{
                        position: "relative",
                        padding: "60px",
                        paddingTop: "20px",
                        marginTop: "10px",
                        marginX: "100px",
                        backgroundColor: "#fffff40",
                        backdropFilter: "blur(15px)",
                        border: "1px solid #fff",
                        borderBottom: "1px solid #ffffff80",
                        borderRight: "1px solid #ffffff80",
                        borderRadius: "20px",
                        height: "75vh",
                        boxShadow: "0 25px 50px #0000001a",
                    }}
                >
                    <BookingList gutter_size={5} itemCount={Object.keys(data).length} auth={auth} data={data} bookingClick={handleClickBooking}/>
                </Box>
            </Stack>
        </Container>
        
    );
}