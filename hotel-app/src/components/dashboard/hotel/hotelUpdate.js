import Button from '@mui/material/Button';
import * as React from 'react';
import { Divider, Typography, Grid, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import axios from 'axios';


export default function BookingsUpdate() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setUpdateText({
            updates:"hotel",
            address:"",
            chain_name: "",
            city:"",
            country:"",
            rating:"",
            num_rooms:"",
            phonenumber:"",
            manager:"",
        })
        setSearchError('')
        setSubmitError('')
    };
    const [open, setOpen] = React.useState(false);
    const textsx={
        '& .MuiFormHelperText-root': {
            color: "#ffff"
        },
        '& .MuiInputBase-root.Mui-focused': {
            backgroundColor: "#ffff"
        },
        '& .MuiInputBase-root': {
            backgroundColor: "#ffff"
        },
        '& .MuiInputBase-root:hover': {
            backgroundColor: "#ffff",
        },
        
        '&:hover label': {
            color: COLORS.focusedColor,
        },

        '& label.Mui-focused': {
            color: COLORS.focusedColor,
            
        },
        '& label': {
            color: COLORS.defaultColor,
        },

        '&& .MuiFilledInput-underline:hover:before': {
            borderBottomColor: COLORS.focusedColor
        },
        '& .MuiFilledInput-underline:after': {
            borderBottomColor: COLORS.focusedColor
        },
        '& .MuiFilledInput-underline:before': {
            borderBottomColor: COLORS.defaultColor,
        },
        
    }
    const [searchText, setSearchText] = React.useState({search: "hotel", chain_name: ""});
    const [updateText, setUpdateText] = React.useState({
        updates: "hotel",
        addressUp:"",
        address:"",
        chain_name: "",
        city:"",
        country:"",
        rating:"",
        num_rooms:"",
        phonenumber:"",
        manager:"",

    })
    const [searchError, setSearchError] = React.useState('')
    const [submitError, setSubmitError] = React.useState('')

    const onSearchHotelAddress = e => {
        setSearchText({...searchText, address: e.target.value});
    }
    const onUpdateHotelAddressChange = e => {
        setUpdateText({...updateText, addressUp: e.target.value});
    }
    const onUpdateCityChange = e => {
        setUpdateText({...updateText, city: e.target.value});
    }
    const onUpdateCountryChange = e => {
        setUpdateText({...updateText,country: e.target.value });
    }
    const onUpdateNumRoomsChange = e => {
        setUpdateText({...updateText, num_rooms: e.target.value});
    }
    const onUpdateChainNameChange = e => {
        setUpdateText({...updateText, chain_name: e.target.value});
    }
    const onUpdateRatingChange = e => {
        setUpdateText({...updateText, rating: e.target.value});
    }
    const onUpdatePhoneChange = e => {
        setUpdateText({...updateText, phonenumber: e.target.value});
    }
    const onUpdateManagerChange = e => {
        setUpdateText({...updateText, manager: e.target.value});
    }

    const search = async () => {
        
        if (searchText.address === "") {
            setSearchError('Field must not be empty!')
            return
        }

        try {
            console.log(searchText)
            const res = await axios.post('http://localhost:8800/updatesearch', searchText)
            if (Object.keys(res.data)["code"] !== undefined || res.data.length === 0) {
                setSearchError('Something went wrong with the search. Please try again.')
                return
            }
            setSearchError('')
            setUpdateText({
                updates: "hotel",
                addressUp:res.data[0].address,
                address:res.data[0].address,
                chain_name: res.data[0].chainName,
                city:res.data[0].city,
                country:res.data[0].country,
                rating:res.data[0].star_rating,
                num_rooms:res.data[0].num_rooms,
                phonenumber:res.data[0].phoneNumber,
                manager:res.data[0].manager,
                
                
            })

        } catch (err) {
            console.log(err);
            
        }
    }

    const submit = async () => {
        if (
            updateText.num_rooms === "" || 
            updateText.country === "" ||
            updateText.city === "" ||
            updateText.address === "" ||
            updateText.chain_name ===""||
            updateText.manager===""||
            updateText.rating===""||
            updateText.phonenumber===""
            ) {
            setSubmitError('Fields must not be empty!')
            return
        }

        if (searchText.address === "") {
            setSearchError('Field must not be empty!')
            return
        }

        if (!/^\d+$/.test(updateText.num_rooms)) {
            setSubmitError('# of Hotels must only contain digits.')
            return
        }
        if (!/^\d+$/.test(updateText.manager)) {
            setSubmitError('Manager must only contain digits.')
            return
        }
        if (!/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(updateText.phonenumber)) {
            setSubmitError('Phone Number be in correct format (X-XXX-XXX-XXXX)')
            return
        }

        try {
            console.log(updateText)
            const res = await axios.post('http://localhost:8800/update', updateText)
            console.log(res.data)
            if (Object.keys(res.data)["code"] !== undefined || res.data.length === 0) {
                setSubmitError('Something went wrong with the search. Please try again.')
                return
            }
            setSubmitError('')
            setSearchError('')
            setUpdateText({
                updates: "hotel",
                addressUp:"",
                address:"",
                chain_name: "",
                city:"",
                country:"",
                rating:"",
                num_rooms:"",
                phonenumber:"",
                manager:"",
            })
            setOpen(false)
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <Box justifyContent={'center'} alignItems={'center'}>
            <Button 
                variant="contained"
                onClick={handleClickOpen}
                sx={{
                    color: 'white', 
                    display: 'inline', 
                    backgroundColor: COLORS.defaultColor, 
                    borderRadius:"15px",
                    ':hover': {
                        backgroundColor: COLORS.focusedColor
                    },
                    margin: "2px"
                }}
            >
                Update
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{'& .MuiPaper-root': {backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2}}}
            >
                <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3}}>
                    <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Update Hotel</Typography>
                </DialogTitle>
                <DialogContent>
                <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Divider 
                                sx={{
                                    '&:before': {borderTopColor: "white", borderWidth: "2px"}, 
                                    '&:after': {borderTopColor: "white", borderWidth: "2px"},
                                    '& .MuiDivider-wrapper': {  
                                        paddingLeft: "calc(2px * 10)",
                                        paddingRight: "calc(2px * 10)",
                                        overflow: "visible"
                                    },
                                    width: "100%",
                                    color: "white",
                                    
                                }}>
                                    <Typography variant="h6" sx={{ top: 0, left: 0, }}>Search Terms</Typography>
                            </Divider>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                required
                                onChange={onSearchHotelAddress}
                                fullWidth
                                label="Hotel Address"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        {searchError !== '' &&
                            <Grid item xs={12} color="white" display="flex" justifyContent="center">
                                <Typography variant="h7" fontWeight="bold" sx={{ top: 0, left: 0, }}>{searchError}</Typography>
                            </Grid>
                        }
                        <Grid item xs={12}>
                            <Button
                                fullWidth 
                                variant="contained"
                                onClick={search}
                                sx={{
                                    overflow: "visible",
                                    color: 'white', 
                                    display: 'inline', 
                                    backgroundColor: COLORS.primaryColor, 
                                    borderRadius:"15px",
                                    ':hover': {
                                        backgroundColor: COLORS.primaryFocusedColor
                                    },
                                }}
                            >
                                Search Records
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Divider 
                                sx={{
                                    '&:before': {borderTopColor: "white", borderWidth: "2px"}, 
                                    '&:after': {borderTopColor: "white", borderWidth: "2px"},
                                    '& .MuiDivider-wrapper': {  
                                        paddingLeft: "calc(2px * 10)",
                                        paddingRight: "calc(2px * 10)",
                                        overflow: "visible"
                                    },
                                    width: "100%",
                                    color: "white"
                                    
                                }}>
                                    <Typography variant="h6" sx={{ top: 0, left: 0, }}>Data to Update</Typography>
                            </Divider>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                value={updateText.addressUp}
                                onChange={onUpdateHotelAddressChange}
                                label="Hotel Address"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Chain Name"
                                value={updateText.chain_name}
                                onChange={onUpdateChainNameChange}
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                value={updateText.city}
                                onChange={onUpdateCityChange}
                                fullWidth
                                label="City"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                       
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Country"
                                value={updateText.country}
                                onChange={onUpdateCountryChange}
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            onChange={onUpdateRatingChange}
                                required
                                fullWidth
                                value={updateText.rating}
                                label="Rating"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            onChange={onUpdateNumRoomsChange}
                                required
                                fullWidth
                                value={updateText.num_rooms}
                                label="# of Rooms"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                value={updateText.phonenumber}
                                onChange={onUpdatePhoneChange}
                                fullWidth
                                label="Phone Number"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                value={updateText.manager}
                                onChange={onUpdateManagerChange}
                                fullWidth
                                label="Manager"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                {submitError !== '' &&
                        <Typography variant="h7" fontWeight="bold" sx={{ top: 0, left: 0, color: "white", paddingRight: "10px"}}>{submitError}</Typography>
                    }
                    <Button 
                        onClick={submit}
                        variant="contained"
                        sx={{
                            backgroundColor:  COLORS.primaryColor,
                            ':hover': {
                                backgroundColor: COLORS.primaryFocusedColor
                            }
                        }}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Box >
    )
}