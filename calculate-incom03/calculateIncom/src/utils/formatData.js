/**
 * 返回指定格式数据信息
 * @param {参数数据} data
 */
export default function index(data) {
    let addee = 0;
    let minus = 0;
    let multi = 0;
    let divi = 0;
    for (let i = 0; i < data.length;) {
        addee += Number(data[i].addee);
        minus += Number(data[i].minus);
        multi += Number(data[i].multi);
        divi += Number(data[i].divi);
        i += 1;
    }
    const obj = { addee, minus, multi, divi };
    const arr = [];
    arr.push(obj);
    return arr;
}
