import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Select_Class, Shopping_Cart_Update } from '../../redux/action';
import { IClass, IDishes, IState } from '../type';
import ClassModule from './ClassModule';
import DishesModule from './DishesModule';
import './style.scss';

interface IProps extends IState {
    isShowClass?: boolean;
    selectClass: (data: IClass)=>void;
    shoppingCartUpdate: (data: IDishes)=>void;
}

const Content = ({classList, dishesList, selectClass, shoppingCartUpdate, shoppingCartList}: IProps)=>{

    return (
        <div className='container flex'>
            {/* 左侧菜单 */}
            <ClassModule selectClass={selectClass} classList={classList}/>

            {/* 右侧详情 */}
            <DishesModule shoppingCartList={shoppingCartList} shoppingCartUpdate={shoppingCartUpdate} dishesList={dishesList} classList={classList}/>
        </div>
    );
}

const mapStateToProps = (state: IState)=>{
    return state;
}

const mapDispatchToProps = (dispatch)=>{
    return {
        selectClass: (payload)=>{
            dispatch({
                type: Select_Class,
                payload,
            })
        },
        shoppingCartUpdate: (payload)=>{
            dispatch({
                type: Shopping_Cart_Update,
                payload,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Content));