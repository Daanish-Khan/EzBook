import { Container } from '@mui/system';
import './employeeData.css';
import { COLORS } from '../components/consts'
import { Box, Chip, Stack } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import EmployeeStepper from '../components/EmployeeStepper.js';

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
                        <Chip label="Add" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                            <Chip label="Update" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                            <Chip label="Delete" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
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
                        <Chip label="Add" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                            <Chip label="Update" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                            <Chip label="Delete" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
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
                        <Chip label="Add" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                            <Chip label="Update" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                            <Chip label="Delete" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
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
                        <Chip label="Add" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                            <Chip label="Update" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                            <Chip label="Delete" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
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
                            <Chip label="Add" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                            <Chip label="Update" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                            <Chip label="Delete" sx={{backgroundColor:COLORS.primaryColor, color:'white'}}/>
                        </Stack>
                    </Stack>

                </Box>
            </Stack>


        </Container>
    )
}
