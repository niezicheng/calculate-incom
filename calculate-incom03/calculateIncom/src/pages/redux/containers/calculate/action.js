

import { nameSpace } from 'utils';

const ns = nameSpace('Calculate');
export const CLICK_ITEM = ns('CLICK_ITEM');
export const GET_COUNT = ns('GET_COUNT');

/**
 * 获取计算器上面的数据信息
 */
export function getData(e) {
    return (dispatch, getState) => {
        const value = e.target.innerText;
        // let { dataStr, flag } = getState().myCalculate;
        let { dataStr, flag, addee, minus, multi, divi } = getState().myCalculate;
        // 判断何时添加数据进入dataStr字串
        if (!Number.isNaN(Number(value))) {
            // 当添加的值为数字时
            dataStr += value;
        } else if (value !== 'AC' && value !== '+/-' && value !== '%' && value !== '=' && !Number.isNaN(Number(dataStr.charAt(dataStr.length - 1)))) {
            // 计算符号的使用次数
            switch (value) {
            case '+':
                addee += 1;
                break;
            case '-':
                minus += 1;
                break;
            case '*':
                multi += 1;
                break;
            case '/':
                divi += 1;
                break;
            default:
                break;
            }
            // 获取计算运算符使用的次数保存到store中
            const count = { addee, minus, multi, divi };
            // 添加数据信息
            dispatch({
                type: GET_COUNT,
                payload: count,
            });
            // 当添加数字为运算符号且当字串最后不为运算符
            dataStr += value;
        }
        /**
         * 计算表达式的值
         * @param {*} fn
         */
        function evil(fn) {
            // 一个变量指向Function，防止有些前端编译工具报错
            const Fn = Function;
            return new Fn(`return ${fn}`)();
        }
        // 计算结果【点击等于号时且子串最后为数字而不是运算符】
        if (value === '=' && !Number.isNaN(Number(dataStr.charAt(dataStr.length - 1))) && dataStr) {
            // 获取计算运算符使用的次数保存到store中
            const count = { addee, minus, multi, divi };
            // 添加到数据库中
            fetch('http://localhost:8080/myphp/calculCount.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    // 'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(count),
            });
            // 在计算结果前保存当前的计算过程字符串
            const process = dataStr;
            // 计算结果时显示loading动画
            flag = true;
            // 1.5秒后隐藏loading加载动画
            setTimeout(() => {
                flag = false;
                // 计算结果
                dataStr = `${evil(dataStr)}`;
                dispatch({
                    type: CLICK_ITEM,
                    payload: { dataStr, flag },
                });
            }, 1500);
            // 获取存储的结果
            const result = Number(`${evil(dataStr)}`);
            const obj = {
                process,
                result,
            };
            fetch('http://localhost:8080/myphp/addData.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    // 'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(obj),
            });
        }
        // 数值取反按钮
        if (value === '+/-' && !Number.isNaN(Number(dataStr))) {
            dataStr = Number(dataStr) > 0 ? `-${dataStr}` : String(Math.abs(Number(dataStr)));
        }
        // 数值取%号按钮
        if (value === '%' && !Number.isNaN(Number(dataStr))) {
            dataStr = String(Number(dataStr) / 100);
        }
        // 清零按钮
        if (value === 'AC') {
            // 显示区域置空
            dataStr = '';
            // 置空计算运算符次数并保存到store中
            const count = { addee: 0, minus: 0, multi: 0, divi: 0 };
            // 添加数据信息
            dispatch({
                type: GET_COUNT,
                payload: count,
            });
        }
        // 分发action，修改dataStr数据使其可以渲染到页面上
        dispatch({
            type: CLICK_ITEM,
            payload: { dataStr, flag },
        });
    };
}
