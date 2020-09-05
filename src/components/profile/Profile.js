import React from 'react';
import me from './masfik.jpg'
import { makeStyles, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    profile: {
        textAlign: 'center',
        padding: '20px'
    },
    photo: {
        borderRadius: '50%',
        width: '80%',
        border: '5px solid #f50057',
        margin: '30px 0'
    },
    paper: {
        backgroundColor: '#fde8e9',
        padding: '30px 50px',
    }
}) 
const Profile = () => {
    const classes = useStyles();

    return (
        <section className={classes.profile}>
            <Paper className={classes.paper} variant="outlined">
            <h3>My Profile</h3>
            <img src={me} alt="" className={classes.photo} />
            <Typography variant="h4" color="secondary">
                Masfikul Alam
            </Typography>
            <p>Email : masfikalamfrp@gmail.com</p>
            <p>Facebook : <a href="https://fb.com/masfik.alam">masfik.alam</a></p>
            <h3>Friends : 2147</h3>
            </Paper>
        </section>
    );
};

export default Profile;