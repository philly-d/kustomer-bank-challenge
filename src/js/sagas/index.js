import { delay, takeLatest } from 'redux-saga';
import { put, call, fork, select } from 'redux-saga/effects';
import { NETWORK_TIMEOUT } from '../constants';
import {
    TRANSACTION_REQUEST, TRANSACTION_SUCCESS, TRANSACTION_FAILURE
} from '../constants/actionTypes';
import { WITHDRAWAL, DEPOSIT } from '../constants/transactionTypes';
import { transactionSuccess, transactionFailure } from '../actions';
import { getBalance } from '../reducers/transactions';
import { makeTransaction } from '../services/api';

export function* processTransaction(action) {
    const { transaction } = action;
    try {
        // Get balance to validate whether user has
        // sufficient funds for transaction.
        const balance = yield select(getBalance);
        
        // Simulate network request delay
        yield call(delay, NETWORK_TIMEOUT);

        // Attempt to make transaction with mock API request.
        const completed = yield call(makeTransaction, transaction, balance);
        
        // Transaction request was successful.
        yield put(transactionSuccess(completed));
    } catch(error) {
        // Transaction request failed.
        yield put(transactionFailure(error));
    }
}

// Watch for transaction requests and process the latest one.
export default function* rootSaga() {
    yield fork(takeLatest, TRANSACTION_REQUEST, processTransaction);
}