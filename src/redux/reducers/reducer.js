import { ADD_TO_CART, REMOVE_TO_CART } from "../constants"
const initialState = {
    cardData: []
}

function cartItem(state = [], action) {

    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cardData: action.payload }
            ]
            break;

        case REMOVE_TO_CART:
            // const temp = state
            // console.log(temp,'reducer')
            // temp.pop()
            return [
                ...state,
            ]
            break;
        default:
            return state
    }

}
export default cartItem;