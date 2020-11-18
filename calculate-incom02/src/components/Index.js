import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //计算器显示区域字串
      dataStr:'',
      //控制loading的显示标志
      flag:false,
      //计算器数值数组
      caArrs:[
              [{
                type:'item',
                value:'AC'
              },{
                type:'item',
                value:'+/-'
              },{
                type:'item opeartor',
                value:'%'
              },{
                type:'item opeartor',
                value:'/'
              }],
              [{
                type:'item',
                value:'7'
              },{
                type:'item',
                value:'8'
              },{
                type:'item',
                value:'9'
              },{
                type:'item opeartor',
                value:'*'
              }],
              [{
                type:'item',
                value:'4'
              },{
                type:'item',
                value:'5'
              },{
                type:'item',
                value:'6'
              },{
                type:'item opeartor',
                value:'-'
              }],
              [{
                type:'item',
                value:'1'
              },{
                type:'item',
                value:'2'
              },{
                type:'item',
                value:'3'
              },{
                type:'item opeartor',
                value:'+'
              }],
              [{
                type:'item zero',
                value:'0'
              },{
                type:'item',
                value:'.'
              },{
                type:'item equal',
                value:'='
              }],
            ]
    }
  }

  //获取计算区域数据函数
  getData = (e)=>{
    let value = e.target.innerText;
    let { dataStr, flag } = this.state; 
    
    //数值取反按钮
    if(value === '+/-' && !isNaN(dataStr)){
      dataStr = '-' + this.state.dataStr;
    }

    //判断何时添加数据进入dataStr字串
    if(!isNaN(value)){
      //当添加的值为数字时
      dataStr += value;
    }else if(value !== 'AC'&& value !== '+/-' && value !== '=' && !isNaN(Number(dataStr.charAt(dataStr.length-1))) ){
      //当添加数字为运算符号且当字串最后不为运算符
      dataStr += value;
    }

    //计算表达式的值
    function evil(fn) {
      var Fn = Function;  //一个变量指向Function，防止有些前端编译工具报错
      return new Fn('return ' + fn)();
    }
    
    //计算结果【点击等于号时且子串最后为数字而不是运算符】
    if(value === '=' && !isNaN(Number(dataStr.charAt(dataStr.length-1))) && dataStr){
      //计算结果时显示loading动画
      flag = true;
      //1.5秒后隐藏loading加载动画
      setTimeout(()=>{
        flag = false;
        //计算结果
        dataStr = evil(dataStr)+'';
        this.setState({
          dataStr
        });
      },1500)
    }
    
    //清零按钮
    if(value === 'AC'){
      dataStr = '';
    }

    //修改dataStr数据使其可以渲染到页面上
    this.setState({
      dataStr,
      flag,
    });
  }
  
  render() {
    let spanArrs = [];
    for(let i = 1;i <= 16;i++){
      spanArrs.push(<span key={i}></span>);
    }
    return (
      <div className="calculate">
        {/* 计算器头部部分 */}
        <div className="top">
          {/* 计算器头部左侧图标 */}
          <div className="top-left">
            <span className="close"></span>
            <span className="shrink"></span>
            <span className="enlarge"></span>
          </div>
          {/* 计算器头部数据展示区域 */}
          <div className="showData">
            { this.state.dataStr === ''?0:this.state.dataStr }
          </div>
        </div>
        {/* 计算器底部部分 */}
        <div className="bottom">
          {/* <div className="line">
            <div className="item" onClick = {this.getData}>AC</div>
            <div className="item" onClick = {this.getData}>+/-</div>
            <div className="item opeartor" onClick = {this.getData}>%</div>
            <div className="item opeartor" onClick = {this.getData}>/</div>
          </div>
          <div className="line">
            <div className="item" onClick = {this.getData}>7</div>
            <div className="item" onClick = {this.getData}>8</div>
            <div className="item" onClick = {this.getData}>9</div>
            <div className="item opeartor" onClick = {this.getData}>*</div>
          </div>
          <div className="line">
            <div className="item" onClick = {this.getData}>4</div>
            <div className="item" onClick = {this.getData}>5</div>
            <div className="item" onClick = {this.getData}>6</div>
            <div className="item opeartor" onClick = {this.getData}>-</div>
          </div>
          <div className="line">
            <div className="item" onClick = {this.getData}>1</div>
            <div className="item" onClick = {this.getData}>2</div>
            <div className="item" onClick = {this.getData}>3</div>
            <div className="item opeartor" onClick = {this.getData}>+</div>
          </div>
          <div className="line">
            <div className="item zero" onClick = {this.getData}>0</div>
            <div className="item" onClick = {this.getData}>.</div>
            <div className="item equal" onClick = {this.getData}>=</div>
          </div> */}

          {/* 使用循环添加计算器显示的数据信息 */}
          {
            this.state.caArrs.map((item,index)=>{
              return (
                <div key={index} className="line">
                  {
                    item.map((values,index)=>{
                      return (
                          <div key={index} className={values.type} onClick = {this.getData}>{values.value}</div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        {/* loading加载动画  */}
        <div className="loading" style={{ display:this.state.flag?"block":"none" }}>
          { spanArrs }
          {/* <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span> */}
        </div>
      </div>
    );
  }
}

export default Index;