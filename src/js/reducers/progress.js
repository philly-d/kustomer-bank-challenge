import { createSelector } from 'reselect';
import {
    TRANSACTION_SUCCESS, TRANSACTION_FAILURE, TRANSACTION_REQUEST,
    HIDE_PROGRESS_MESSAGE
} from '../constants/actionTypes';

export const initialState = {
    loading: false,
    visible: false,
    error: false,
    success: false
}

// Progress reducer manages the UI state for the progress of
// a pending transaction (and its success or failure).
export default function progress(state=initialState, action) {
    switch (action.type) {
        case TRANSACTION_SUCCESS:
            return {
                ...initialState,
                visible: true,
                success: true
            };
        case TRANSACTION_REQUEST:
            return {
                ...initialState,
                loading: true
            };
        case TRANSACTION_FAILURE:
            return {
                ...initialState,
                visible: true,
                error: action.error
            };
        case HIDE_PROGRESS_MESSAGE:
            return {
                ...state,
                visible: false
            };
        default:
            return state;
    }
}