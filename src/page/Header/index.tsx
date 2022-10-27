import React from 'react';
import './style.scss';

const Header = ()=>{
    return (
        <div className='header-content'>
            <span>周末吃什么</span>
        </div>
    );
}

export default React.memo(Header);