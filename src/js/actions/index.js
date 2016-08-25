import * as actionTypes from '../constants/actionTypes';
import * as transactionTypes from '../constants/transactionTypes';


export function submitTransaction(type, value) {
    return {
        type: actionTypes.TRANSACTION_REQUEST,
        transaction: {
            type, value
        }
    };
}

export function setFormField(key, value) {
    return {
        type: actionTypes.SET_FORM_FIELD,
        field: {
            key, value
        }
    };
}

export function resetForm() {
    return {
        type: actionTypes.RESET_FORM
    };
}

export function transactionSuccess(transaction) {
    return {
        type: actionTypes.TRANSACTION_SUCCESS,
        transaction
    };
}
export function transactionFailure(error) {
    return {
        type: actionTypes.TRANSACTION_FAILURE,
        error
    };
}

export function hideProgressMessage() {
    return {
        type: actionTypes.HIDE_PROGRESS_MESSAGE
    }
}