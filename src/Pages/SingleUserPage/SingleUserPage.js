import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {UserDetails} from "../../Components";
import {UserService} from "../../Service";

const SingleUserPage = () => {
    const {state}=useLocation();
    const {id}=useParams();
    const [user, setUser] = useState(state)

    useEffect(()=>{
        if(!state){
           UserService.getByIdUser(id).then(({data})=>setUser(data))
        }else{
            setUser(state)
        }
    },[id, state])
    return (
        <div>

            {user && <UserDetails user={user}/> }
        </div>
    );
};

export default SingleUserPage;