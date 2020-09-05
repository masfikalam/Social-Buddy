import React from 'react';
import logo from './logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    logo: {
        margin: '0 10px'
    },
    logout: {
        marginTop: '10px'
    },
    navbar: {
        position: 'sticky',
        top: 0,
    }
})

const Header = () => {
    const classes = useStyle();

    // logout
    function logOut() {
        document.body.innerHTML = '<h2 style="text-align:center">Good Bye!</h2>'
    }

    return (
        <AppBar className={classes.navbar} color="secondary">
            <Toolbar>
                <Grid container display="flex" justify="space-between">
                    <Grid item>
                        <Grid container display="flex" alignItems="center">
                            <img src={logo} className={classes.logo} alt="logo" width="50px"/>
                            <Typography variant="h6">
                                Social Buddy
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={logOut} color="primary" className={classes.logout} size="small">Logout</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;