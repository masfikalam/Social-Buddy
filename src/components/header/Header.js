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
        width: '100%',
        margin: '10px auto 0 auto'
    }
})

const Header = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" color="secondary">
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
                        <Button variant="contained" color="primary" className={classes.logout} size="small">Logout</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;