import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {PostService} from "../../Service";
import PostDetails from "../../Components/PostDetaills/PostDetails";

const SinglePostPage = () => {
    const {state}=useLocation();
    const {id} =useParams();
    const [post, setPOst] = useState(state)

    useEffect(()=>{
        if(!state){
            PostService.getByIdPost(id).then(({data})=>setPOst(data))
        }else{
            setPOst(state)
        }
    },[id, state])
    return (
        <div>

            {post && <PostDetails post={post}/> }
        </div>
    );
};

export default SinglePostPage;