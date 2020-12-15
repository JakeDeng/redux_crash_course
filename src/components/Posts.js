import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

function Posts() {
    //state management
    const [posts, setPosts] = useState([]);

    //run at the beginning
    useEffect(() => {
        console.log('Posts fetch');
        fetchPosts();
    }, []);
    
    console.log(posts);

    return (
        <div>
            <h1>Posts</h1>
                {posts.map( post => {
                    return <div key={post.id} >
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                })}    
        </div>
    )
}

//connect Posts component to the store
export default connect(null, { fetchPosts })(Posts);
