import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { isLoggedReducer } from './slices/login/login-slice';
import rootSaga from './sagas/rootSaga';

const SagaMiddleware = createSagaMiddleware();

// redux-persist with RTK (https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/)
const persistConfig = {
  key: 'NOME-DA-APLICAÇÃO',
  // possivel usar no lugar de storage:
  // cookies (https://github.com/abersager/redux-persist-cookie-storage#redux-persist-cookie-storage-adapter)
  // session storage(https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
  storage,
  whitelist: ['isLogged'],
  blacklist: [],
};

// se existir só um pode ser direto no store.reducer
const globalReducers = combineReducers({
  isLogged: isLoggedReducer,
  // state2: state2Reducer
  // state3: persistReducer(state3PersistConfig, state3Reducer)
  // stateX: stateXReducer
});

const globalReducersPersisted = persistReducer(persistConfig, globalReducers);

export const store = configureStore({
  reducer: globalReducersPersisted,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // avoid non-seriable error
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(SagaMiddleware),
});

SagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
