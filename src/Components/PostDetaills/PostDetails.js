import React from 'react';

import css from './postDetails.module.css'

const PostDetails = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div className={css.postDetails}>
            <div>id: {id} </div>
            <div>userId:{userId}</div>
            <div>title: {title}</div>
            <div>body:{body}</div>

        </div>
    );
};

export default PostDetails;