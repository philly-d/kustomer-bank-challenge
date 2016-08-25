import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    let middleware = applyMiddleware(sagaMiddleware);

    const store = createStore(rootReducer, initialState, middleware);
    sagaMiddleware.run(rootSaga); // Start redux-saga.

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        );
    }

    return store;
}