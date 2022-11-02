import React from 'react';
import { connect } from 'react-redux';
import { isValidArray } from '../../utils';
import { IState } from '../type';
import cls from 'classnames';
import ClassModule from './ClassModule';
import DishesModule from './DishesModule';
import './style.scss';

interface IProps extends IState {
    isShowClass?: boolean;
}

const Content = ({classList, dishesList}: IProps)=>{
    console.log('===',classList,dishesList)

    return (
        <div className='container flex'>
            {/* 左侧菜单 */}
            <ClassModule classList={classList}/>

            {/* 右侧详情 */}
            <DishesModule dishesList={dishesList}/>
        </div>
    );
}

const mapStateToProps = (state: IState)=>{
    return state;
}

export default connect(mapStateToProps)(React.memo(Content));