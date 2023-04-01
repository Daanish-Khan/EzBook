import { Container } from '@mui/system';
import './customerBookings.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { COLORS } from '../components/consts'
import { Chip, Grid, Box } from '@mui/material';
import Navbar from '../components/navbar';
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
        <Container disableGutters maxWidth="false"
        sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            padding: 0,
            margin: 0,
        }}>
            <div className='bg' />
            <Navbar sx={{
                borderBottomLeftRadius: "20px", 
                borderBottomRightRadius: "20px", 
                backgroundColor: COLORS.defaultColor,
                top: "0",
                left: "0",
                position: "absolute",
            }}/>
            <Box
                sx={{
                    position: "relative",
                    padding: "60px",
                    paddingTop: "20px",
                    marginTop: "90px",
                    marginBottom: "25px",
                    marginX: "20px",
                    backgroundColor: "#fffff40",
                    backdropFilter: "blur(15px)",
                    border: "1px solid #fff",
                    borderBottom: "1px solid #ffffff80",
                    borderRight: "1px solid #ffffff80",
                    borderRadius: "20px",
                    width: "100vw",
                    boxShadow: "0 25px 50px #0000001a",
                }}>
                    <Grid container spacing={1} 
                        sx={{
                            width: "50%"
                        }}
                    >
                        <Grid item xs={1}>
                            <Chip label="Start/End"
                                sx={{
                                    background: COLORS.defaultColor,
                                    color: 'white'
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <Chip label="Area"
                                sx={{
                                    background: COLORS.defaultColor,
                                    color: 'white'
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <Chip label="Chain"
                                sx={{
                                    background: COLORS.defaultColor,
                                    color: 'white'
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <Chip label="Category"
                                sx={{
                                    background: COLORS.defaultColor,
                                    color: 'white'
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <Chip label="# of Rooms"
                                sx={{
                                    background: COLORS.defaultColor,
                                    color: 'white'
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <Chip label="Price"
                                sx={{
                                    background: COLORS.defaultColor,
                                    color: 'white'
                                }}
                            />
                        </Grid>
                    </Grid>
                    <FixedSizeList
                                    height={400}
                                    width={800}
                                    itemSize={46}
                                    itemCount={10}
                                    overscanCount={5}
                            >
                                {renderRow}
                            </FixedSizeList>  
                </Box>
        </Container>
        
    );
}