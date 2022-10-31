import React from 'react';
import { connect } from 'react-redux';
import { isValidArray } from '../../utils';
import { IState } from '../type';
import cls from 'classnames';
import './style.scss';

interface IProps extends IState {
    isShowClass?: boolean;
}

const Content = ({classList, dishesList}: IProps)=>{
    console.log('===',classList,dishesList)

    if(!isValidArray(classList) || !isValidArray(dishesList)) return null;
    return (
        <div className='container flex'>
            {/* 左侧菜单 */}
            <div className='class-module'>
                {classList.map((c, index)=>{
                    return (
                        <div className={cls(['class-module-item spacing', index ===1 && 'select'])} key={`content-class-${index}`}>
                            {c.name}
                        </div>
                    )
                })}
            </div>

            {/* 右侧详情 */}
            <div className='detail-module'></div>
        </div>
    );
}

const mapStateToProps = (state: IState)=>{
    return state;
}

export default connect(mapStateToProps)(React.memo(Content));