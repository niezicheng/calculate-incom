

import * as actions from './action';

// 对页面prop 数据进行管理
const initialState = { data: [], total: 0 };
const defaultAction = { type: 'doNothing' };

/**
 * 这是收入分析reducer业务逻辑操作
 * @param {状态数据信息} state
 * @param {分发的动作action} action
 */
export default function index(state = initialState, action = defaultAction) {
    switch (action.type) {
    case actions.GET_DATA:
        return {
            ...state,
            data: action.payload.content,
            total: +action.payload.num,
        };
    default:
        return state;
    }
}
