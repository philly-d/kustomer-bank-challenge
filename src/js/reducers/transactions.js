import { createSelector } from 'reselect';
import {
    TRANSACTION_SUCCESS, TRANSACTION_FAILURE, TRANSACTION_REQUEST
} from '../constants/actionTypes';
import {
    WITHDRAWAL, DEPOSIT
} from '../constants/transactionTypes';
import { saveTransaction } from '../services/api';

const initialDeposit = saveTransaction({
    type: DEPOSIT,
    value: 500,
    timestamp: new Date('8/1/2016').getTime()
})
export const initialState = [initialDeposit];

export default function transactions(state=initialState, action) {
    switch (action.type) {
        case TRANSACTION_SUCCESS:
            return [
                action.transaction,
                ...state
            ];
        default:
            return state;
    }
}

/**
 * @param {string} amount - Transaction amount string
 * @return {boolean} Whether value is an invalid $ amount
 */
export function isInvalidAmount(amount) {
    const num = +amount;
    return isNaN(num) || num <= 0;
};
export function normalizeAmount(amount) {
    const num = Math.abs(+amount);
    return num.toFixed(2);
};


/**
 * @param {object} param - Transaction with type and value properties
 * @return {number} Adjusted value (positive or negative) based on type
 */
export function getAdjustedValue({ value, type }) {
    const mult = type === WITHDRAWAL ? -1 : 1;
    return mult * Math.abs(value);
};
export const reduceBalance = transactions => {
    return transactions.reduce((bal, t) => bal + getAdjustedValue(t), 0);
}
export const getTransactions = state => state.transactions;
export const getBalance = createSelector(
    getTransactions,
    reduceBalance
);