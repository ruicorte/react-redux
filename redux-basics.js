// import {} from '';
// import { createStore as _createStore } from 'redux';

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer

const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        // state.counter++; // don't - not immutable
        // return state;
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// Store

const store = createStore(rootReducer);
console.log('initial store state:', store.getState());

// Subscription

store.subscribe(() => {
    console.log('[subscription]', store.getState());
});

// Dispatching Action

store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
// store.dispatch({type: 'ADD_COUNTER', payload: {}});
// console.log(store.getState());