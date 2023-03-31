import { Stack } from '@mui/system';

import Chip from '@mui/material/Chip';
import { AppBar,Typography } from '@mui/material';
const primary = "#b23a68"
export default function customerBookings() {
    return (


        <div
            style={{
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Stack spacing={2} direction="column">
            <AppBar position='fixed'
                style={{
                    height:50,
                    backgroundColor:primary,
                    justifyContent:"center"
                }}>
                <Typography marginLeft={5}>EZBook</Typography>
            </AppBar>
            <Stack spacing={2} direction="column"
                style={{
                    margin:100
                }}>
                <Stack spacing={5} direction="row">
                    <Chip label="Start/End"  />
                    <Chip label="Room Capacity"  />
                    <Chip label="Area"  />
                    <Chip label="Chain"  />
                    <Chip label="Category"  />
                    <Chip label="# of Rooms"  />
                    <Chip label="Price"  />
                </Stack>
            </Stack>
            </Stack>
            
        </div>
    );
  }