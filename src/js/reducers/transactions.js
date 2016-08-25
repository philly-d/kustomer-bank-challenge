import { createSelector } from 'reselect';
import {
    TRANSACTION_SUCCESS, TRANSACTION_FAILURE, TRANSACTION_REQUEST
} from '../constants/actionTypes';
import {
    WITHDRAWAL, DEPOSIT
} from '../constants/transactionTypes';
import { saveTransaction } from '../services/api';

// User initially gets $500 in their account from
// a prior deposit.
const initialDeposit = saveTransaction({
    type: DEPOSIT,
    value: 500,
    timestamp: new Date('8/1/2016').getTime()
})
export const initialState = [initialDeposit];

// Transactions reducer prepends the transaction list when
// new transactions are successfully submitted.
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

// Is a given amount string a valid dollar amount?
export function isInvalidAmount(amount) {
    const num = +amount;
    return isNaN(num) || num <= 0;
};
// Normalize amount to dollar value.
export function normalizeAmount(amount) {
    const num = Math.abs(+amount);
    return num.toFixed(2);
};


// Adjusts transaction value (positive if deposit, negative if withdrawal)
export function getAdjustedValue({ value, type }) {
    const mult = type === WITHDRAWAL ? -1 : 1;
    return mult * Math.abs(value);
};
// Computes balance by reducing all previous transactions
export const reduceBalance = transactions => {
    return transactions.reduce((bal, t) => bal + getAdjustedValue(t), 0);
}
export const getTransactions = state => state.transactions;
export const getBalance = createSelector(
    getTransactions,
    reduceBalance
);