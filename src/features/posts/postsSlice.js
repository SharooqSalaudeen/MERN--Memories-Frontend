import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";

const initialState = {
  posts: [],
  currentId: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchAll: (state, action) => {
      state.posts = action.payload;
    },
    create: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    update: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    delete_: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },

    updateCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
  },
});

export const { fetchAll, create, update, delete_, updateCurrentId } =
  postsSlice.actions;

//Actions
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(fetchAll(data));
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(create(data));
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    dispatch(update(data));
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch(delete_(id));
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch(update(data));
  } catch (error) {
    console.log(error);
  }
};

//Selectors
export const selectPosts = (state) => state.posts.posts;
export const selectCurrentId = (state) => state.posts.currentId;

export default postsSlice.reducer;
