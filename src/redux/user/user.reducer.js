  
import {UserActionTypes} from './user.types'


const INITIAL_STATE ={
    currentUser: null
}

// O currentUser só será null, se a função NÃO passar outro valor para state
const userReducer = (state =  INITIAL_STATE, action) => {
// O valor default serve para que se caso a ação de um outra pasta for 
// acionado (ex: ação em games ), ele não faça nenhuma alteração aqui
    switch (action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
            default:
                return state
    }
}

export default userReducer

