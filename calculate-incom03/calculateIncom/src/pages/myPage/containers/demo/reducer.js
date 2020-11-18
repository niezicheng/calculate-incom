

import * as actions from './action';

// 对页面prop 数据进行管理
const initialState = { counter: 0, dataArr: [] };
const defaultAction = { type: 'doNothing' };

export default function index(state = initialState, action = defaultAction) {
    switch (action.type) {
    case actions.CLICK_DEMO:
        return Object.assign({}, state, { dataArr: action.payload });
    case actions.ADD_DATA:
        console.log(action.payload)
        return {
            ...state,
            dataArr: action.payload
        };
    default:
        return state;
    }
}
