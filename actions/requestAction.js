import * as actionTypes from './actionTypes';

export const createRequest = (request) => {
    return {
        type: actionTypes.CREATE_NEW_REQUEST,
        request: request
    }
};

export const deleteRequest = (id) => {
    return {
        type: actionTypes.REMOVE_REQUEST,
        id: id
    }
};