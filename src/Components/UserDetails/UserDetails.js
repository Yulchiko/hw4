import React from 'react';

import css from './userDetails.module.css'

export const UserDetails = ({user}) => {
    const {id, name, surname, email, address, phone} = user;
    return (
        <div className={css.userDetails}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <div>email:{email}</div>
            <div className="address">
                address:
                <div>street:{address.street}</div>
                <div>suite:{address.suite}</div>
                <div>city:{address.city}</div>
                <div>zipcode:{address.zipcode}</div>
            </div>
            <div>phone:{phone}</div>
        </div>
    );
};
