import { legacy_createStore as createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { reduecer } from '../reducers';

export const Store = createStore(reduecer, {}, applyMiddleware(thunk))
