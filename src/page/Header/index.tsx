import React, { useCallback } from 'react';
import { SearchBar } from 'zarm';
import './style.scss';

const Header = ()=>{
    const search = useCallback((e: string)=>{
        console.log('===search',e)
    },[])

    return (
        <div className='header-content'>
            <SearchBar className='search' onChange={search} shape='round' placeholder='搜搜看吧' showCancel/>
        </div>
    );
}

export default React.memo(Header);