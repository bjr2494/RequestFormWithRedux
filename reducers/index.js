import { combineReducers } from 'redux';
import requests from './requestReducer';

export default combineReducers({
    requests: requests
})