import { Stack } from '@mui/system';
import './customerBookings.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { COLORS } from '../components/consts'
import Chip from '@mui/material/Chip';
import Navbar from './navbar';
import { FixedSizeList } from 'react-window';
import { responsiveFontSizes } from '@mui/material';

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Booking ${index + 1}`}
                style={{
                    color:'white'

                }}>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}
export default function customerBookings() {
    return (


        <div className='bg'
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 50
            }}>
            <Navbar />

            <Stack spacing={2} direction="column"
                style={{
                    margin: 50
                }}>
                <Stack spacing={5} direction="row">
                    <Chip label="Start/End"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white',
                            height:50,
                            fontSize:30
                        }}
                    />
                    <Chip label="Room Capacity"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white',
                            height:50,
                            fontSize:30
                        }}
                    />
                    <Chip label="Area"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white',
                            height:50,
                            fontSize:30
                        }}
                    />
                    <Chip label="Chain"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white',
                            height:50,
                            fontSize:30
                        }}
                    />
                    <Chip label="Category"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white',
                            height:50,
                            fontSize:30
                        }}
                    />
                    <Chip label="# of Rooms"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white',
                            height:50,
                            fontSize:30
                        }}
                    />

                    <Chip label="Price"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white',
                            fontSize:30,
                            height:50
                        }}
                    />
                </Stack>
                <FixedSizeList
                    height={700}
                    width={1300}
                    itemSize={46}
                    itemCount={20}
                    overscanCount={5}
                >
                {renderRow}
                </FixedSizeList>
            </Stack>

        </div>
    );
}