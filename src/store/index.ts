import { createStore } from 'redux';
import { appReducer } from '../reducers/index';

export function configureStore(initialState = {}) {
    return createStore<{}>(
        appReducer,
        initialState
    )
}

export const store = configureStore();