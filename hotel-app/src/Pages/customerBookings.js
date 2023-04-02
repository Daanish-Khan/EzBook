import { Container } from '@mui/system';
import './customerBookings.css';
import { COLORS } from '../components/consts'
import { Chip, Stack, Box, Popover, TextField, Slider } from '@mui/material';
import Navbar from '../components/navbar';
import Waves from '../components/Waves';
import BookingList from '../components/BookingList';
import * as React from 'react';

const chips = [
    {key: 0, label: 'Start - End Date'},
    {key: 1, label: 'Area'},
    {key: 2, label: 'Chain'},
    {key: 3, label: 'Category'},
    {key: 4, label: '# of Rooms'},
    {key: 5, label: 'Price'}
];

function valuetext(value) {
    return `${value}`;
}

export default function CustomerBookings() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState([20, 37]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'popover' : undefined;

    return (
        <Container disableGutters maxWidth="false"
        sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div className='bg' />

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
                        height: "55vh",
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
            
            <Stack useFlexGap sx={{width: "100vw", height: "100vh"}} spacing={0} >
                <Navbar sx={{
                    borderBottomLeftRadius: "20px", 
                    borderBottomRightRadius: "20px", 
                    backgroundColor: COLORS.defaultColor,
                    top: "0",
                    left: "0",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                }}/>
                
                <Slider defaultValue={50} aria-label="Default" sx={{}}/>
                <Box
                    sx={{
                        position: "relative",
                        marginX: "100px",
                        marginTop: "50px"
                    }}
                >
                    
                    {chips.map((data) => {
                        return (
                            <div style={{width:"max-content", display: "inline-block", margin: 0}}>
                                <Chip 
                                    label={data.label}
                                    onClick={handleClick}
                                    sx={{
                                        color: "white",
                                        backgroundColor: COLORS.defaultColor,
                                        margin: "10px"
                                    }}
                                />
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left'
                                    }}
                                
                                >
                                     
                                </Popover>
                            </div>
                            
                        );
                    })}
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        padding: "60px",
                        paddingTop: "20px",
                        marginTop: "10px",
                        marginX: "100px",
                        backgroundColor: "#fffff40",
                        backdropFilter: "blur(15px)",
                        border: "1px solid #fff",
                        borderBottom: "1px solid #ffffff80",
                        borderRight: "1px solid #ffffff80",
                        borderRadius: "20px",
                        height: "75vh",
                        boxShadow: "0 25px 50px #0000001a",
                    }}
                >
                    <BookingList gutter_size={5} itemCount={100} />
                </Box>
            </Stack>
        </Container>
        
    );
}