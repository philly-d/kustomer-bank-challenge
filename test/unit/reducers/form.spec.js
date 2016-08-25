import expect from 'expect';
import reducer, { initialState } from '../../../src/js/reducers/form';
import * as types from '../../../src/js/constants/actionTypes';

describe('form reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(initialState);
    });

    it('should handle SET_FORM_FIELD', () => {
        const action = {
            type: types.SET_FORM_FIELD,
            field: {
                key: 'amount',
                value: '5'
            }
        };
        const expectedState = {
            ...initialState,
            [action.field.key]: action.field.value
        }
        expect(
            reducer(undefined, action)
        ).toEqual(expectedState);

        const nextAction = {
            type: types.SET_FORM_FIELD,
            field: {
                key: 'transactionType',
                value: 'DEPOSIT'
            }
        };
        const nextExpectedState = {
            ...expectedState,
            [nextAction.field.key]: nextAction.field.value
        };
        expect(
            reducer(expectedState, nextAction)
        ).toEqual(nextExpectedState);

    });

    it('should handle TRANSACTION_SUCCESS', () => {
        const currState = {
            amount: '10',
            transactionType: 'SOMETHING'
        }
        const action = {
            type: types.TRANSACTION_SUCCESS
        };
        const expectedState = {
            ...currState,
            amount: initialState.amount
        };
        expect(
            reducer(currState, action)
        ).toEqual(expectedState);

    });
});