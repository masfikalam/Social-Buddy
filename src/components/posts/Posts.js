import React, { useEffect, useState } from 'react';
import { Paper, makeStyles, Button, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    posts: {
        margin: '20px 50px'
    },
    paper: {
        backgroundColor: '#fde8e9',
        margin: '20px 0',
        padding: '20px'
    }
})

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const classes = useStyles();

    // fetching all posts
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <section className={classes.posts}>
        {
            posts.map(post => 
                <Paper className={classes.paper} variant="outlined" key={post.id}>
                    <Typography variant="h6" color="primary" gutterBottom>
                        ({post.id}) {(post.title).toUpperCase()}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {post.body}
                    </Typography>
                    <Grid container display="flex" justify="center">
                        <Link to={"/post/"+post.id} key={post.id}>
                            <Button variant="contained" color="secondary" size="small">
                                Details
                            </Button>
                        </Link>
                    </Grid>
                </Paper>)
        }
        </section>
    );
};

export default Posts;