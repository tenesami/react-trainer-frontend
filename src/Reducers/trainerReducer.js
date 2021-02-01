const trainerReducer = (state={trainers:[], loading: false}, action) => {
    switch(action.type){
        case "LODING_TRAINER":
            return {
                ...state, 
                loading: true
            }
        default: 
        return state;
    }
}

export default trainerReducer;