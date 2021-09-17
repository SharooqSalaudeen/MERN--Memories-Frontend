import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";

import logo from "./images/logo1.png";

//Redux
import { useDispatch } from "react-redux";
import { getPosts } from "./features/posts/postsSlice";

export default function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={logo} alt="MERN blog" />
        <Typography
          className={classes.heading}
          variant="h2"
          align="center"
          color="primary"
        >
          Memories
        </Typography>
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            display="flex"
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
