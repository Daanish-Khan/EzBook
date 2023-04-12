import Button from '@mui/material/Button';
import * as React from 'react';
import { Grid, Divider, Typography, Box, TextField, FormControlLabel, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import axios from 'axios';

export default function BookingsUpdate() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setUpdateText({
            updates: "room",
            room_num: "",
            address: "",
            num_hotels: "",
            city: "",
            country: "",
            expandable:0
        })
        setSearchError('')
        setSubmitError('')
    };
    const [open, setOpen] = React.useState(false);
    const textsx = {
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
    const [searchText, setSearchText] = React.useState({ search: "room", room_num: "" ,address:""});
    const [updateText, setUpdateText] = React.useState({
        updates: "room",
        room_num: "",
        address: "",
        capacity: "",
        price: "",
        view: "",
        amenities: "",
        expandable:0
    })
    const [searchError, setSearchError] = React.useState('')
    const [submitError, setSubmitError] = React.useState('')

    const onSearchAddress = e => {
        setSearchText({ ...searchText, address: e.target.value });
    }
    const onSearchRoomNum = e => {
        setSearchText({ ...searchText, room_num: e.target.value });
    }
    const onUpdateAddressChange = e => {
        setUpdateText({ ...updateText, address: e.target.value });
    }
    const onUpdateRoomNumChange = e => {
        setUpdateText({ ...updateText, room_num: e.target.value });
    }
    const onUpdatePriceChang = e => {
        setUpdateText({ ...updateText, price: e.target.value });
    }
    const onUpdateCapacityChange = e => {
        setUpdateText({ ...updateText, capacity: e.target.value });

    }
    const onUpdateViewChange = e => {
        setUpdateText({ ...updateText, view: e.target.value });
    }
    const onUpdateAmenChange = e => {
        setUpdateText({ ...updateText, amenities: e.target.value });
        
    }
    const onUpdateExpandChange = e => {
        setUpdateText({...updateText, expandable: e.target.checked ? 1 : 0});
    }
    const search = async () => {

        if (searchText.room_num === "" || searchText.address === "") {
            setSearchError('Fields must not be empty!')
            return
        }

        try {
            console.log(searchText)
            const res = await axios.post('http://localhost:8800/updatesearch', searchText)
            console.log(res.data)
            if (Object.keys(res.data)["code"] !== undefined || res.data.length === 0) {
                setSearchError('Something went wrong with the search. Please try again.')
                return
            }
            setSearchError('')
            setUpdateText({
                updates: "room",
                room_num: res.data[0].room_num,
                address: res.data[0].hotel,
                capacity: res.data[0].capacity,
                view: res.data[0].view_type,
                price: res.data[0].price,
                amenities: res.data[0].amenities,
                expandable:res.data[0].expandable


            })

        } catch (err) {
            console.log(err);

        }
    }

    const submit = async () => {
        if (
            updateText.room_num === "" ||
            updateText.address === "" ||
            updateText.capacity === "" ||
            updateText.amenities === "" ||
            updateText.view === "" ||
            updateText.price === ""
        ) {
            setSubmitError('Fields must not be empty!')
            return
        }

        if (searchText.room_num === "" || searchText.address === "") {
            setSearchError('Fields must not be empty!')
            return
        }

        if (!/^\d+$/.test(updateText.room_num)) {
            setSubmitError('Room # must only contain digits.')
            return
        }
        if (!/^\d+$/.test(updateText.capacity)) {
            setSubmitError('Capacity must only contain digits.')
            return
        }
        if (!/^[0-9]*\.?[0-9]*$/.test(updateText.room_num)) {
            setSubmitError('Price must be in correct format')
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
                updates: "room",
                room_num: "",
                address: "",
                capacity: "",
                price: "",
                view: "",
                amenities: "",
                expandable:0
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
                    borderRadius: "15px",
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
                alignItems='center'
                sx={{ '& .MuiPaper-root': { backgroundColor: COLORS.defaultColor, overflow: "hidden", padding: 2 } }}
            >
                <DialogTitle sx={{ padding: 0, paddingTop: 2, paddingBottom: 3 }}>
                    <Typography variant="h4" sx={{ top: 0, left: 0, color: "white" }}>Update Room</Typography>
                </DialogTitle>
                <DialogContent>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Divider
                                sx={{
                                    '&:before': { borderTopColor: "white", borderWidth: "2px" },
                                    '&:after': { borderTopColor: "white", borderWidth: "2px" },
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

                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Room #"
                                variant="filled"
                                onChange={onSearchRoomNum}
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                onChange={onSearchAddress}
                                fullWidth
                                label="Hotel Address"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>

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
                                    borderRadius: "15px",
                                    ':hover': {
                                        backgroundColor: COLORS.primaryFocusedColor
                                    },
                                }}
                            >
                                Search Records
                            </Button>
                        </Grid>
                        {searchError !== '' &&
                            <Grid item xs={12} color="white" display="flex" justifyContent="center">
                                <Typography variant="h7" fontWeight="bold" sx={{ top: 0, left: 0, }}>{searchError}</Typography>
                            </Grid>
                        }
                        <Grid item xs={12}>
                            <Divider
                                sx={{
                                    '&:before': { borderTopColor: "white", borderWidth: "2px" },
                                    '&:after': { borderTopColor: "white", borderWidth: "2px" },
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
                                onChange={onUpdateRoomNumChange}
                                value={updateText.room_num}
                                fullWidth
                                label="Room #"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                onChange={onUpdateAddressChange}
                                value={updateText.address}
                                required
                                fullWidth
                                label="Hotel Address"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                onChange={onUpdatePriceChang}
                                value={updateText.price}
                                required
                                fullWidth
                                label="Price"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                onChange={onUpdateCapacityChange}
                                value={updateText.capacity}
                                required
                                fullWidth
                                label="Capacity"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                onChange={onUpdateViewChange}
                                value={updateText.view}
                                required
                                fullWidth
                                label="Type of View"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                onChange={onUpdateAmenChange}
                                value={updateText.amenities}
                                label="Amenities"
                                variant="filled"
                                sx={textsx}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel sx={{ color: "white" }} control={
                            <Checkbox 
                            onChange={onUpdateExpandChange}
                            checked={Boolean(updateText.expandable)} 
                            sx={{ color: "white",
                             '& .MuiSvgIcon-root': { fontSize: 28, color: "white" } }} />}
                              label="Expansion Available" />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    {submitError !== '' &&
                        <Typography variant="h7" fontWeight="bold" sx={{ top: 0, left: 0, color: "white", paddingRight: "10px" }}>{submitError}</Typography>
                    }
                    <Button
                        variant="contained"
                        onClick={submit}
                        sx={{
                            backgroundColor: COLORS.primaryColor,
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