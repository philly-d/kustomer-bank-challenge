import React from 'react';
import moment from 'moment';
import { WITHDRAWAL, DEPOSIT } from '../constants/transactionTypes';
import { isInvalidAmount, normalizeAmount } from '../reducers/transactions';

const displayInfoByType = {
    [WITHDRAWAL]: {
        name: 'Withdrawal',
        className: 'withdrawal'
    },
    [DEPOSIT]: {
        name: 'Deposit',
        className: 'deposit'
    }
};

const TransactionItem = (transaction) => {
    const displayInfo = displayInfoByType[transaction.type];
    console.log('rendering', transaction, transaction.id);
    return (
        <tr key={transaction.id}>
            <td>{ moment(transaction.timestamp).format('l') }</td>
            <td>{ displayInfo.name }</td>
            <td className={`right aligned amount ${displayInfo.className}`}>
                { normalizeAmount(transaction.value) }
            </td>
        </tr>
    )

};


export default TransactionItem;