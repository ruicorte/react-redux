import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.value }) });
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.id);
            return updateObject(state, { results: updatedArray });
        default:
            return state;
    }
}

export default resultReducer;