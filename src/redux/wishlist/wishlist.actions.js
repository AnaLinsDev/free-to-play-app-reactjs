import {WishListActionTypes} from './wishlist.types'

export const addGame = WishList => ({
    type: WishListActionTypes.ADD_ON_WISHLIST,
    payload: WishList
})

export const removeGame = WishList => ({
    type: WishListActionTypes.REMOVE_ON_WISHLIST,
    payload: WishList
})