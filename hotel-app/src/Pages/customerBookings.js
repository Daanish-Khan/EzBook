import { Container } from '@mui/system';
import './customerBookings.css';
import { COLORS } from '../components/consts'
import { Chip, Stack, Box, Popover, Slider, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import Navbar from '../components/navbar';
import Waves from '../components/Waves';
import BookingList from '../components/BookingList';
import * as React from 'react';
import { DateCalendar } from '@mui/x-date-pickers';

//minDistance and valuetext are for displaying values on the price slider

const minDistance = 100;
function valuetext(value) {
    return `${value}°C`;
  }


export default function CustomerBookings() {

//these look at the slider and display the correct value depending on the value between steps
    const [value1, setValue1] = React.useState([0, 500]);
    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
          setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
          setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
      };

    const [chip1Anchor, setChip1Anchor] = React.useState(null);
    const [chip2Anchor, setChip2Anchor] = React.useState(null);
    const [chip3Anchor, setChip3Anchor] = React.useState(null);
    const [chip4Anchor, setChip4Anchor] = React.useState(null);
    const [chip5Anchor, setChip5Anchor] = React.useState(null);
    const [chip6Anchor, setChip6Anchor] = React.useState(null);
    const [chip7Anchor, setChip7Anchor] = React.useState(null);

    const [areaChipText, setAreaChipText] = React.useState('');

    const chips = [
        {
            key: 0, label: 'Start Date', 
            component: <DateCalendar />, 
            handleClick: (event) => {setChip1Anchor(event.currentTarget)}, 
            anchor: {get: chip1Anchor, set: setChip1Anchor}, 
            open: Boolean(chip1Anchor)
        },
        {
            key: 1, label: 'End Date', 
            component: <DateCalendar />, 
            handleClick: (event) => {setChip2Anchor(event.currentTarget)}, 
            anchor: {get: chip2Anchor, set: setChip2Anchor}, 
            open: Boolean(chip2Anchor)
        },
        {
            key: 2, label: 'Area', 
            component: <Box sx={{minWidth: 100, padding: 1}}>
                            <FormControl fullWidth>
                                <InputLabel sx={{marginTop: 0.5}}>Area</InputLabel>
                                <Select
                                      
                                    value={areaChipText}
                                    label="Area"
                                    sx={{color: COLORS.defaultColor}}
                                    onChange={(event) => {console.log("test"); setAreaChipText(event.target.value)}}
                                >
                                    <MenuItem value="Test">Test1</MenuItem>
                                    <MenuItem value="Test2">Test2</MenuItem>
                                    <MenuItem value="Test3">Test3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>, 
            handleClick: (event) => {setChip3Anchor(event.currentTarget)}, 
            anchor: {get: chip3Anchor, set: setChip3Anchor}, 
            open: Boolean(chip3Anchor)
        },
        {
            key: 3, label: 'Chain', 
            component: <div>wololo3</div>, 
            handleClick: (event) => {setChip4Anchor(event.currentTarget)}, 
            anchor: {get: chip4Anchor, set: setChip4Anchor}, 
            open: Boolean(chip4Anchor)},
        {
            key: 4, label: 'Category', 
            component: <div>wololo4</div>, 
            handleClick: (event) => {setChip5Anchor(event.currentTarget)}, 
            anchor: {get: chip5Anchor, set: setChip5Anchor}, 
            open: Boolean(chip5Anchor)
        },
        {
            key: 5, label: '# of Rooms', 
            component: <div>wololo5</div>, 
            handleClick: (event) => {setChip6Anchor(event.currentTarget)}, 
            anchor: {get: chip6Anchor, set: setChip6Anchor}, 
            open: Boolean(chip6Anchor)
        },
        {
            key: 6, label: 'Price', 
            component: <Box minWidth={200} minHeight={70}>
                            <Slider
                                step={100}
                                marks
                                min={0}
                                max={1000}
                                getAriaLabel={() => 'Price Range'}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                value={value1}
                                getAriaValueText={valuetext}
                                disableSwap
                                sx={{ '& .MuiSlider-thumb::after': {width:0}, position:"static"}}
                            /> 
                        </Box>, 
            handleClick: (event) => {setChip7Anchor(event.currentTarget)}, 
            anchor: {get: chip7Anchor, set: setChip7Anchor}, 
            open: Boolean(chip7Anchor)
        },
    ];

    const handleClose = () => {
        chips.forEach(function (items) {
            items.anchor.set(null);
        })
    }

    return (
        <Container disableGutters maxWidth="false"
            sx={{
                display: "flex",
                width: "100vw",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            
            <div className="bg" />

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
                        height: "70vh",
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
                                    onClick={data.handleClick}
                                    sx={{
                                        color: "white",
                                        backgroundColor: COLORS.defaultColor,
                                        margin: "10px"
                                    }}
                                />
                                <Popover
                                    open={data.open}
                                    anchorEl={data.anchor.get}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left'
                                    }}
                                    
                                >
                                    {data.component}
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