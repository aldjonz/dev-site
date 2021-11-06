export const toggleDisplay = () => {
    return {
        type: 'TOGGLE'
    };
};

export const toggleSelectedId = (id) => {
    return {
        type: 'NEW_ID',
        payload: id
    };
};