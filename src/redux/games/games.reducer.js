const INITIAL_STATE ={
    gamesList: []
}

const gamesReducer = (state =  INITIAL_STATE, action) => {
    switch (action.type){
        case 'test':
            return {
                ...state,
                gamesList: action.payload
            }
            default:
                return state
    }
}

export default gamesReducer