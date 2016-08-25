import React from 'react';
import Transactions from '../containers/Transactions';
import Header from '../containers/Header';
import TransactionForm from '../containers/TransactionForm';

const App = (props) => {

    return (<div>
        <Header />
        <TransactionForm />
        <Transactions />
    </div>);
}
export default App;