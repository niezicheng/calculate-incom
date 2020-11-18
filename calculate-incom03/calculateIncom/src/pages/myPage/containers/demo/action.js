

import { ajax, nameSpace } from 'utils/index';


const ns = nameSpace('Demo');
export const CLICK_DEMO = ns('CLICK_DEMO');
export const ADD_DATA = ns('ADD_DATA');

export function clickDemo() {
    return (dispatch, getState) => {
        // console.log(getState());
        // let { counter } = getState().Demo;
        // console.log(counter);
        ajax({
            api: 'home',
            method: 'GET',
        }, (json) => {
            // ajax请求成功
            // console.log(json);
            dispatch({
                type: CLICK_DEMO,
                payload: json.data.list,
            });
        }, (json) => {
            // ajax请求失败
            console.log('no');
        });
    };
}

export function addData(){
    return (dispatch, getState) => {
        let { dataArr } = getState().Demo;
        let data = [...dataArr];
        data.push('我是添加的数据！！！');
        dispatch({
            type: ADD_DATA,
            payload: data
        })
    }
}
