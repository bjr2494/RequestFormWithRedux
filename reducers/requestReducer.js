import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.CREATE_NEW_REQUEST:
        return [
            ...state,
            Object.assign({}, action.request)
        ];
        case actionTypes.REMOVE_REQUEST:
        return state.filter((data, i) => i !== action.id)
        default:
            return state;
    }
}