import {configureStore} from '@reduxjs/toolkit';
import {allReducers} from './allReducers';

const rootReducer = allReducers;

export const store = configureStore(rootReducer);
