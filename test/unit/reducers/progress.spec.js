import expect from 'expect';
import reducer, { initialState } from '../../../src/js/reducers/progress';
import * as types from '../../../src/js/constants/actionTypes';

describe('progress reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(initialState);
    });

    it('should handle TRANSACTION_REQUEST', () => {
        const action = {
            type: types.TRANSACTION_REQUEST
        };
        const expectedState = {
            ...initialState,
            loading: true
        };
        expect(
            reducer(initialState, action)
        ).toEqual(expectedState);
    });
    
    it('should handle TRANSACTION_SUCCESS', () => {
        const action = {
            type: types.TRANSACTION_SUCCESS
        };
        const expectedState = {
            ...initialState,
            visible: true,
            success: true
        }
        expect(
            reducer(initialState, action)
        ).toEqual(expectedState);
    });

    it('should handle TRANSACTION_FAILURE', () => {
        const action = {
            type: types.TRANSACTION_FAILURE,
            error: new Error('Something went wrong')
        }
        const expectedState = {
            ...initialState,
            visible: true,
            error: action.error
        }
        expect(
            reducer(initialState, action)
        ).toEqual(expectedState);
    });

    it('should handle HIDE_PROGRESS_MESSAGE', () => {
        const action = {
            type: types.HIDE_PROGRESS_MESSAGE
        }
        const expectedState = {
            ...initialState,
            visible: false
        }
        expect(
            reducer(initialState, action)
        ).toEqual(expectedState);
    });
});