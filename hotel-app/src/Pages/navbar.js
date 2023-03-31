import { AppBar,Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { COLORS } from '../components/consts'
import Chip from '@mui/material/Chip';

export default function navbar() {
    return(
        <AppBar position='fixed'
        style={{
            height:50,
            backgroundColor:COLORS.primaryColor,
            justifyContent:"center"
        }}>
        <Stack spacing={2} direction="row"
        style={{
            alignContent:"center"
        }}>
            <Typography marginRight={5} marginLeft={5} marginTop={0.5}>EZBook</Typography>
            <Chip label="Book Now"  
                sx={{
                color:'white'
                }}
            />
            <Chip label="My Trips"  
                sx={{
                color:'white'
                }}
            />  
            
        </Stack>
        
    </AppBar>



    );
}