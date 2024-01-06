const initialState = {
    products: [],
    counter: 0,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter + 1,
            };
        default:
            return state;
    }
};

export default rootReducer;