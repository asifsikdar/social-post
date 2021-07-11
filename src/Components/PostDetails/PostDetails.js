import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
    const [Posts, setPosts] = useState([]);
    const [Coments , setComents] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [id])
    useEffect(() => {
        const url2 = `https://jsonplaceholder.typicode.com/comments/${id}`;
        fetch(url2)
        .then(res => res.json())
        .then(data1 => setComents(data1))
    },[id])
    return (
        <div>
            <h3>This is details</h3>
            <h4>{Posts.title}</h4>
            <p>{Posts.body}</p>
            <br/> <br/>
            <h4>{Coments.email}</h4>
            <h5>{ Coments.body}</h5>
        </div>
    );
};

export default PostDetails;