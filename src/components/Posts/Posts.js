import React from "react";

import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./Post/Post";
import useStyles from "./styles";

//Redux
import { useSelector } from "react-redux";
import { selectPosts } from "../../features/posts/postsSlice";

export default function Posts() {
  const classes = useStyles();
  const posts = useSelector(selectPosts);

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="center"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
