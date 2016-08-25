import { combineReducers } from 'redux';
import progress from './progress';
import transactions from './transactions';
import form from './form';

const rootReducer = combineReducers({
    progress,
    transactions,
    form
});

export default rootReducer;
