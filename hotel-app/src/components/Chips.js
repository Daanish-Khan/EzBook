import * as React from 'react';
import { Slider, Select, MenuItem, InputLabel, FormControl, Rating, Box, Chip, Popover, Button } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { COLORS } from './consts'

function Chips() {

    //minDistance and valuetext are for displaying values on the price slider
    const minDistance = 100;

    //these look at the slider and display the correct value depending on the value between steps
    const [value, setValue] = React.useState([0, 500]);

    const [chip1Anchor, setChip1Anchor] = React.useState(null);
    const [chip2Anchor, setChip2Anchor] = React.useState(null);
    const [chip3Anchor, setChip3Anchor] = React.useState(null);
    const [chip4Anchor, setChip4Anchor] = React.useState(null);
    const [chip5Anchor, setChip5Anchor] = React.useState(null);
    const [chip6Anchor, setChip6Anchor] = React.useState(null);
    const [chip7Anchor, setChip7Anchor] = React.useState(null);

    const [startChipText, setStartChipText] = React.useState(dayjs(new Date()));
    const [endChipText, setEndChipText] = React.useState(dayjs(new Date()).add(1,'day'))
    const [areaChipText, setAreaChipText] = React.useState('');
    const [chainChipText, setChainChipText] = React.useState('');
    const [categoryChipText, setCategoryChipText] = React.useState(2);
    const [roomChipText, setRoomChipText] = React.useState('');
    const [priceChipText, setPriceChipText] = React.useState('');


    const sliderHandleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
            setPriceChipText([Math.min(newValue[0], value[1] - minDistance), value[1]].toString());
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
            setPriceChipText([value[0], Math.max(newValue[1], value[0] + minDistance)].toString());
        }
    };

    const handleClose = () => {
        chips.forEach(function (items) {
            items.anchor.set(null);
        })
    }

    const chips = [
        {
            key: 0, label: 'Start Date', 
            component:
            <DateCalendar value={startChipText} maxDate={endChipText} onChange={(newValueStartDate) => {setStartChipText(newValueStartDate)}}/>, 
            handleClick: (event) => {setChip1Anchor(event.currentTarget)}, 
            anchor: {get: chip1Anchor, set: setChip1Anchor}, 
            open: Boolean(chip1Anchor),
            text: { get: new Date(startChipText).toLocaleDateString('en-ca', { weekday:"short", year:"numeric", month:"short", day:"numeric"}), set: setStartChipText }
            
        },
        {
            key: 1, label: 'End Date', 
            component: <DateCalendar value={endChipText} minDate={startChipText} onChange={(newValueEndDate) => {setEndChipText(newValueEndDate)}}/>, 
            handleClick: (event) => {setChip2Anchor(event.currentTarget)}, 
            anchor: {get: chip2Anchor, set: setChip2Anchor}, 
            open: Boolean(chip2Anchor),
            text: { get: new Date(endChipText).toLocaleDateString('en-ca', { weekday:"short", year:"numeric", month:"short", day:"numeric"}), set: setEndChipText}
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
                                    onChange={(event) => {setAreaChipText(event.target.value)}}
                                >
                                    <MenuItem value="Test">Test1</MenuItem>
                                    <MenuItem value="Test2">Test2</MenuItem>
                                    <MenuItem value="Test3">Test3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>, 
            handleClick: (event) => {setChip3Anchor(event.currentTarget)}, 
            anchor: {get: chip3Anchor, set: setChip3Anchor}, 
            open: Boolean(chip3Anchor),
            text: { get: areaChipText, set: setAreaChipText }
        },
        {
            key: 3, label: 'Chain', 
            component: <Box sx={{minWidth: 100, padding: 1}}>
                            <FormControl fullWidth>
                                <InputLabel sx={{marginTop: 0.5}}>Chain</InputLabel>
                                <Select
                                    
                                    value={chainChipText}
                                    label="Chain"
                                    sx={{color: COLORS.defaultColor}}
                                    onChange={(event) => {setChainChipText(event.target.value)}}
                                >
                                    <MenuItem value="Test">Test1</MenuItem>
                                    <MenuItem value="Test2">Test2</MenuItem>
                                    <MenuItem value="Test3">Test3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>,
            handleClick: (event) => {setChip4Anchor(event.currentTarget)}, 
            anchor: {get: chip4Anchor, set: setChip4Anchor}, 
            open: Boolean(chip4Anchor),
            text: { get: chainChipText, set: setChainChipText }
        },
        {
            key: 4, label: 'Category', 
            component: <Box sx={{minWidth: 100, padding: 1}}>
                            <FormControl fullWidth>
                                    <Rating 
                                        name="simple-controlled"
                                        value={categoryChipText}
                                        onChange={(event, newValue) => {
                                            setCategoryChipText(newValue);
                                        }}
                                        sx={{
                                            "& label": {
                                                overflowX: "hidden"
                                            }
                                        }}
                                    />
                            </FormControl>
                        </Box>,
            handleClick: (event) => {setChip5Anchor(event.currentTarget)}, 
            anchor: {get: chip5Anchor, set: setChip5Anchor},    
            open: Boolean(chip5Anchor),
            text: { get: categoryChipText, set: setCategoryChipText }
        },
        {
            key: 5, label: '# of Rooms', 
            component: <Box sx={{minWidth: 100, padding: 1}}>
                            <FormControl fullWidth>
                                <InputLabel sx={{marginTop: 0.5}}># of Rooms</InputLabel>
                                <Select
                                    
                                    value={roomChipText}
                                    label="# of Rooms"
                                    sx={{color: COLORS.defaultColor}}
                                    onChange={(event) => {console.log("test"); setRoomChipText(event.target.value)}}
                                >
                                    <MenuItem value="Test1">Test1</MenuItem>
                                    <MenuItem value="Test2">Test2</MenuItem>
                                    <MenuItem value="Test3">Test3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>, 
            handleClick: (event) => {setChip6Anchor(event.currentTarget)}, 
            anchor: {get: chip6Anchor, set: setChip6Anchor}, 
            open: Boolean(chip6Anchor),
            text: { get: roomChipText, set: setRoomChipText }
        },
        {
            key: 6, label: 'Price', 
            component: <Box minWidth={200} minHeight={50} sx={{position: "relative", marginX: 2, overflow: "visible"}}>
                            
                            <Slider
                                step={100}
                                marks
                                min={0}
                                max={1000}
                                getAriaLabel={() => 'Price Range'}
                                onChange={sliderHandleChange}
                                valueLabelDisplay="auto"
                                value={value}
                                disableSwap
                                sx={{ '& .MuiSlider-thumb::after': {width:0}, position: "static"}}
                            /> 
                        </Box>, 
            handleClick: (event) => {setChip7Anchor(event.currentTarget)}, 
            anchor: {get: chip7Anchor, set: setChip7Anchor}, 
            open: Boolean(chip7Anchor),
            text: { get: priceChipText, set: setPriceChipText }
        },
    ];

    return (

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
                            label={data.text.get === '' ? data.label : data.label + ": " + data.text.get}
                            onClick={data.handleClick}
                            sx={{
                                color: "white",
                                backgroundColor: COLORS.defaultColor,
                                margin: "10px",

                                '&:hover': {
                                    backgroundColor: COLORS.focusedColor
                                }
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
             <div style={{width:"max-content", display: "inline-block", margin: 0}}>
                <Button
                        sx={{
                            color: 'white',  
                            backgroundColor: COLORS.primaryColor, 
                            borderRadius:"15px",
                            margin: "8px",
                            ':hover': {
                                backgroundColor: COLORS.primaryFocusedColor
                            }
                        }}
                    >
                        Search
                    </Button>
             </div>
            
        </Box>
        
    );
}

export default Chips;