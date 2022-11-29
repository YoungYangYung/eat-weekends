import { ClassList } from "../../data";
import { Init_Data, Select_Class, Shopping_Cart_Update } from "../action";

const initState = {
    classList: [],
    dishesList: [],
    shoppingCartList: [],
}

export const countReducer = (state = initState, action)=>{
    const { payload } = action;
    switch(action.type) {
        case Init_Data:
            if(!payload){
                return state;
            }
            return {
                ...state,
                classList: payload.classList,
                dishesList: payload.dishesList
            }
        case Select_Class:
            const { id } = payload;
            const classList = state.classList.map(c=>{
                if(c.id === id){
                    return { ...c, isSelect: true };
                }
                return { ...c, isSelect: false };
            })
            return {
                ...state,
                classList,
            }
        case Shopping_Cart_Update:
            const { isDel, dishes } = payload;
            let shoppingCartList = [...state.shoppingCartList];
            if(isDel){
                shoppingCartList = state.shoppingCartList.filter(s=>{
                    return s.id !== dishes.id;
                })
            } else {
                shoppingCartList.push(dishes);
            }

            return {
                ...state,
                shoppingCartList
            }
        default:
            return state;
    }
} 