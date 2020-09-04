import React from 'react';
import me from './masfik.jpg'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    profile: {
        backgroundColor: '#fde8e9',
        textAlign: 'center',
        padding: '20px',
        height: '100%'
    },
    photo: {
        borderRadius: '50%',
        width: '250px',
        border: '5px solid #f50057',
        margin: '30px 0'
    }
}) 
const Profile = () => {
    const classes = useStyles();

    return (
        <section id="profile" className={classes.profile}>
            <h3>My Profile</h3>
            <img src={me} alt="" className={classes.photo} />
            <Typography variant="h4" color="secondary">
                Masfikul Alam
            </Typography>
            <p>Email : masfikalamfrP@gmail.com</p>
            <p>Facebook : <a href="https://fb.com/masfik.alam">masfik.alam</a></p>
            <h3>Friends : 2147</h3>
        </section>
    );
};

export default Profile;