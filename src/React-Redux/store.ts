import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './Reducers/index';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Saga/index';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;


