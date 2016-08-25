import { WITHDRAWAL, DEPOSIT } from '../constants/transactionTypes';
import {
    SET_FORM_FIELD, TRANSACTION_SUCCESS
} from '../constants/actionTypes';
import {
    AMOUNT_FIELD, TRANSACTION_TYPE_FIELD
} from '../constants';

export const initialState = {
    [TRANSACTION_TYPE_FIELD]: WITHDRAWAL,
    [AMOUNT_FIELD]: '',
}

// Form reducer manages the input fields for the
// transaction form (amount and transaction type).
export default function form (state=initialState, action) {
    switch (action.type) {
        case SET_FORM_FIELD:
            const { key, value } = action.field;
            return {
                ...state,
                [key]: value
            };
        case TRANSACTION_SUCCESS:
            return {
                ...state,
                [AMOUNT_FIELD]: initialState.amount
            };
        default:
            return state;
    }
};