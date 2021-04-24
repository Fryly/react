const initialState = {
    color: [],
}

const color = ( state = initialState, action ) => {
    switch( action.type ) {

        case 'SET_COLOR':
            return {
                ...state,
                color: action.payload
            };

        default:
            return state;
    }
};


export default color