import React, { useState, useEffect } from 'react';
import { Typography, makeStyles, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    photo: {
        width: '40px',
        borderRadius: '50%',
        marginRight: '10px',
    },
    paper: {
        padding: '20px',
        margin: '20px 0'
    }
});

const Comment = ({postId}) => {
    const classes =  useStyles();
    const [comments, setComments] = useState([]);
    const [photo, setPhoto] = useState({});

    // fetching comments
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [postId]);
    
    // fetching photos
    useEffect(() => {
        fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => setPhoto(data));
    }, [postId])
    
    return (
        <>
        {
            comments.map(comment => 
                <Paper className={classes.paper} key={comment.id} variant="outlined">
                    <Grid container display="flex" alignItems="center">
                        {photo.results && <img src={photo.results[0].picture.large} className={classes.photo} alt="user" />}
                    <Typography color="secondary" variant="body2">
                        {(comment.email).toUpperCase()}
                    </Typography>
                    </Grid>
                    <Typography variant="body1">
                        {comment.body}
                    </Typography>
                </Paper>)
        }
        </>
)};

export default Comment;