const trainerReducer = (state={trainers:[], loading: false}, action) => {
    switch(action.type){
        case "LODING_TRAINER":
            return {
                ...state, 
                loading: true
            }
        case "FETCH_TRAINERS":
            return {
                ...state,
                trainers: action.payload,
                loading: false
            }
        default: 
        return state;
    }
}

export default trainerReducer;