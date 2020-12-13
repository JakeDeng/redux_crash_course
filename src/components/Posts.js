import React, {useEffect} from 'react'

function Posts() {
    useEffect(() => {
        async function fetchData() {
           let data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
           console.log(data);
           return data;
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            
        </div>
    )
}

export default Posts
