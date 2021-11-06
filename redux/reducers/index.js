import { combineReducers } from 'redux';
import openReducer from './isOpen';
import selectedIdReducer from './selectedId';

const allReducers = combineReducers({
    isOpen: openReducer,
    selectedId: selectedIdReducer
});

export default allReducers;