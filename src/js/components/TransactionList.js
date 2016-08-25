import React from 'react';
import TransactionItem from './TransactionItem';

// Renders TransactionItems for each transaction
// in provided list.
const TransactionList = ({ transactions }) => {
    return (<div className="content-block">
        <h4 className="ui horizontal divider header">
            <i className="money icon"></i>
            Your Transactions
        </h4>
        <div className="transaction-list">
            <table className="ui unstackable table">
            <tbody>
                { transactions.map(TransactionItem) }
            </tbody>
            </table>
        </div>
    </div>);
};

export default TransactionList;