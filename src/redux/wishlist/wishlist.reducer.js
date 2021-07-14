import { WishListActionTypes } from "./wishlist.types"

const INITIAL_STATE ={
    games: []
}

const wishListReducer = (state =  INITIAL_STATE, action) => {
    switch (action.type){
        case WishListActionTypes.ADD_ON_WISHLIST:
            if(state.games.filter(game => game.id == action.payload.id).length == 0){
                return {
                    ...state,
                    games: [...state.games, action.payload]
                }
            }else{
                return state
            }
        case WishListActionTypes.REMOVE_ON_WISHLIST:
                return {
                    ...state,
                    games: state.games.filter(game => game.id != action.payload.id)
                }

        default:
            return state
    }
}

export default wishListReducer
