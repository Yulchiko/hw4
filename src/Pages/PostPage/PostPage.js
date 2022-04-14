import React, {useEffect, useState} from 'react';
import {PostService} from "../../Service";
import Post from "../../Components/Post/Post";
import {Outlet} from "react-router-dom";

import css from './Post.module.css'

const PostPage = () => {
    const [post, setPost] = useState([]);

    useEffect(()=>{
        PostService.getAllPost().then(({data})=>setPost(data))
    },[])
    return (
        <div className={css.postPage}>
            <div><Outlet/></div>
            <div>{post.map((post)=><Post  key={post.id} post={post}/>)}</div>

        </div>
    );
};

export default PostPage;