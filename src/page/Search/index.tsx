import React, { useCallback } from 'react';
import { SearchBar } from 'zarm';
import MyIcon from '../Component/Icon';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const Header = ()=>{
    const navigate = useNavigate();
    const search = useCallback((e: string)=>{
        console.log('===search',e)
    },[])

    return (
        <div className='search-content flex'>
            <MyIcon onClick={()=>{navigate('/')}} className="back-icon" type="icon-back" />
            <SearchBar className='search' onChange={search} shape='round' placeholder='搜搜看吧' showCancel/>
        </div>
    );
}

export default React.memo(Header);