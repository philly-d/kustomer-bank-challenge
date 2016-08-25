import { getAdjustedValue, isInvalidAmount, normalizeAmount } from '../reducers/transactions';
import { INSUFFICIENT_FUNDS_ERROR, INVALID_AMOUNT_ERROR } from '../constants';

// Is user's balance enough for this transaction?
function hasSufficientFunds(transaction, balance) {
    const nextBalance = balance + getAdjustedValue(transaction);
    return nextBalance >= 0;
}

let transactionId = 0;
/**
 * @param {object} param - Transaction with type and value properties
 * @param {number} param.value - Transaction value
 * @param {string} param.type - Transaction type (enum of WITHDRAWAL, DEPOSIT)
 * @return {object} Transaction with timestamp & unique id
 */
export function saveTransaction({ type, value, timestamp }) {
    const id = transactionId;
    transactionId++;

    if (!timestamp) {
        timestamp = Date.now();
    }
    return {
        id, type, timestamp,
        value: normalizeAmount(value)
    };
};

// Simulates server-side validation for transaction.
export function makeTransaction(transaction, balance) {
    if (isInvalidAmount(transaction.value)) {
        // Reject invalid amounts (negative values, values rounding to zero).
        throw new Error(INVALID_AMOUNT_ERROR);
    } else if (!hasSufficientFunds(transaction, balance)) {
        // Reject withdrawals which would cause an account overdraft.
        throw new Error(INSUFFICIENT_FUNDS_ERROR);
    } else {
        // "Save" transaction to get id/timestamp & normalized value.
        return saveTransaction(transaction);
    }
};