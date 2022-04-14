import React from 'react';

import css from './home.module.css'

const HomePage = () => {
    return (
        <div >
            <img className={css.home} src={'https://static.ukrinform.com/photos/2019_06/thumb_files/630_360_1561691470-984.jpg'} alt={'ukraine'}/>
        </div>
    );
};

export default HomePage;