import React from 'react';
import Button from "../Button/Button";

import css from './Posts.module.css'

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className={css.posts}>
            <div>id: {id} </div>,  <div>title: {title}</div>
            <Button to={`${id}`} state={post}>get details</Button>
        </div>
    );
};

export default Post;