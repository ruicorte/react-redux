import * as actionTypes from './actionTypes';

export const saveResult = res => {
    return {
        type: actionTypes.STORE_RESULT,
        value: res
    }
};

export const storeResult = (value) => {
    return dispatch => {
        setTimeout(() => {
            console.log('is it done yet?');
            dispatch(saveResult(value));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: id
    };
};