export const initialState = {
    basket: [{
        id: "12341234",
        title: "The LEarn Startup: How to create the Enterprenuership within yourself",
        price: 12.50,
        rating: 5.0,
        image: "https://i.guim.co.uk/img/media/8be4095b60f796d8b4094876e5e6bb642c22bcc1/0_134_4992_2994/master/4992.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e1a7f77bebc584ca7f4b4edd18a86de5"

    }],
    user: null,
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding items to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
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