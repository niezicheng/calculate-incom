

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Calculate from '../containers/calculate/reducer';
import IncomAnlyze from '../containers/incomAnlyze/reducer';
import Logs from '../containers/logs/reducer';
import Forms from '../containers/incomAnlyze/form/reducer';

// 将现有的reduces加上路由的reducer
const rootReducer = combineReducers({
    myCalculate: Calculate,
    myLogs: Logs,
    myIncomAnlyze: IncomAnlyze,
    myForms: Forms,
    routing: routerReducer,
});

export default rootReducer;
