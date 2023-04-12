import Button from '@mui/material/Button';
import * as React from 'react';
import { Divider, Typography, Grid, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { COLORS } from './../../consts'
import axios from 'axios';

export default function ChainUpdate() {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setUpdateText({
            updates: "chain",
            chain_name:"",
            num_hotels: "",
            city:"",
            country:"",
            address:"",
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
    const datesx={
        '& .MuiInputAdornment-root': {
            display: "contents",
            colors: COLORS.defaultColor,
        },
        '& .MuiInputBase-root': {
            backgroundColor: "white",
        },
        '& input': {
            color: COLORS.defaultColor,
            
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
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.primaryColor + " !important",
        },
        
    }
    const [searchText, setSearchText] = React.useState({search: "chain", chain_name: ""});
    const [updateText, setUpdateText] = React.useState({
        updates: "chain",
        chain_name:"",
        num_hotels: "",
        city:"",
        country:"",
        address:"",
    })
    const [searchError, setSearchError] = React.useState('')
    const [submitError, setSubmitError] = React.useState('')

    const onSearchChainName = e => {
        setSearchText({...searchText, chain_name: e.target.value});
    }
    const onUpdateAddressChange = e => {
        setUpdateText({...updateText, address: e.target.value});
    }
    const onUpdateCityChange = e => {
        setUpdateText({...updateText, city: e.target.value});
    }
    const onUpdateCountryChange = e => {
        setUpdateText({...updateText,country: e.target.value });
    }
    const onUpdateNumHotelsChange = e => {
        setUpdateText({...updateText, num_hotels: e.target.value});
    }

    const search = async () => {
        
        if (searchText.chain_name === "") {
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
                updates: "chain",
                chain_name:res.data[0].name,
                num_hotels: res.data[0].num_hotels,
                country: res.data[0].country,
                city: res.data[0].city,
                address: res.data[0].office_address,
                
                
            })

        } catch (err) {
            console.log(err);
            
        }
    }

    const submit = async () => {
        if (
            updateText.num_hotels === "" || 
            updateText.country === "" ||
            updateText.city === "" ||
            updateText.address === "") {
            setSubmitError('Fields must not be empty!')
            return
        }

        if (searchText.chain_name === "") {
            setSearchError('Field must not be empty!')
            return
        }

        if (!/^\d+$/.test(updateText.num_hotels)) {
            setSubmitError('# of Hotels must only contain digits.')
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
                updates: "chain",
                chain_name:"",
                num_hotels: "",
                country: "",
                city: "",
                address: "",
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
                    <Typography variant="h4" sx={{ top: 0, left: 0, color: "white"}}>Update Chain</Typography>
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
                                fullWidth
                                label="Chain Name"
                                onChange={onSearchChainName}
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
                                label="Office Address"
                                value={updateText.address}
                                variant="filled"
                                sx={textsx}
                                onChange={onUpdateAddressChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="City"
                                variant="filled"
                                value={updateText.city}
                                sx={textsx}
                                onChange={onUpdateCityChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Country"
                                variant="filled"
                                value={updateText.country}
                                sx={textsx}
                                onChange={onUpdateCountryChange}
                            />
                        </Grid>
                       
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="# of Hotels"
                                value={updateText.num_hotels}
                                variant="filled"
                                sx={textsx}
                                onChange={onUpdateNumHotelsChange}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                {submitError !== '' &&
                        <Typography variant="h7" fontWeight="bold" sx={{ top: 0, left: 0, color: "white", paddingRight: "10px"}}>{submitError}</Typography>
                    }
                    <Button 
                        variant="contained"
                        onClick={submit}
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
        </Box>
    )
}