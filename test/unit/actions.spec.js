import expect from 'expect';
import * as types from '../../src/js/constants/actionTypes';
import { WITHDRAWAL, DEPOSIT } from '../../src/js/constants/transactionTypes';
import {
    submitTransaction, setFormField, resetForm, transactionSuccess, transactionFailure, hideProgressMessage
} from '../../src/js/actions';

describe('Actions', () => {

    describe('submitTransaction', () => {
        it('has the correct type', () => {
            const action = submitTransaction();
            expect(action.type).toEqual(types.TRANSACTION_REQUEST);
        });

        it('has the correct payload', () => {
            const type = WITHDRAWAL;
            const value = '5';
            const expected = {
                type, value
            }
            const action = submitTransaction(type, value);
            expect(action.transaction).toEqual(expected);
        });
    });

    describe('setFormField', () => {

        it('has the correct type', () => {
            const action = setFormField();
            expect(action.type).toEqual(types.SET_FORM_FIELD);
        });

        it('has the correct payload', () => {
            const key = 'amount';
            const value = '5';
            const expected = {
                key, value
            };
            const action = setFormField(key, value);
            expect(action.field).toEqual(expected);
        });
    });

});
