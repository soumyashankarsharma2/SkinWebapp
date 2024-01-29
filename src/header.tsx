"use client";
import { AppBar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Modal, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [loginSelected, setLoginSelected] = useState(true);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const getLoginContent = () => {
        return (
            <>
                <div className="text-center mt-5">
                    <TextField label="Mobile Number" variant="standard" />
                </div>
                <div className="text-center mt-5">
                    <TextField label="Password" variant="standard" />
                </div>
                <div className="text-center mt-5">
                    <Button variant="outlined">Submit</Button>
                </div>
            </>
        );
    };
    const getSignUpContent = () => {
        return (
            <>
            <div className="text-center mt-5">
                    <TextField label="Name" variant="standard" />
                </div>
                <div className="text-center mt-5">
                    <TextField type="email" label="Email" variant="standard" />
                </div>
                <div className="text-center mt-5">
                    <TextField type="mobile" label="Mobile Number" variant="standard" />
                </div>
                <div className="text-center mt-5">
                    <TextField type="password" label="Password" variant="standard" />
                </div>
                <div className="text-center mt-5">
                    <TextField type="password" label="Confirm password" variant="standard" />
                </div>
                <div className="text-center mt-5">
                    <Button variant="outlined">Submit</Button>
                </div>
            </>
        );
    };
    return (
        <>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Grid container>
                            <Grid xs={4}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    sx={{
                                        mr: 2,
                                        display: 'flex',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Skinology
                                </Typography>
                            </Grid>
                            <Grid xs={8} className="text-right">
                                <Box sx={{ flexGrow: 0 }} className='flex' justifyContent="flex-end">
                                    <Tooltip title="Login/Register">
                                        <Button onClick={() => setOpen(true)} className="text-[#fff] bg-[red]">Login/Register</Button>
                                        {/* <IconButton onClick={() => { }} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton> */}
                                    </Tooltip>
                                </Box>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h4" className="text-center">{loginSelected ? 'User Login' : 'User Registration'}</Typography>
                    {loginSelected ? getLoginContent() : getSignUpContent()}
                    <div className="text-center mt-5">
                        {loginSelected ? 'Don’t have an account?' : 'Already have an account?'}
                        {loginSelected ? <Button variant="text" onClick={() => setLoginSelected(false)}>Sign Up</Button> : <Button variant="text" onClick={() => setLoginSelected(true)}>Login</Button>}
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default Header;