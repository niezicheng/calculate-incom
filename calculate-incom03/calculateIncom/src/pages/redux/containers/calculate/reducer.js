
import * as actions from './action';

// 计算器初始化状态数据
const initialState = {
    // 加号计数
    addee: 0,
    // 减号计数
    minus: 0,
    // 乘号计数
    multi: 0,
    // 除号计数
    divi: 0,

    // 计算器显示区域
    dataStr: '',
    // 控制loading显示标志
    flag: false,
    // 计算器数值
    caArrs: [
        [{
            type: 'item',
            value: 'AC',
        }, {
            type: 'item',
            value: '+/-',
        }, {
            type: 'item',
            value: '%',
        }, {
            type: 'item',
            value: '/',
        }],
        [{
            type: 'item',
            value: '7',
        }, {
            type: 'item',
            value: '8',
        }, {
            type: 'item',
            value: '9',
        }, {
            type: 'item opeartor',
            value: '*',
        }],
        [{
            type: 'item',
            value: '4',
        }, {
            type: 'item',
            value: '5',
        }, {
            type: 'item',
            value: '6',
        }, {
            type: 'item opeartor',
            value: '-',
        }],
        [{
            type: 'item',
            value: '1',
        }, {
            type: 'item',
            value: '2',
        }, {
            type: 'item',
            value: '3',
        }, {
            type: 'item opeartor',
            value: '+',
        }],
        [{
            type: 'item zero',
            value: '0',
        }, {
            type: 'item',
            value: '.',
        }, {
            type: 'item equal',
            value: '=',
        }],
    ],
};

const defaultAction = { type: 'doNothing' };

/**
 * 用于计算器的业务逻辑处理
 * */
export default function index(state = initialState, action = defaultAction) {
    switch (action.type) {
    case actions.CLICK_ITEM:
        return {
            ...state,
            dataStr: action.payload.dataStr,
            flag: action.payload.flag,
        };
    case actions.GET_COUNT:
        return {
            ...state,
            add: action.payload.add,
            minus: action.payload.minus,
            multi: action.payload.multi,
            divi: action.payload.divi,
        };
    default:
        return state;
    }
}
