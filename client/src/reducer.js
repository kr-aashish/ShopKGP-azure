//context API and redux have the same pattern - both uses the idea of global store
//reducer -- Okay..you just updated an item/removed an item from the basket..Ik what to do

export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0); //? saves you in case of basket is undefined
 
const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                basket: [...state.basket, action.item] //state.basket -- wherever the basket were
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
              );
            let newBasket = [...state.basket]; //copy of basket

            if (index >= 0) {
                newBasket.splice(index, 1); //cut out that element
              } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
                )
              }
            
            return {
                ...state, 
                basket: newBasket
            }
            
        default:
            return state;
    }
}

export default reducer;