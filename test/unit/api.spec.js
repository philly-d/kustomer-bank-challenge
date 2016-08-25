import expect from 'expect';
import { getAdjustedValue, isInvalidAmount, normalizeAmount } from '../../src/js/reducers/transactions';
import { WITHDRAWAL, DEPOSIT } from '../../src/js/constants/transactionTypes';
import { saveTransaction, makeTransaction } from '../../src/js/services/api';
import { INSUFFICIENT_FUNDS_ERROR, INVALID_AMOUNT_ERROR } from '../../src/js/constants';


describe('makeTransaction service', () => {
    it('it should handle valid deposits and withdrawals', () => {
        const expectedKeys = ['id', 'value', 'type', 'timestamp'];
        const balance = 500;
        
        const deposit = {
            type: DEPOSIT,
            value: 50
        };
        expect(makeTransaction(deposit, balance))
            .toIncludeKeys(expectedKeys);

        const withdrawal = {
            type: WITHDRAWAL,
            value: 50
        };
        expect(makeTransaction(withdrawal, balance))
            .toIncludeKeys(expectedKeys);
    });

    it('it should fail if amount is invalid', () => {
        const balance = 500;
        const transaction = {
            type: DEPOSIT,
            value: 'paul blart mall cop 3' // this will fail
        };
        expect(() => makeTransaction(transaction, balance))
            .toThrow(INVALID_AMOUNT_ERROR);
    });

    it('it should fail if withdrawal exceeds balance', () => {
        const balance = 5.00;
        const transaction = {
            type: WITHDRAWAL,
            value: 9000000 // this will fail
        };
        expect(() => makeTransaction(transaction, balance))
            .toThrow(INSUFFICIENT_FUNDS_ERROR);
    });
});