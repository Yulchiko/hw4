import React from 'react';

import Button from "../Button/Button";
import css from './User.module.css'

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className={css.user}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <Button to={`${id}`} state={user}>get details</Button>
        </div>
    );
};

export default User;