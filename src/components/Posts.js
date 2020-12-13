import React, {useEffect, useState} from 'react'

function Posts() {
    //state management
    const [posts, setPosts] = useState([]);

    //run at the beginning
    useEffect(() => {
        async function fetchData() {
           let data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
           setPosts(data);
           return data;
        }
        fetchData();
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

export default Posts
