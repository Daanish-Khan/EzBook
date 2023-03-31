import { AppBar,Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { COLORS } from '../components/consts'
import Chip from '@mui/material/Chip';
import { borders } from '@mui/system';

export default function navbar() {
    return(
        <AppBar position='fixed'
        sx={{
            height:80,
            backgroundColor:COLORS.primaryColor,
            justifyContent:"center",
            borderBottomLeftRadius:32,
            borderBottomRightRadius:32
        }}>
        <Stack spacing={5} direction={"row"}>
        <Typography marginLeft={5} marginTop={0} fontSize={25}>EZBook</Typography>
        <Stack spacing={2} direction="row"
        style={{
            alignContent:"center"
        }}>
            
            <Chip label="Book Now"  
                sx={{
                    fontSize:20,
                color:'white'
                }}
            />
            <Chip label="My Trips"  
                sx={{
                    fontSize:20,
                color:'white'
                }}
            />  
            
        </Stack>
        </Stack>
       
        
        
    </AppBar>



    );
}