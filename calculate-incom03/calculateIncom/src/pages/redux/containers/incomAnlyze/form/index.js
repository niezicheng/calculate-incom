/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button, Select, DatePicker } from 'qnui';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import * as actions from './action';

const { Option } = Select;
const { RangePicker } = DatePicker;

/**
 * 表单组件
 */
class Forms extends Component {
    // 对props中的数据类型添加验证
    // static propTypes = { myActions: PropTypes.shape.isRequired }

    /**
     * 渲染函数
     */
    render() {
        const { myActions } = this.props;
        return (
            <div className="forms">
                <Select defaultValue="交易" onChange={(value) => { myActions.selectChange(value); }}>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                </Select>
                <Select defaultValue="页条数" onChange={(value) => { myActions.selectChange(value); }}>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                </Select>
                日期：
                <RangePicker onChange={(val, str) => { myActions.getDataValue(str); }} />
                <Button type="primary" onClick={() => { myActions.getSubmit(); }}>查询</Button>
                <Button type="normal">同步</Button>
            </div>
        );
    }
}

export default connect(
    state => state.myForms,
    dispatch => ({ myActions: bindActionCreators(actions, dispatch) }),
)(Forms);
