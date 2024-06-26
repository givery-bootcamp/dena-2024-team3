import { configureStore } from '@reduxjs/toolkit';

import helloReducer, { helloSlice } from './HelloSlice';
import postReducer, { postsSlice } from './postsSlice';
import signinReducer, { signinSlice } from './signinSlice';
import postDetailReducer, { postDetailSlice } from './postdetailSlice'
import userReducer, {userSlice} from './userSlice';
export const store = configureStore({
  reducer: {
    hello: helloReducer,
    post: postReducer,
    signin: signinReducer,
    postdetail: postDetailReducer,
    user: userReducer,
  },
});

export const actions = {
  ...helloSlice.actions,
  ...postsSlice.actions,
  ...signinSlice.actions,
  ...postDetailSlice.actions,
  ...userSlice.actions,
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
