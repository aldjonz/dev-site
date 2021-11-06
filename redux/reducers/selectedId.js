const selectedIdReducer = (state = 0, action) => {
    switch(action.type) {
        case 'NEW_ID':
            return state = action.payload;
        default:
            return state;
    }
}

export default selectedIdReducer;