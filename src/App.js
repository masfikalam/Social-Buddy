import React from 'react';
import Header from './components/header/Header';
import { Grid, Hidden } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Post from './components/post/Post';
import Posts from './components/posts/Posts';

const App = () => {
  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs="auto" md={4}>
          <Hidden smDown>
            <Profile />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={8}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Posts />
              </Route>
              <Route path="/post/:postId">
                <Post />
              </Route>
              <Route path="*">
                <h1>404 - Page Not Found</h1>
              </Route>
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </>
  );
};

export default App;