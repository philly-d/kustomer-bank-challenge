import { connect } from 'react-redux';
import { getBalance } from '../reducers/transactions';
import Header from '../components/Header';

function mapStateToProps(state) {
    return {
        balance: getBalance(state)
    };
};

export default connect(mapStateToProps)(Header);