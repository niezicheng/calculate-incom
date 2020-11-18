import * as myActions from './action';
import * as fatherActions from '../action';

// 表单reducer文件信息
// 初始化状态数据信息
const initialState = {
    // 提交给后台的表单数据
    forms: {
        app: 'trade',
        start: '2019-09-10',
        end: '2019-09-25',
        pageno: 1,
        pagesize: 7,
    },
};

const defaultAction = { type: 'doNothing' };

/**
 * reducer纯函数【更新store中的数据信息】
 * @param {状态数据} state
 * @param {分发的action} action
 */
export default function index(state = initialState, action = defaultAction) {
    switch (action.type) {
    // 更新页面大小数据信息
    case myActions.GET_PAGESIZE:
        return {
            forms: {
                ...state.forms,
                pagesize: +action.payload,
            },
        };
    // 更新日期数据信息
    case myActions.GET_DATE:
        return {
            forms: {
                ...state.forms,
                start: action.payload[0],
                end: action.payload[1],
            },
        };
    // 更新当前页面数据信息
    case fatherActions.CHANGE_CURRENT:
        return {
            forms: {
                ...state.forms,
                pageno: +action.payload,
            },
        };
    default:
        return state;
    }
}
