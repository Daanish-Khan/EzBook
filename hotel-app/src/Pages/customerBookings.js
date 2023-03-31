import { Stack } from '@mui/system';
import './customerBookings.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { COLORS } from '../components/consts'
import Chip from '@mui/material/Chip';
import Navbar from './navbar';
import { FixedSizeList } from 'react-window';

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
                            color: 'white'
                        }}
                    />
                    <Chip label="Room Capacity"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white'
                        }}
                    />
                    <Chip label="Area"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white'
                        }}
                    />
                    <Chip label="Chain"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white'
                        }}
                    />
                    <Chip label="Category"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white'
                        }}
                    />
                    <Chip label="# of Rooms"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white'
                        }}
                    />

                    <Chip label="Price"
                        sx={{
                            background: COLORS.defaultColor,
                            color: 'white'
                        }}
                    />
                </Stack>
                <FixedSizeList
                    height={400}
                    width={800}
                    itemSize={46}
                    itemCount={10}
                    overscanCount={5}
                >
                {renderRow}
                </FixedSizeList>
            </Stack>

        </div>
    );
}