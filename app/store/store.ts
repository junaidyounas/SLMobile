import {configureStore} from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import {storeConfig} from './storeConfig';

const storeConfigurations = storeConfig;

export const store = configureStore(storeConfigurations);

export const persistor = persistStore(store);
