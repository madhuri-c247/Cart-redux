import { ADD_TO_CART,REMOVE_TO_CART } from "../constants"

 export const add = (data)=>{
    // console.log('data',data) 
    return{
        type: ADD_TO_CART,
        payload: data
    }
}
 export const remove = ()=>{
     console.log('remove-action') 
    return{
        type: REMOVE_TO_CART
    }
}

