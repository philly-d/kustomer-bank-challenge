import { connect } from 'react-redux';
import { getTransactions } from '../reducers/transactions';
import TransactionList from '../components/TransactionList';

function mapStateToProps(state) {
    return {
        transactions: getTransactions(state)
    };
}

export default connect(mapStateToProps)(TransactionList);