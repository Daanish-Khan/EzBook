import { Stack } from '@mui/system';
import { COLORS } from '../components/consts'
import Chip from '@mui/material/Chip';
import Navbar from './navbar';
import { colors } from '@mui/material';
export default function customerBookings() {
    return (


        <div
            style={{
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Navbar/>
            <Stack spacing={2} direction="column">

            <Stack spacing={2} direction="column"
                style={{
                    margin:50
                }}>
                <Stack spacing={5} direction="row">
                    <Chip label="Start/End"  
                        sx={{
                        background:COLORS.defaultColor,
                        color:'white'
                        }}
                    />
                    <Chip label="Room Capacity"  
                        sx={{
                            background:COLORS.defaultColor,
                            color:'white'
                            }}
                    />
                    <Chip label="Area"  
                        sx={{
                            background:COLORS.defaultColor,
                            color:'white'
                            }}
                    />
                    <Chip label="Chain"  
                        sx={{
                            background:COLORS.defaultColor,
                            color:'white'
                            }}
                    />
                    <Chip label="Category"  
                        sx={{
                            background:COLORS.defaultColor,
                            color:'white'
                            }}
                    />
                    <Chip label="# of Rooms"  
                        sx={{
                            background:COLORS.defaultColor,
                            color:'white'
                            }}
                    />

                    <Chip label="Price"  
                        sx={{
                            background:COLORS.defaultColor,
                            color:'white'
                            }}
                    />
                </Stack>
            </Stack>
            </Stack>
            
        </div>
    );
  }