import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, makeStyles, Divider, Button, Grid } from '@material-ui/core';
import Comment from '../comment/Comment';

const useStyles = makeStyles({
    container: {
        padding: '50px',
        backgroundColor: '#fde8e9'
    },
    postCount: {
        textAlign: 'center'
    },
    title: {
        marginBottom: '20px'
    },
    close: {
        marginTop: '10px'
    }
})

const Post = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const classes = useStyles();

    // fetching post details
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId]);

    return (
        <article>
            <Link to="/">
                <Button className={classes.close} variant="contained" size="small" color="primary">Close</Button>
            </Link>
            <h2 className={classes.postCount}>Post: {postId} </h2>
            <section className={classes.container}>
                <Typography variant="h4" color="primary" gutterBottom>
                    {post.title && (post.title).toUpperCase()}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {post.body}
                </Typography>
                <Divider/>
                <h5>Comments -</h5>
                <Comment postId={postId}/>
            </section>
        </article>      
    );
};

export default Post;