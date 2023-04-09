import * as React from 'react';
import { Slider, Select, MenuItem, InputLabel, FormControl, Rating, Box, Chip, Popover, Button } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { COLORS } from './consts'

function Chips({chipHandle}) {

    //minDistance and valuetext are for displaying values on the price slider
    const minDistance = 100;

    //these look at the slider and display the correct value depending on the value between steps
    const [value, setValue] = React.useState([0, 500]);

    const [startAnchor, setStartAnchor] = React.useState(null);
    const [endAnchor, setEndAnchor] = React.useState(null);
    const [cityAnchor, setCityAnchor] = React.useState(null);
    const [countryAnchor, setCountryAnchor] = React.useState(null);
    const [chainAnchor, setChainAnchor] = React.useState(null);
    const [categoryAnchor, setCategoryAnchor] = React.useState(null);
    const [roomAnchor, setRoomAnchor] = React.useState(null);
    const [capacityAnchor, setCapacityAnchor] = React.useState(null);
    const [priceAnchor, setPriceAnchor] = React.useState(null);

    const [startChipText, setStartChipText] = React.useState(dayjs(new Date()));
    const [endChipText, setEndChipText] = React.useState(dayjs(new Date()).add(1,'day'))
    const [cityChipText, setCityChipText] = React.useState('');
    const [countryChipText, setCountryChipText] = React.useState('');
    const [chainChipText, setChainChipText] = React.useState('');
    const [categoryChipText, setCategoryChipText] = React.useState(2);
    const [roomChipText, setRoomChipText] = React.useState('');
    const [capacityChipText, setCapacityChipText] = React.useState('');
    const [priceChipText, setPriceChipText] = React.useState('');

    React.useEffect(() => {
        const data = {
            start_date: new Date(startChipText).toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0],
            end_date: new Date(endChipText).toLocaleString('en-CA', {timeZone: "America/Toronto"}).split(',')[0],
            room_capacity: roomChipText,
            city: cityChipText,
            country: countryChipText,
            chain: chainChipText,
            rating: categoryChipText,
            num_room: roomChipText,
            price_low: priceChipText.split(",")[0],
            price_high: priceChipText.split(",")[1] === undefined ? "" : priceChipText.split(",")[1],
        }
        chipHandle(data);
    }, [startChipText, endChipText, cityChipText, countryChipText, chainChipText, categoryChipText, roomChipText, priceChipText, chipHandle])


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
            handleClick: (event) => {setStartAnchor(event.currentTarget)}, 
            anchor: {get: startAnchor, set: setStartAnchor}, 
            open: Boolean(startAnchor),
            text: { get: new Date(startChipText).toLocaleDateString('en-ca', { weekday:"short", year:"numeric", month:"short", day:"numeric"}), set: setStartChipText }
            
        },
        {
            key: 1, label: 'End Date', 
            component: <DateCalendar value={endChipText} minDate={startChipText} onChange={(newValueEndDate) => {setEndChipText(newValueEndDate)}}/>, 
            handleClick: (event) => {setEndAnchor(event.currentTarget)}, 
            anchor: {get: endAnchor, set: setEndAnchor}, 
            open: Boolean(endAnchor),
            text: { get: new Date(endChipText).toLocaleDateString('en-ca', { weekday:"short", year:"numeric", month:"short", day:"numeric"}), set: setEndChipText}
        },
        {
            key: 2, label: 'City', 
            component: <Box sx={{minWidth: 100, padding: 1}}>
                            <FormControl fullWidth>
                                <InputLabel sx={{marginTop: 0.5}}>City</InputLabel>
                                <Select
                                      
                                    value={cityChipText}
                                    label="City"
                                    sx={{color: COLORS.defaultColor}}
                                    onChange={(event) => {setCityChipText(event.target.value)}}
                                >
                                    <MenuItem value="Test">Test1</MenuItem>
                                    <MenuItem value="Test2">Test2</MenuItem>
                                    <MenuItem value="Test3">Test3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>, 
            handleClick: (event) => {setCityAnchor(event.currentTarget)}, 
            anchor: {get: cityAnchor, set: setCityAnchor}, 
            open: Boolean(cityAnchor),
            text: { get: cityChipText, set: setCityChipText }
        },
        {
            key: 3, label: 'Country', 
            component: <Box sx={{minWidth: 100, padding: 1}}>
                            <FormControl fullWidth>
                                <InputLabel sx={{marginTop: 0.5}}>Country</InputLabel>
                                <Select
                                      
                                    value={countryChipText}
                                    label="Country"
                                    sx={{color: COLORS.defaultColor}}
                                    onChange={(event) => {setCountryChipText(event.target.value)}}
                                >
                                    <MenuItem value="Test">Test1</MenuItem>
                                    <MenuItem value="Test2">Test2</MenuItem>
                                    <MenuItem value="Test3">Test3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>, 
            handleClick: (event) => {setCountryAnchor(event.currentTarget)}, 
            anchor: {get: countryAnchor, set: setCountryAnchor}, 
            open: Boolean(countryAnchor),
            text: { get: countryChipText, set: setCountryChipText }
        },
        {
            key: 4, label: 'Chain', 
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
            handleClick: (event) => {setChainAnchor(event.currentTarget)}, 
            anchor: {get: chainAnchor, set: setChainAnchor}, 
            open: Boolean(chainAnchor),
            text: { get: chainChipText, set: setChainChipText }
        },
        {
            key: 5, label: 'Category', 
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
            handleClick: (event) => {setCategoryAnchor(event.currentTarget)}, 
            anchor: {get: categoryAnchor, set: setCategoryAnchor},    
            open: Boolean(categoryAnchor),
            text: { get: categoryChipText, set: setCategoryChipText }
        },
        {
            key: 6, label: '# of Rooms in Hotel', 
            component: <Box sx={{minWidth: 100, padding: 1}}>
                            <FormControl fullWidth>
                                <InputLabel sx={{marginTop: 0.5}}># of Rooms</InputLabel>
                                <Select
                                    
                                    value={roomChipText}
                                    label="# of Rooms"
                                    sx={{color: COLORS.defaultColor}}
                                    onChange={(event) => {setRoomChipText(event.target.value)}}
                                >
                                    <MenuItem value="Test1">Test1</MenuItem>
                                    <MenuItem value="Test2">Test2</MenuItem>
                                    <MenuItem value="Test3">Test3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>, 
            handleClick: (event) => {setRoomAnchor(event.currentTarget)}, 
            anchor: {get: roomAnchor, set: setRoomAnchor}, 
            open: Boolean(roomAnchor),
            text: { get: roomChipText, set: setRoomChipText }
        },
        {
            key: 7, label: 'Capacity', 
            component: <Box sx={{minWidth: 100, padding: 1}}>
                            <FormControl fullWidth>
                                <InputLabel sx={{marginTop: 0.5}}>Capacity</InputLabel>
                                <Select
                                    
                                    value={capacityChipText}
                                    label="Capacity"
                                    sx={{color: COLORS.defaultColor}}
                                    onChange={(event) => {setCapacityChipText(event.target.value)}}
                                >
                                    <MenuItem value="Test1">Test1</MenuItem>
                                    <MenuItem value="Test2">Test2</MenuItem>
                                    <MenuItem value="Test3">Test3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>, 
            handleClick: (event) => {setCapacityAnchor(event.currentTarget)}, 
            anchor: {get: capacityAnchor, set: setCapacityAnchor}, 
            open: Boolean(capacityAnchor),
            text: { get: capacityChipText, set: setCapacityChipText }
        },
        {
            key: 8, label: 'Price', 
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
            handleClick: (event) => {setPriceAnchor(event.currentTarget)}, 
            anchor: {get: priceAnchor, set: setPriceAnchor}, 
            open: Boolean(priceAnchor),
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
                    <div style={{width:"max-content", display: "inline-block", margin: 0}} key={data.key}>
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
        </Box>
        
    );
}

export default Chips;