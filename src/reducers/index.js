'use strict';

import { combineReducers } from 'redux';
import loginIn from './loginReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({
    loginReducer: loginIn,
    counterReducer: counter,
});

export default rootReducer;
