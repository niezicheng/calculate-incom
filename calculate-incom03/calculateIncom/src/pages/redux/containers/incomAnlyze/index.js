/* eslint-disable react/prop-types */

import React from 'react';
import './index.scss';
import { Table, Pagination } from 'qnui';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import Forms from './form/index';

/**
    @author Mothpro
    这是收入分析组件，用于展示收入分析数据信息
* */
class IncomAnlyze extends React.Component {
    // 对props中的数据类型添加验证
    // static propTypes = {
    //     myIncomAnlyze: PropTypes.shape.isRequired,
    //     myForms: PropTypes.shape.isRequired,
    //     myActions: PropTypes.shape.isRequired,
    // }

    /**
     * 组件挂载后周期函数
     */
    componentDidMount() {
        // 获取表单数据中的初始表单数据信息
        const { myForms } = this.props;
        const { forms } = myForms;
        // 获取后台数据信息
        const { myActions } = this.props;
        myActions.getMyData(forms);
    }

    /**
     * 渲染函数
     */
    render() {
        const { myActions, myIncomAnlyze, myForms } = this.props;
        const { data, total } = myIncomAnlyze;
        const { pagesize, pageno } = myForms.forms;
        // console.log(this.props.Forms.forms)
        return (
            <div className="incom-anlyze" id="top">
                {/* 头部表单 */}
                <Forms />
                {/* 表格内容区域 */}
                <Table dataSource={data} isZebra>
                    <Table.Column title="日期" dataIndex="day" />
                    <Table.Column title="付费人数" dataIndex="payorder" />
                    <Table.Column title="免费人数" dataIndex="freeorder" />
                    <Table.Column title="客单价" dataIndex="singleprice" />
                    <Table.Column title="总收入" dataIndex="totalprice" />
                    <Table.Column title="到期(人)" dataIndex="vipafterdatenum" />
                    <Table.Column title="新订(单)" cell={(value, index, record) => (`${record.neworder}(${record.neworderpay}元)`)} width="7%" />
                    <Table.Column title="续订(单)" cell={(value, index, record) => (`${record.againorder}(${record.againorderpay}元)`)} width="7%" />
                    <Table.Column title="升级(单)" cell={(value, index, record) => (`${record.updateorder}(${record.updateorderpay}元)`)} width="7%" />
                    <Table.Column title="后台(单)" cell={(value, index, record) => (`${record.neworder}(${record.neworderpay}元)`)} width="7%" />
                    <Table.Column title="续订率" cell={(value, index, record) => (`${record.vipagainpaynum}%`)} width="7%" />
                    <Table.Column title="一个月(单)" cell={(value, index, record) => (`${record.refunsorder}(${record.refunsprice}元)`)} width="7%" />
                    <Table.Column title="一季度(单)" cell={(value, index, record) => (`${record.aquartercycle}(${record.aquartercyclepay}元)`)} width="7%" />
                    <Table.Column title="半年(单)" cell={(value, index, record) => (`${record.sixmonthscycle}(${record.sixmonthscyclepay}元)`)} width="7%" />
                    <Table.Column title="一年(单)" cell={(value, index, record) => (`${record.ayearcycle}(${record.ayearcyclepay}元)`)} width="7%" />
                    <Table.Column title="来源" cell={() => (<a href="#top">分析</a>)} />
                </Table>
                <Pagination
                    current={pageno}
                    total={total}
                    pageSize={pagesize}
                    onChange={current => (myActions.getCurrentPage(current))}
                />
            </div>
        );
    }
}
export default connect(
    state => state,
    dispatch => ({ myActions: bindActionCreators(actions, dispatch) }),
)(IncomAnlyze);
