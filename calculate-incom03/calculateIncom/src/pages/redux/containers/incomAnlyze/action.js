

import { ajax, nameSpace } from 'utils';


const ns1 = nameSpace('IncomAnlyze');
const ns2 = nameSpace('Forms');
export const GET_DATA = ns1('GET_DATA');
export const CHANGE_CURRENT = ns2('CHANGE_CURRENT');

/**
 * 获取基本数据信息
 */
export function getMyData(forms) {
    return (dispatch) => {
        // console.log(forms);
        ajax({
            api: 'page2List',
            method: 'GET',
        }, (json) => {
            // ajax请求成功
            // console.log(json);
            const { content, num } = json.data;
            dispatch({
                type: GET_DATA,
                payload: { content, num },
            });
        }, () => {
            // ajax请求失败
            // console.log(json.error);
        });
    };
}

/**
 * 分发action更改store中的数据信息
 * @param {当前页数} pageno
 */
export function getCurrentPage(pageno) {
    return (dispatch, getState) => {
        // console.log(pageno, '------');
        // 分发action更改state中的current数据
        dispatch({
            type: CHANGE_CURRENT,
            payload: pageno,
        });
        // 更新数据页面信息
        getMyData(getState().myForms.forms)(dispatch);
    };
}
