
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root.reducer';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from '@redux-devtools/extension';
import {helloSaga} from '../services/sagas'
import {applyMiddleware} from 'redux';
import {legacy_createStore as createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'reduxjs-toolkit-persist';

// const sagaMiddleware = createSagaMiddleware()

// const store = configureStore(
//     {
//         reducer:rootReducer,
//         middleware: ()=>[sagaMiddleware],
//     }
//     )
// sagaMiddleware.run(helloSaga)

const store: Store = __DEV__
  ? createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))
  : createStore(rootReducer, {}, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};
