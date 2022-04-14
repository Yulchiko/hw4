import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import User from "../../Components/User/User";
import {UserService} from "../../Service";
import css from './userPage.module.css'

const UserPage = () => {
    const [user, setUser] = useState([]);

    useEffect(()=>{
       UserService.getAllUser().then(({data})=>setUser(data))
    },[])
    return (
        <div className={css.userPage}>
            <div><Outlet/></div>
            <div>{user.map((user)=><User  key={user.id} user={user}/>)}</div>

        </div>
    );
};

export default UserPage;