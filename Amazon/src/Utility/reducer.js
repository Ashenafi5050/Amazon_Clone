import { Type } from './action.type.type.js';

export const initialState = {
    basket: [],
    user: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            const existingItem = state.basket.find((item) => item.id === action.item.id);

            if (!existingItem) {
                return {
                    ...state,
                    basket: [...state.basket, { ...action.item, amount: 1 }]
                };
            } else {
                const updatedBasket = state.basket.map((item) =>
                    item.id === action.item.id 
                        ? { ...item, amount: item.amount + 1 } 
                        : item
                );

                return {
                    ...state,
                    basket: updatedBasket
                };
            }

        case Type.REMOVE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket
                    .map(item => 
                        item.id === action.id 
                            ? { ...item, amount: item.amount - 1 } 
                            : item
                    )
                    .filter(item => item.amount > 0) 
            };

            case Type.SET_USER:
                return{
                    ...state,
                    user:action.user
                }

        default:
            return state;
    }
};
