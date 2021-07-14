import {createSelector} from 'reselect'

const selectList = state => state.wishlist // aqui é o que está no root-reducer

export const selectWishList = createSelector(
    [selectList],
    wishlist => wishlist.games // aqui é a parte que quero
)