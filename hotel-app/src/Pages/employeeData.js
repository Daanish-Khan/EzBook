import { Container } from '@mui/system';
import './employeeData.css';
import { COLORS } from '../components/consts'
import { Box, Chip, Stack } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import BookingsAdd from '../components/bookingsAdd'
import BookingsUpdate from '../components/bookingsUpdate'
import BookingsDel from '../components/bookingsDel'
import ChainAdd from '../components/chainAdd'
import ChainUpdate from '../components/chainUpdate'
import ChainDel from '../components/chainDel'
import HotelAdd from '../components/hotelAdd'
import HotelUpdate from '../components/hotelUpdate'
import HotelDel from '../components/hotelDel'
import RoomAdd from '../components/roomAdd'
import RoomUpdate from '../components/roomUpdate'
import RoomDel from '../components/roomDel'
import CustAdd from '../components/custAdd'
import CustUpdate from '../components/custUpdate'
import CustDel from '../components/custDel'


export default function EmployeeData({ isAdmin }) {
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
            <Stack useFlexGap sx={{ width: "100vw", height: "100vh", alignItems: 'center', justifyContent: "center" }} spacing={0} >
                <Box
                    sx={{
                        borderRadius: '3px',
                        border: 1,
                        borderColor: 'white',
                        width: '80vw',
                        justifyContent: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        height: '10vh'
                    }}>

                    <Stack direction={'column'} alignItems={'center'}>
                        <Typography sx={{ color: 'white', top: 0, left: 0 }}>Bookings</Typography>
                        <Stack direction={'row'} spacing={1}>
                            <BookingsAdd/>
                            <BookingsUpdate/>
                            <BookingsDel/>
                        </Stack>
                    </Stack>

                </Box>
                <Box
                    sx={{
                        borderRadius: '3px',
                        border: 1,
                        borderColor: 'white',
                        width: '80vw',
                        justifyContent: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        height: '10vh'
                    }}>

                    <Stack direction={'column'} alignItems={'center'}>
                        <Typography sx={{ color: 'white', top: 0, left: 0, position: 'relative' }}>Hotel Chains</Typography>
                        <Stack direction={'row'} spacing={1}>
                            <ChainAdd/>
                            <ChainUpdate/>
                            <ChainDel/>
                        </Stack>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        borderRadius: '3px',
                        border: 1,
                        borderColor: 'white',
                        width: '80vw',
                        justifyContent: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        height: '10vh'
                    }}>
                    <Stack direction={'column'} alignItems={'center'}>
                        <Typography sx={{ color: 'white', top: 0, left: 0, position: 'relative' }}>Hotels</Typography>
                        <Stack direction={'row'} spacing={1}>
                            <HotelAdd/>
                            <HotelUpdate/>
                            <HotelDel/>
                            
                        </Stack>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        borderRadius: '3px',
                        border: 1,
                        borderColor: 'white',
                        width: '80vw',
                        justifyContent: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        height: '10vh'
                    }}>
                    <Stack direction={'column'} alignItems={'center'}>
                        <Typography sx={{ color: 'white', top: 0, left: 0, position: 'relative' }}>Rooms</Typography>
                        <Stack direction={'row'} spacing={1} >
                            <RoomAdd/>
                            <RoomUpdate/>
                            <RoomDel/>
                        </Stack>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        borderRadius: '3px',
                        border: 1,
                        borderColor: 'white',
                        width: '80vw',
                        justifyContent: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        height: '10vh'
                    }}>
                    <Stack direction={'column'} alignItems={'center'}>
                        <Typography sx={{ color: 'white', top: 0, left: 0, position: 'relative' }}>Customers</Typography>
                        <Stack direction={'row'} spacing={1} justifyContent={'center'}>
                        <CustAdd/>
                        <CustUpdate/>
                        <CustDel/>

                        </Stack>
                    </Stack>

                </Box>
            </Stack>


        </Container>
    )
}
