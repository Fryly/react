const initialState = {
    event: []
}


const events = ( state = initialState, action ) => {
    switch( action.type ) {
        case 'SET_EVENTS':
            const events = [...action.payload.events, ...action.payload.todoEvents]
            return {
                ...state,
                event: events,
            };

        case 'ADD_EVENT':
            return {
                ...state,
                event: [...state.event, action.payload]
            };

        default:
            return state;
    }
};


export default events