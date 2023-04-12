import { AppBar, Typography, Container, Toolbar, Box, IconButton, Menu, MenuItem, Button, Tooltip, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { COLORS } from './consts';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';


const pages = ['Book Now', 'My Trips', 'Employee Dashboard'];
const settings = ['Logout'];

function Navbar({ sx, isAdmin, authHandle, onBookingsPage }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigator = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = () => {
        authHandle({ SSN: 0, isAdmin: false });
        setAnchorElUser(null);
        navigator('/');
    }
    return (
        <AppBar position="static" sx={sx}>
            <Container maxWidth="x2">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        EzBook.
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => {
                                if (page === "Book Now") {
                                    return (
                                        <MenuItem key={page} onClick={() => { navigator('/bookings'); handleCloseNavMenu() }}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    );
                                } else if (isAdmin && page === "Employee Dashboard") {
                                    return (
                                        <MenuItem key={page} onClick={() => { navigator('/employees'); handleCloseNavMenu() }}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    );
                                } else {
                                    return (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    );
                                }

                            })}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        EzBook.
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            onClick={() => { navigator('/bookings'); handleCloseNavMenu();}}
                            sx={{
                                backgroundColor:onBookingsPage ? COLORS.primaryColor: 'transparent',
                                my: 2,
                                marginRight: 2,
                                color: 'white',
                                display: 'block',
                                borderRadius: "15px",
                                ':hover': {
                                    backgroundColor: COLORS.primaryFocusedColor
                                }
                            }}
                        >
                            {isAdmin ? "Rent Now" : "Book Now"}
                        </Button>
                        <Button
                            onClick={() => { navigator('/mytrips'); handleCloseNavMenu(); }}
                            sx={{
                                backgroundColor:onBookingsPage ? 'transparent':COLORS.primaryColor,
                                my: 2,
                                color: 'white',
                                display: 'block',
                                borderRadius: "15px",
                                ':hover': {
                                    backgroundColor: COLORS.primaryFocusedColor
                                }
                            }}

                        >
                            My Trips
                        </Button>
                        {isAdmin ?
                            <Button
                                onClick={() => { navigator('/employees'); handleCloseNavMenu() }}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    borderRadius: "15px",
                                    ':hover': {
                                        backgroundColor: COLORS.focusedColor
                                    }
                                }}

                            >
                                Employee Dashboard
                            </Button>
                            : null}

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => {
                                if (setting === 'Logout') {
                                    return (
                                        <MenuItem key={setting} onClick={handleLogOut}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    );
                                } else {
                                    return (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    );

                                }

                            })}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;