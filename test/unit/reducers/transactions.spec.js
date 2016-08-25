import expect from 'expect';
import reducer, { initialState } from '../../../src/js/reducers/transactions';
import * as types from '../../../src/js/constants/actionTypes';
import { WITHDRAWAL, DEPOSIT } from '../../../src/js/constants/transactionTypes';
import { saveTransaction } from '../../../src/js/services/api';

describe('transactions reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(initialState);
    });
    
    it('should handle TRANSACTION_SUCCESS', () => {
        const transaction = saveTransaction({
            type: WITHDRAWAL,
            value: 20
        });
        const action = {
            type: types.TRANSACTION_SUCCESS,
            transaction
        };
        const expectedState = [
            transaction,
            ...initialState
        ];
        expect(
            reducer(initialState, action)
        ).toEqual(expectedState);
    });
});