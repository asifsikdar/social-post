import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            <h3>This is home page</h3>
            {
                post.map(posts => <Posts post = {posts}></Posts>)
            }
        </div>
    );
};                                                                                          

export default Home;                                                                                            