export const ADD = (item) => {  
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const RMV = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

export const RMVIND = (item) => {
    return {
        type: "RMVIND_CART",
        payload: item

    }
}