import React, { useEffect, useState } from 'react';
import { Paper, makeStyles, Button, Typography, Grid } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    paper: {
        backgroundColor: '#fde8e9',
        margin: '20px 50px',
        padding: '20px'
    },
    post: {
        marginBottom: '20px'
    }
})

const Posts = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    const twentyPosts = posts.slice(0, 20);
    const classes = useStyles();

    return (
        <section id="posts">
            {
                twentyPosts.map(post => 
                    <Paper key={post.id} className={classes.paper} variant="outlined">
                    <Typography className={classes.post} variant="h6">
                        {post.body}
                    </Typography>
                    <Grid container display="flex" justify="space-between" alignItems="center">
                        <Button variant="contained" color="secondary">
                            <FavoriteIcon />
                        </Button>
                        <small className={classes.small}>
                            {Math.ceil(Math.random()*6)} minutes ago
                        </small>
                    </Grid>
                    </Paper>
                )
            }
        </section>
    );
};

export default Posts;