import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFormField, submitTransaction, hideProgressMessage } from '../actions';
import Form from '../components/Form';

function mapStateToProps(state) {
    return {
        form: state.form,
        progress: state.progress
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setFormField, submitTransaction, hideProgressMessage
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);