import React from 'react';
import { useHistory } from 'react-router-dom';

const Posts = (props) => {
    const { id, title } = props.post;
    const history = useHistory();
    const seePost = (Id) => {
        const url = `post/${Id}`;
        history.push(url);
    }
    
    return (
        <div>
            <h2>Id : {id}</h2>
            <h4>{title}</h4>
            <button onClick={() => seePost(id)}>See-Post</button>
        </div>
    );
};

export default Posts;