export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding items to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //Logic for removing items from basket.

            //We cloned the basket
            let newBasket = [...state.basket];

            // We checked to see if the product exists or not...
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //Item exist in basket, remove it...
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Can't remove product (id: ${action.id}) as it is not in the cart.`);
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}
export default reducer;