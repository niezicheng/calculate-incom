
import { nameSpace } from 'utils';
import * as fatherAction from '../action';

const ns = nameSpace('Forms');
export const GET_PAGESIZE = ns('GET_PAGESIZE');
export const GET_DATE = ns('GET_DATE');

/**
 * 下拉框选择改变事件
 * @param {select选中的value值} value
 */
export function selectChange(value) {
    return (dispatch) => {
        // 分发action更该state数据信息
        dispatch({
            type: GET_PAGESIZE,
            payload: value,
        });
    };
}

/**
 * 日期组件改变状态事件
 * @param {开始与结束时间组成的数组} dataArr
 */
export function getDataValue(dataArr) {
    return (dispatch) => {
        // 分发action更该state数据信息
        dispatch({
            type: GET_DATE,
            payload: dataArr,
        });
    };
}

/**
 * 提交查询数据信息
 */
export function getSubmit() {
    return (dispatch, getState) => {
        // 调用父类的action方法获取后台数据信息
        fatherAction.getMyData(getState().myForms.forms)(dispatch);
    };
}
