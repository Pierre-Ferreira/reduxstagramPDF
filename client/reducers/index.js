import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ //All combineReducers() does is generate a function that calls your reducers with the slices of state selected according to their keys, and combining their results into a single object again. It’s not magic.
  posts, //posts: posts(state.posts, action)
  comments, //comments: comments(state.commets, action)
  routing: routerReducer
});
export default rootReducer;
