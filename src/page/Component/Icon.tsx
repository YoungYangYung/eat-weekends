import React from 'react';
import { Icon, IconProps } from 'zarm';

const MyIcon = (props: IconProps)=>{
    const Icons = Icon.createFromIconfont('//at.alicdn.com/t/c/font_3735735_spcnh6m6e4.js')
    return (
        <Icons {...props}/>
    );
}

export default React.memo(MyIcon);