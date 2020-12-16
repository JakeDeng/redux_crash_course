import { FETCH_POSTS, NEW_POST } from './types';

//each action is a function that we need to export
//dispatching fetchPosts to the reducer
export const fetchPosts = () => dispatch => {
    console.log('fetching posts ...');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({//dispatch the action object to reducers
        type: FETCH_POSTS,
        payload: posts
    }));
};

//create post action
export const createPost = (post) => dispatch => {
    console.log('creating post...');
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST' ,
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }));
};