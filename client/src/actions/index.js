import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=OperationSnakeEater';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
  console.log(request);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    // this callback handles the race condition that is created when the post is submitted and the user is navigated back to the index page.
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  // eslint-disable-next-line
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}

console.log(
  `
  
  8888888888 88888888888 .d8888b.  
  888            888    d88P  Y88b 
  888            888    Y88b.      
  8888888        888     "Y888b.   
  888            888        "Y88b. 
  888            888          "888 
  888            888    Y88b  d88P 
  8888888888     888     "Y8888P"  

`,
  'https://www.youfoundnate.com'
);
