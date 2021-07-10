import { WishListActionTypes } from "./wishlist.types"

const INITIAL_STATE ={
    wishListList: []
}

const wishListReducer = (state =  INITIAL_STATE, action) => {
    switch (action.type){
        case WishListActionTypes.ADD_ON_WISHLIST:
            return {
                ...state,
                wishListList: [...state.wishListList, action.payload]
            }
            default:
                return state
    }
}

export default wishListReducer
