/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './index.scss';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';

/**
    @author Mothpro
    这是一个演示的Demo组件，用于演示redux的使用
* */
class Calculate extends React.Component {
    // static propTypes = {
    //     myActions: PropTypes.shape.isRequired,
    //     caArrs: PropTypes.arrayOf.isRequired,
    //     flag: PropTypes.bool.isRequired,
    //     dataStr: PropTypes.string.isRequired,
    // }
    /**
     * 组件渲染函数
     */
    render() {
        const { myActions, caArrs, flag, dataStr } = this.props;
        const spanArrs = [];
        for (let i = 1; i <= 16;) {
            spanArrs.push(<span key={i}> </span>);
            i += 1;
        }
        // console.log(spanArrs);
        return (
            <div className="calculate">
                {/* 计算器头部部分 */}
                <div className="top">
                    {/* 计算器头部左侧图标 */}
                    <div className="top-left">
                        <span className="close"> </span>
                        <span className="shrink"> </span>
                        <span className="enlarge"> </span>
                    </div>
                    {/* 计算器头部数据展示区域 */}
                    <div className="showData">
                        { dataStr === '' ? 0 : dataStr }
                    </div>
                </div>

                {/* 计算器底部部分 */}
                <div className="bottom">
                    {/* 使用循环添加计算器显示的数据信息 */}
                    {
                        caArrs.map((item, index) => (<div key={index} className="line">{item.map(values => (<div key={values.value} className={values.type} onClick={(e) => { myActions.getData(e); }}>{values.value}</div>))}</div>))
                    }
                </div>

                {/* loading加载动画  */}
                <div className="loading" style={{ display: flag ? 'block' : 'none' }}>
                    { spanArrs }
                </div>
            </div>
        );
    }
}

// Calculate.propTypes = {
//     myActions: PropTypes.number,
//     caArrs: PropTypes.arrayOf,
//     flag: PropTypes.bool,
//     dataStr: PropTypes.string
// };
export default connect(
    state => state.myCalculate,
    dispatch => ({ myActions: bindActionCreators(actions, dispatch) }),
)(Calculate);
