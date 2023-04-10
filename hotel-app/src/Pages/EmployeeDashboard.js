import { Container } from '@mui/system';
import './EmployeeDashboard.css';
import { COLORS } from '../components/consts'
import { Box, Divider, Stack, Grid } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import BookingsAdd from '../components/dashboard/bookings/bookingsAdd'
import BookingsUpdate from '../components/dashboard/bookings/bookingsUpdate'
import BookingsDel from '../components/dashboard/bookings/bookingsDel'
import ChainAdd from '../components/dashboard/chain/chainAdd'
import ChainUpdate from '../components/dashboard/chain/chainUpdate'
import ChainDel from '../components/dashboard/chain/chainDel'
import HotelAdd from '../components/dashboard/hotel/hotelAdd'
import HotelUpdate from '../components/dashboard/hotel/hotelUpdate'
import HotelDel from '../components/dashboard/hotel/hotelDel'
import RoomAdd from '../components/dashboard/room/roomAdd'
import RoomUpdate from '../components/dashboard/room/roomUpdate'
import RoomDel from '../components/dashboard/room/roomDel'
import CustomerAdd from '../components/dashboard/customers/custAdd'
import CustomerUpdate from '../components/dashboard/customers/custUpdate'
import CustomerDel from '../components/dashboard/customers/custDel'
import Waves from '../components/Waves';
import Navbar from '../components/navbar';


export default function EmployeeDashboard({ auth, authHandle }) {
    return (
        <Container disableGutters maxWidth="false"
            sx={{
                display: "flex",
                width: "100vw",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
            }}>

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
            <Stack useFlexGap sx={{width: "100vw", height: "100vh"}} spacing={0} justifyContent="center">
                
                <Navbar 
                    sx={{
                        borderBottomLeftRadius: "20px", 
                        borderBottomRightRadius: "20px", 
                        backgroundColor: COLORS.defaultColor,
                        top: "0",
                        left: "0",
                        padding: 0,
                        margin: 0,
                        position: "absolute",
                    }}
                    isAdmin={auth.isAdmin}
                    authHandle={authHandle}
                />

                <Box
                    sx={{
                        position: "relative",
                        padding: "60px",
                        paddingTop: "20px",
                        marginX: "100px",
                        backgroundColor: "#fffff40",
                        backdropFilter: "blur(15px)",
                        border: "1px solid #fff",
                        borderBottom: "1px solid #ffffff80",
                        borderRight: "1px solid #ffffff80",
                        borderRadius: "20px",
                        boxShadow: "0 25px 50px #0000001a",
                    }}
                >
                    <Typography variant="h2" sx={{ color: COLORS.defaultColor, top: 0, left: 0, paddingBottom: "30px", paddingTop:"30px" }}>Edit Info</Typography>
                    <Stack direction={'column'} alignItems={'center'} spacing={5}>
                        <Divider 
                                sx={{
                                    '&:before': {borderColor: "white", borderWidth: "2px"}, 
                                    '&:after': {borderColor: "white", borderWidth: "2px"},
                                    '& .MuiDivider-wrapper': {  
                                        paddingLeft: "calc(2px * 10)",
                                        paddingRight: "calc(2px * 10)",
                                        overflow: "visible"
                                    },
                                    color: "white",
                                    width: "100%"
                                    
                                }}>
                                    <Typography variant="h6" sx={{ color: 'white', top: 0, left: 0, }}>Bookings</Typography>
                        </Divider>
                        <Stack direction={'row'} spacing={2}>
                            <BookingsAdd/>
                            <BookingsUpdate/>
                            <BookingsDel/>
                        </Stack>

                        <Divider 
                                sx={{
                                    '&:before': {borderColor: "white", borderWidth: "2px"}, 
                                    '&:after': {borderColor: "white", borderWidth: "2px"},
                                    '& .MuiDivider-wrapper': {  
                                        paddingLeft: "calc(2px * 10)",
                                        paddingRight: "calc(2px * 10)",
                                        overflow: "visible"
                                    },
                                    color: "white",
                                    width: "100%"
                                    
                                }}>
                                    <Typography variant="h6" sx={{ color: 'white', top: 0, left: 0 }}>Chains</Typography>
                        </Divider>
                        <Stack direction={'row'} spacing={2}>
                            <ChainAdd/>
                            <ChainUpdate/>
                            <ChainDel/>
                        </Stack>

                        <Divider 
                                sx={{
                                    '&:before': {borderColor: "white", borderWidth: "2px"}, 
                                    '&:after': {borderColor: "white", borderWidth: "2px"},
                                    '& .MuiDivider-wrapper': {  
                                        paddingLeft: "calc(2px * 10)",
                                        paddingRight: "calc(2px * 10)",
                                        overflow: "visible"
                                    },
                                    color: "white",
                                    width: "100%"
                                    
                                }}>
                                    <Typography variant="h6" sx={{ color: 'white', top: 0, left: 0 }}>Hotels</Typography>
                        </Divider>
                        <Stack direction={'row'} spacing={2}>
                            <HotelAdd/>
                            <HotelUpdate/>
                            <HotelDel/>
                        </Stack>

                        <Divider 
                                sx={{
                                    '&:before': {borderColor: "white", borderWidth: "2px"}, 
                                    '&:after': {borderColor: "white", borderWidth: "2px"},
                                    '& .MuiDivider-wrapper': {  
                                        paddingLeft: "calc(2px * 10)",
                                        paddingRight: "calc(2px * 10)",
                                        overflow: "visible"
                                    },
                                    color: "white",
                                    width: "100%"
                                    
                                }}>
                                    <Typography variant="h6" sx={{ color: 'white', top: 0, left: 0 }}>Rooms</Typography>
                        </Divider>
                        <Stack direction={'row'} spacing={2}>
                            <RoomAdd/>
                            <RoomUpdate/>
                            <RoomDel/>
                        </Stack>

                        <Divider 
                                sx={{
                                    '&:before': {borderColor: "white", borderWidth: "2px"}, 
                                    '&:after': {borderColor: "white", borderWidth: "2px"},
                                    '& .MuiDivider-wrapper': {  
                                        paddingLeft: "calc(2px * 10)",
                                        paddingRight: "calc(2px * 10)",
                                        overflow: "visible"
                                    },
                                    color: "white",
                                    width: "100%"
                                    
                                }}>
                                    <Typography variant="h6" sx={{ color: 'white', top: 0, left: 0 }}>Customers</Typography>
                        </Divider>
                        <Stack direction={'row'} spacing={2}>
                            <CustomerAdd/>
                            <CustomerUpdate/>
                            <CustomerDel/>
                        </Stack>
                    </Stack>
                </Box>
                
                
            </Stack>


        </Container>
    )
}
