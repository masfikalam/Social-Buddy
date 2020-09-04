import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';

const Home = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs="auto" md={4}>
                <Hidden smDown>
                    <Profile />
                </Hidden>
            </Grid>
            <Grid item xs={12} md={8}>
                <Posts />
            </Grid>
        </Grid>
    );
};

export default Home;