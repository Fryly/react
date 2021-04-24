const initialState = {
    token: null,
    name: '',
    userId: '',
    isLoad: false,
    error: '',
}

const users = ( state = initialState, action ) => {
    switch( action.type ) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
                isLoad: true
            };

        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            };

        case 'SET_ID':
            return {
                ...state,
                userId: action.payload
            };

        case 'SET_LOAD':
            return {
                ...state,
                isLoad: action.payload
            };
        
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};


export default users