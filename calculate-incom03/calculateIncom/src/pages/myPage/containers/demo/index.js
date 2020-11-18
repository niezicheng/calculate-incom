import Tools from 'utils/index';
import React from 'react';
import { Button } from 'qnui';
import './index.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';

/**
    @author Mothpro
    这是一个演示的Demo组件，用于演示redux的使用
* */
class Demo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { actions, dataArr } = this.props;
        console.log(dataArr,'------')
        const plan = dataArr.length > 0 ? (<p>{`${JSON.stringify(dataArr)}`}</p>) : '';
        return (
            <div>
                {plan} 
                {
                    dataArr.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })
                }
                <Button
                    type="primary"
                    className="redux-demo"
                    onClick={() => {
                        actions.clickDemo();
                    }}
                >
获取数据信息
                </Button>
                <Button
                    type="primary"
                    className="redux-demo"
                    onClick={() => {
                        actions.addData();
                    }}
                >
添加数据信息
                </Button>
            </div>
        );
    }
}
export default connect(
    state => state.Demo,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Demo);
