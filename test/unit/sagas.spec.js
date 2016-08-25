import expect from 'expect';
import { delay, takeLatest } from 'redux-saga';
import { put, call, fork, select } from 'redux-saga/effects';
import * as types from '../../src/js/constants/actionTypes';
import { NETWORK_TIMEOUT } from '../../src/js/constants';
import { WITHDRAWAL, DEPOSIT } from '../../src/js/constants/transactionTypes';
import { makeTransaction, saveTransaction } from '../../src/js/services/api';
import { initialState, getBalance, reduceBalance } from '../../src/js/reducers/transactions';
import { processTransaction } from '../../src/js/sagas';
import { transactionSuccess, transactionFailure } from '../../src/js/actions';

const transactions = [...initialState];
const state = { transactions }
const getState = () => state

describe('processTransaction Saga', () => {
    it('should "save" a transaction and dispatch it with a transactionSuccess action', () => {
        const transaction = {
            type: WITHDRAWAL,
            value: '10'
        };
        const action = {
            type: types.TRANSACTION_REQUEST,
            transaction
        }
        const generator = processTransaction(action);

        expect(
            generator.next().value
        ).toEqual(
            select(getBalance)
        );

        const balance = reduceBalance(transactions);
        expect(
            generator.next(balance).value
        ).toEqual(
            call(delay, NETWORK_TIMEOUT)
        );

        expect(
            generator.next().value
        ).toEqual(
            call(makeTransaction, transaction, balance)
        );

        // Should dispatch a transaction success action
        // with the newly created transaction.
        const completed = saveTransaction(transaction);
        expect(
            generator.next(completed).value
        ).toEqual(
            put(transactionSuccess(completed))
        );
    });

    it('should dispatch a transactionFailure when saving fails', () => {
        const transaction = {
            type: WITHDRAWAL,
            value: '100000000000'
        };
        const action = {
            type: types.TRANSACTION_REQUEST,
            transaction
        }
        const generator = processTransaction(action);
        generator.next();

        // Create a fake error and throw it -- we should jump to the catch block
        // and dispatch a transactionFailure error.
        const saveError = new Error();
        expect(
            generator.throw(saveError).value
        ).toEqual(
            put(transactionFailure(saveError))
        );
    })

});
