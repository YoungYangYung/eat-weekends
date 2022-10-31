import { Init_Data } from "../action";

const initState = {
    classList: [],
    dishesList: [],
    shoppingCartList: [],
}

export const countReducer = (state = initState, action)=>{
    switch(action.type) {
        case Init_Data:
            const { payload } = action;
            if(!payload){
                return state;
            }
            return {
                ...state,
                classList: payload.classList,
                dishesList: payload.dishesList
            }
        default:
            return state;
    }
} 