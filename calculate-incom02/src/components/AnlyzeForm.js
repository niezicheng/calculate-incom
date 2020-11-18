import React, { Component } from 'react';

class AnlyzeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //页面条数数目数组
      pagesizeArrs:[7,8,9,10],
      //表单提交的数据信息
      forms:{
        ...this.props.forms
      }
    }
  } 

  //获取select及input框值改变事件监听
  getChange = (attr,e)=>{
    // console.log(e.target.value)
    let {forms} = this.state;
    forms[attr] = e.target.value === ''?forms[attr]:e.target.value;
    this.setState({
      forms
    },()=>{
      // console.log(this.state.forms);
    })
  }

  //点击提交按钮再次查询相关数据信息
  queryData = ()=>{
    // console.log(this.state.forms,'========');
    this.props.changeFormsData(this.state.forms);
  }
  
  render() {
    return (
      <div>
        <select name="exchange" id="">
          <option value="">交易</option>
          <option value="66">66</option>
          <option value="99">99</option>
          <option value="100">100</option>
        </select>
        <select name="pagesize" id="" onChange={this.getChange.bind(this,"pagesize")}>
          <option value="">页条数</option>
          {
            this.state.pagesizeArrs.map((value,index)=>{
              return (
                <option key={index} value={value}>{value}</option>
              )
            })
          }
        </select>
        日期控件:
        <input value={this.state.forms.start} type="date" onChange={this.getChange.bind(this,'start')} />
        -
        <input value={this.state.forms.end} type="date" onChange={this.getChange.bind(this,'end')} />
        <button onClick={this.queryData}>查询</button>
        <button>同步</button>
      </div>
    );
  }
}

export default AnlyzeForm;