import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import css from './Layout.module.css'

export const Layout = () => {
    const navigate = useNavigate()
    return (
        <div >
            <div className={css.layout}>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            </div>
                <hr/>
                <Outlet/>
            <div className={css.button}>
                <button onClick={()=>navigate(-1)}>prev</button>
                <button onClick={()=>navigate(1)}>next</button>
            </div>
        </div>
    );
};
