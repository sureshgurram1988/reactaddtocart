const initialState = {
    cart:[]
}
export const cartreducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_CART":
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cart[itemIndex].qnty += 1
                
            }
            else{
                const temp = {...action.payload, qnty: 1}
                return {
                    ...state,
                    cart: [...state.cart, temp]
                }
            }
            // return {
            //     ...state,
            //     cart: [...state.cart, action.payload]
            // }
            case "RMV_CART":
                const data = state.cart.filter(ele => ele.id !== action.payload);
                return {
                    ...state,
                    cart: data
                }
                case "RMVIND_CART":
                    const intemIndex_Dec = state.cart.findIndex(item => item.id === action.payload.id);
                    if(state.cart[intemIndex_Dec].qnty >= 1){
                        state.cart[intemIndex_Dec].qnty -= 1  
                        return {
                            ...state,
                            cart: [...state.cart]
                        } 
                       
                    }
                    else if(state.cart[intemIndex_Dec].qnty === 1) {
                        const data = state.cart.filter(ele => ele.id !== action.payload.id);
                        return {
                            ...state,
                            cart: data
                        }
                    }
        default:
            return state
    }
}
