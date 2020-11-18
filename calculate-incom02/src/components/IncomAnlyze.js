import React, { Component } from 'react';
import config from '../utils/config';
// import qs from 'qs';
import AnlyzeForm from './AnlyzeForm';


class IncomAnlyze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 提交给后台的表单数据
      forms:{
        app:'trade',
        start:'2019-09-10',
        end:'2019-09-25',
        pageno:1,
        pagesize:config.pagesize
      },

      // 页面查询展示数据
      data:[],
      // 查询中的数据数目
      total:'',
      //总的页面数
      pagenum:''
    };
  }

  //组件挂在后周期函数
  componentDidMount(){
    // console.log(config)
    //组件加载完毕后查询数据信息
    this.findAllData();
  }

  //获取后台接口数据
  findAllData = ()=>{
    // let url = config.baseURL;
    // console.log(qs.stringify(this.state.forms))
    // fetch(url,{
    //   method: 'POST',
    //   headers: {
    //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
    //   },
    //   body: qs.stringify(this.state.forms)
    // }).then((res)=>{
    //   return res.json();
    // }).then((myData)=>{
    //   console.log(myData);

    let myData = {"num":"16","content":[{"id":"6812","day":"2019-09-25","app":"trade","payorder":"401","freeorder":"2666","singleprice":"93.62","totalprice":"37543.52","refunsprice":"0","neworder":"56","againorder":"184","updateorder":"153","autoagainorder":"8","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"149","sixmonthscycle":"63","ayearcycle":"189","vipafterdatenum":"5205","vipagainpaynum":"3.54","neworderpay":"5184","againorderpay":"19615","updateorderpay":"12328.52","monthcyclepay":"0","aquartercyclepay":"7012","sixmonthscyclepay":"5233","ayearcyclepay":"25298.52"},{"id":"6808","day":"2019-09-24","app":"trade","payorder":"1632","freeorder":"12934","singleprice":"89.05","totalprice":"145329.75","refunsprice":"0","neworder":"302","againorder":"551","updateorder":"775","autoagainorder":"4","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"690","sixmonthscycle":"364","ayearcycle":"578","vipafterdatenum":"6973","vipagainpaynum":"7.9","neworderpay":"26953","againorderpay":"54967","updateorderpay":"63201.75","monthcyclepay":"0","aquartercyclepay":"34737","sixmonthscyclepay":"30715.63","ayearcyclepay":"79877.12"},{"id":"6804","day":"2019-09-23","app":"trade","payorder":"1632","freeorder":"14342","singleprice":"88.45","totalprice":"144356.25","refunsprice":"0","neworder":"336","againorder":"502","updateorder":"777","autoagainorder":"17","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"695","sixmonthscycle":"375","ayearcycle":"562","vipafterdatenum":"7107","vipagainpaynum":"7.06","neworderpay":"29027","againorderpay":"50549","updateorderpay":"63896.25","monthcyclepay":"0","aquartercyclepay":"35801.62","sixmonthscyclepay":"31817","ayearcyclepay":"76737.63"},{"id":"6800","day":"2019-09-22","app":"trade","payorder":"1456","freeorder":"13890","singleprice":"86.88","totalprice":"126493.83","refunsprice":"0","neworder":"294","againorder":"422","updateorder":"731","autoagainorder":"9","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"652","sixmonthscycle":"334","ayearcycle":"470","vipafterdatenum":"6384","vipagainpaynum":"6.61","neworderpay":"25569","againorderpay":"41386","updateorderpay":"59070.83","monthcyclepay":"0","aquartercyclepay":"33726","sixmonthscyclepay":"28229.84","ayearcyclepay":"64537.99"},{"id":"6796","day":"2019-09-21","app":"trade","payorder":"1451","freeorder":"14819","singleprice":"87.7","totalprice":"127252.87","refunsprice":"0","neworder":"285","againorder":"411","updateorder":"743","autoagainorder":"12","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"638","sixmonthscycle":"337","ayearcycle":"476","vipafterdatenum":"10702","vipagainpaynum":"3.84","neworderpay":"24815","againorderpay":"40447","updateorderpay":"61174.87","monthcyclepay":"0","aquartercyclepay":"33041.55","sixmonthscyclepay":"28733","ayearcyclepay":"65478.32"},{"id":"6792","day":"2019-09-20","app":"trade","payorder":"1699","freeorder":"16091","singleprice":"89.04","totalprice":"151280.74","refunsprice":"0","neworder":"336","againorder":"473","updateorder":"875","autoagainorder":"15","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"724","sixmonthscycle":"393","ayearcycle":"582","vipafterdatenum":"16130","vipagainpaynum":"2.93","neworderpay":"32101","againorderpay":"46902","updateorderpay":"71401.74","monthcyclepay":"0","aquartercyclepay":"36573.89","sixmonthscyclepay":"34090.95","ayearcyclepay":"80615.9"},{"id":"6788","day":"2019-09-19","app":"trade","payorder":"1743","freeorder":"15928","singleprice":"88.29","totalprice":"153896.49","refunsprice":"0","neworder":"321","againorder":"491","updateorder":"919","autoagainorder":"12","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"777","sixmonthscycle":"366","ayearcycle":"600","vipafterdatenum":"8347","vipagainpaynum":"5.88","neworderpay":"29313","againorderpay":"49399","updateorderpay":"74368.49","monthcyclepay":"0","aquartercyclepay":"39525.22","sixmonthscyclepay":"31591","ayearcyclepay":"82780.27"}],"reportarr":{"hour":"2019-09-25","app":"trade","payorder":432,"freeorder":2842,"singleprice":93.43,"totalprice":40360,"refunsprice":0,"neworder":60,"againorder":199,"updateorder":165,"autoagainorder":8,"getbackorder":0,"refunsorder":0,"monthcycle":0,"aquartercycle":162,"sixmonthscycle":68,"ayearcycle":202,"neworderpay":5451,"againorderpay":21384,"updateorderpay":13109,"monthcyclepay":0,"aquartercyclepay":7672,"sixmonthscyclepay":5684,"ayearcyclepay":27004}};
    // console.log(myData);
    let pagenum = Math.ceil(myData.num/this.state.forms.pagesize);
    // console.log(typeof pagenum);
    this.setState({
      data:myData.content,
      total:myData.num,
      pagenum
     });
     
    // })
  }

  //获取上一页数据信息
  getPrevPage = ()=>{
    //获取当前页数
    let {pageno} = this.state.forms;
    pageno = pageno>1?--pageno:1;
    this.setState({
      forms:{
        ...this.state.forms,
        pageno
      }
    },()=>{
      console.log(this.state.forms);
      //更新数据完成后查询显示数据信息
      this.findAllData();
    })
  }

  //获取下一页数据信息
  getNextPage = ()=>{
    //获取当前页数
    let {pageno} = this.state.forms;
    //获取总的页数数目
    let {pagenum} = this.state
    //计算获取总页数
    pageno = pageno<pagenum?++pageno:pagenum;
    this.setState({
      forms:{
        ...this.state.forms,
        pageno
      }
    },()=>{
      console.log(this.state.forms);
      //更新数据完成后查询显示数据信息
      this.findAllData();
    })
  }

  //获取表单组件传递过来的数据更改状态中forms值
  changeFormsData = (param)=>{
    // console.log(param);
    this.setState({
      forms:{
        ...this.state.forms,
        pagesize:param.pagesize,
        start:param.start,
        end:param.end
      }
    },()=>{
      console.log(this.state.forms);
      //更改之后查询修改数据信息
      this.findAllData();
    })
  }

  render() {
    return (
      <div className="income-anlyze">
        <div className="income-anlyze-top">
          {/* 查询表单子组件 */}
          <AnlyzeForm forms={this.state.forms} changeFormsData={this.changeFormsData} />          
        </div>
        <table>
            <thead>
              <tr>
                <th>日期</th>
                <th>付费人数</th>
                <th>免费人数</th>
                <th>客单价</th>
                <th>总收入</th>
                <th>到期(人)</th>
                <th>新订(单)</th>
                <th>续订(单)</th>
                <th>升级(单)</th>
                <th>后台(单)</th>
                <th>续订率</th>
                <th>一个月(单)</th>
                <th>一季度(单)</th>
                <th>半年(单)</th>
                <th>一年(单)</th>
                <th>来源</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map((item)=>{
                  return (
                    <tr key={item.id}>
                      <td><a href="#top">{item.day}</a></td>
                      <td>{item.payorder}</td>
                      <td>{item.freeorder}</td>
                      <td>{item.singleprice}</td>
                      <td>{item.totalprice}</td>
                      <td>{item.vipafterdatenum}</td>
                      <td>{item.neworder}({item.neworderpay}元)</td>
                      <td>{item.againorder}({item.againorderpay}元)</td>
                      <td>{item.updateorder}({item.updateorderpay}元)</td>
                      <td>{item.autoagainorder}</td>
                      <td>{item.vipagainpaynum}%</td>
                      <td>{item.refunsorder}({item.refunsprice}元)</td>
                      <td>{item.aquartercycle}({item.aquartercyclepay}元)</td>
                      <td>{item.sixmonthscycle}({item.sixmonthscyclepay}元)</td>
                      <td>{item.ayearcycle}({item.ayearcyclepay}元)</td>
                      <td><a href="#top">分析</a></td>
                    </tr>
                  );
                })
              }
            </tbody>
        </table>
        {/* 分页按钮显示区域 */}
        {
          this.state.total>0?(
            <div className="paging">
              <span className="prevPage" onClick={this.getPrevPage}>上一页</span>
              <span>{this.state.forms.pageno}/{this.state.pagenum}</span>
              <span className="nextPage" onClick={this.getNextPage}>下一页</span>
            </div>
            ):<div></div> 
        }
      </div>
    );
  }
}

export default IncomAnlyze;