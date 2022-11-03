import React from 'react';
import { Icon, IconProps } from 'zarm';

const MyIcon = (props: IconProps)=>{
    const Icons = Icon.createFromIconfont('//at.alicdn.com/t/c/font_3735735_vks86z4rgt9.js')
    return (
        <Icons {...props}/>
    );
}

export default React.memo(MyIcon);