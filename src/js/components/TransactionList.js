import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions }) => {
    return (<div className="content-block">
        <h4 className="ui horizontal divider header">
            <i className="money icon"></i>
            Your Transactions
        </h4>
        <div style={{margin: '0 10px'}}>
            <table className="ui unstackable table">
            <tbody>
                { transactions.map(TransactionItem) }
            </tbody>
            </table>
        </div>
    </div>);
};

export default TransactionList;