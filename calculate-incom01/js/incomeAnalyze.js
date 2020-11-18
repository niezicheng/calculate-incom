//收入分析数据展示交互
window.onload = function(){
  console.log(333333)
  //请求后台传递的初始参数对象
  let obj = {
    app:'trade',
    start:'2019-09-10',
    end:'2019-09-25',
    pageno:1,
    pagesize:7
  }
  findAllData(obj);

  //获取查询按钮元素
  let checkBtn = document.getElementsByClassName('checkBtn')[0];
  //同步获取当前时间按钮元素
  let getTimeBtn = document.getElementsByClassName('getTimeBtn')[0];
  //获取交易下拉框元素
  let exchange =  document.getElementById('exchange');
  //获取页面条数下拉框元素
  let pageSize =  document.getElementById('pageSize');
  //获取开始日期元素
  let startTime = document.getElementsByName('startTime')[0];
  //获取结束日期元素
  let endTime = document.getElementsByName('endTime')[0];

  //为同步时间按钮添加点击时间显示同步时间
  getTimeBtn.onclick = function(){
    //获取当前时间
    let date = new Date();
    document.getElementsByClassName('lastGetTime')[0].innerHTML = '交易上次手动同步时间为：'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  }
  // console.log(checkBtn,exchange,pageNo,startTime,endTime)
  //根据条件查询相应的结果数据
  checkBtn.onclick = function(){
    let index = exchange.selectedIndex; // 选中索引
    let value = exchange.options[index].value; //获取交易数据

    let pindex = pageSize.selectedIndex; // 选中索引
    let pagesize = +pageSize.options[pindex].value; //获取每页展示的页数数据
    pagesize = pagesize==""?obj.pagesize:pagesize;

    let start = startTime.value==''?obj.start:startTime.value;
    let end = endTime.value==''?obj.end:endTime.value;

    console.log(value,pagesize)
    //更新传入参数对象相应的值
    obj = {
      ...obj,
      start,
      end,
      pagesize
    } 
    //调用查询方法进行查询操作
    findAllData(obj);
  }

  //查询所有信息并展示在页面表格中
  function findAllData(param){

    console.log(param);
    fetch('http://ittool.aiyongbao.com/api/getdayreport',{
      method: 'post', 
      headers: { 
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
      }, 
      body: 'app='+param.app+'&start='+param.start+'&end='+param.end+'&pageno='+param.pageno+'&pagesize='+param.pagesize
    }).then(function(res){
      return res.json();
    }).then(function(myJson){
      // console.log(JSON.stringify(myJson));
      let str = '';
      //循环遍历数据并添加到页面中
      myJson.content.forEach((item,index)=>{
        // console.log(item);
        str  += `
        <tr>
          <td><a>`+item.day+`</a></td>
          <td>`+item.payorder+`</td>
          <td>`+item.freeorder+`</td>
          <td>`+item.singleprice+`</td>
          <td>`+item.totalprice+`</td>
          <td>`+item.vipafterdatenum+`</td>
          <td>`+item.neworder+`(`+item.neworderpay+`元)</td>
          <td>`+item.againorder+`(`+item.againorderpay+`元)</td>
          <td>`+item.updateorder+`(`+item.updateorderpay+`元)</td>
          <td>`+item.autoagainorder+`</td>
          <td>`+item.vipagainpaynum+`%</td>
          <td>`+item.refunsorder+`(`+item.refunsprice+`元)</td>
          <td>`+item.aquartercycle+`(`+item.aquartercyclepay+`元)</td>
          <td>`+item.sixmonthscycle+`(`+item.sixmonthscyclepay+`元)</td>
          <td>`+item.ayearcycle+`(`+item.ayearcyclepay+`元)</td>
          <td><a>分析</a></td>
        </tr>
        `;
      });
      
      //将数据展示到表格body中
      document.getElementsByTagName('tbody')[0].innerHTML = str;
      document.getElementsByClassName('paging')[0].innerHTML= `
        <span class="prevPage">上一页</span>
        1
        <span class="nextPage">下一页</span>
      `;
    })
  }
}