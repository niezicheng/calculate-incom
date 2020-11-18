//点击导航栏改变页面内容值
window.onload = function(){
  //基本配置变量
  const baseUrl = 'http://ittool.aiyongbao.com/';
  //请求后台传递的初始参数对象
  let obj = {
    app:'trade',
    start:'2019-09-10',
    end:'2019-09-25',
    pageno:1,
    pagesize:7
  }

  //导航栏tabs切换
  tabSwitch();
  //计算器计算函数
  calculate();
  //收入分析数据展示及查找
  incomeAnalyze(baseUrl,obj);
  
}

//导航栏tabs切换
function tabSwitch(){
  // 获取所有tabs元素
  var tabs = document.querySelectorAll('nav li');
  // console.log(tabs);
  //获取所有的内容div
  var pages = document.querySelectorAll('.content .page');
  // console.log(pages);
  //遍历tabs类数组并实现相应内容块的切换
  for(var i=0;i<tabs.length;i++){
    //设置属性index用于辨识点击的tab元素
    tabs[i].index = i;
    //为每个tab元素绑定点击时间
    tabs[i].onclick = function(){
      // console.log(1111111);
      //循环遍历内容div元素
      for(var j=0;j<pages.length;j++){
        //隐藏div元素并去除active类
        pages[j].style.display = 'none';
        tabs[j].classList.remove('active');
      }
      //为相应点击的tab元素显示相应的div元素内容并添加active类
      pages[this.index].style.display = 'block';
      this.classList.add('active');
    }
  }
}

//计算器计算逻辑处理
function calculate(){
  // 获取显示数据的元素
  let showData = document.getElementsByClassName('showData')[0];
  //获取清零元素
  let ac = document.getElementsByClassName('delete')[0];
  //获取取反运算符
  let negation = this.document.getElementsByClassName('negation')[0];
  //获取等号元素
  let equal = document.getElementsByClassName('equal')[0];
  //获取所有的运算符元素
  let  operates= document.querySelectorAll('.item-operate');
  //获取所有的数字元素 
  let nums = document.querySelectorAll('.item-num');

  // console.log(showData,ac,nums,equal,operates);

  //初始化显示数据区域数据为0
  if(showData.innerText === '0' || showData.innerText === ''){
    showData.innerHTML = 0;
  }

  //创建一个字符串用来存储计算前的数据信息
  let str = '';

  //为数字元素循环绑定点击事件
  Array.from(nums).forEach((item,index)=>{
    // console.log(item)
    item.onclick = function(){
      str += item.innerText;
      showData.innerHTML = str;
    }
  });

  //为运算符绑定事件
  Array.from(operates).forEach((item,index)=>{
    item.onclick = function(){
      if(!isNaN(Number(str.charAt(str.length-1)))){
        str += item.innerText;
        showData.innerHTML = str; 
      }
    }
  });

  //ac清零点击事件
  ac.onclick = function(){
    showData.innerHTML = 0;
    //清空存储字符串数据
    str = ''
  }

  //  取反按钮绑定点击事件
  negation.onclick = function(){
    if(Number(str)>0){
      str = "-"+str;
    }else{
      str = str.slice(1);
    }
    showData.innerHTML = str;
  }

  //等于号添加点击事件
  equal.onclick = function(){
    //计算结果时显示loading动画
    document.getElementsByClassName('loading')[0].style.display = 'block';
    //1.5秒后隐藏loading加载动画
    setTimeout(()=>{
      document.getElementsByClassName('loading')[0].style.display = 'none';
      getResult(str);
    },1500)
  }

  //计算结果
  function getResult(str){
    var result = eval(str);
    showData.innerHTML = result;
  }
}

//收入分析内容展示处理
function incomeAnalyze(baseUrl,obj){
  //调用查询方法
  // findAllData(obj);

  //分页查询数据信息
  getPage(obj);

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
    //原生js获取下拉框的value【获取选中的option索引，根据索引下标获取相应的值】
    let index = exchange.selectedIndex; // 选中索引
    let value = exchange.options[index].value; //获取交易数据

    let pindex = pageSize.selectedIndex; // 选中索引
    let pagesize = +pageSize.options[pindex].value; //获取每页展示的页数数据
    pagesize = pagesize==""?obj.pagesize:pagesize;

    //获取开始日期的值
    let start = startTime.value==''?obj.start:startTime.value;
    //获取结束日期的值
    let end = endTime.value==''?obj.end:endTime.value;

    // console.log(value,pagesize)
    //更新传入参数对象相应的值
    obj = {
      ...obj,
      start,
      end,
      pagesize
    } 
    //调用查询方法进行查询操作
    getPage(obj);
  }

  // //查询所有信息并展示在页面表格中
  // function findAllData(obj){
  //   // console.log(obj);
  //   fetch(baseUrl+'api/getdayreport',{
  //     method: 'post', 
  //     headers: { 
  //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
  //     }, 
  //     body: 'app='+obj.app+'&start='+obj.start+'&end='+obj.end+'&pageno='+obj.pageno+'&pagesize='+obj.pagesize
  //   }).then(function(res){
  //     return res.json();
  //   }).then(function(myJson){
  //     // console.log(JSON.stringify(myJson));
  //     // console.log(myJson,'-----')
  //     let str = '';
  //     //循环遍历数据并添加到页面中
  //     myJson.content.forEach((item,index)=>{
  //       // console.log(item);
  //       str  += `
  //       <tr>
  //         <td><a>`+item.day+`</a></td>
  //         <td>`+item.payorder+`</td>
  //         <td>`+item.freeorder+`</td>
  //         <td>`+item.singleprice+`</td>
  //         <td>`+item.totalprice+`</td>
  //         <td>`+item.vipafterdatenum+`</td>
  //         <td>`+item.neworder+`(`+item.neworderpay+`元)</td>
  //         <td>`+item.againorder+`(`+item.againorderpay+`元)</td>
  //         <td>`+item.updateorder+`(`+item.updateorderpay+`元)</td>
  //         <td>`+item.autoagainorder+`</td>
  //         <td>`+item.vipagainpaynum+`%</td>
  //         <td>`+item.refunsorder+`(`+item.refunsprice+`元)</td>
  //         <td>`+item.aquartercycle+`(`+item.aquartercyclepay+`元)</td>
  //         <td>`+item.sixmonthscycle+`(`+item.sixmonthscyclepay+`元)</td>
  //         <td>`+item.ayearcycle+`(`+item.ayearcyclepay+`元)</td>
  //         <td><a>分析</a></td>
  //       </tr>
  //       `;
  //     });
      
  //     //将数据展示到表格body中
  //     document.getElementsByTagName('tbody')[0].innerHTML = str;
  //     //页面总页数
  //     let pagenum = Math.ceil(myJson.num/obj.pagesize);
  //     //显示当前页面及页面总数数据信息
  //     document.getElementsByClassName('page-content')[0].innerText = obj.pageno+'/'+pagenum;

  //   })
  // }


  //分页处理函数
  function getPage(obj){
    //当前页面
    let pageno = obj.pageno;
    //页面数据大小
    let pagesize = obj.pagesize;
    //获取前一页元素
    let prev = document.getElementsByClassName('prevPage')[0];
    //获取后一页元素
    let next = document.getElementsByClassName('nextPage')[0];
    // console.log(prev,next);

    //查询获取数据并进行分页显示数据信息
    fetch(baseUrl+'api/getdayreport',{
      method: 'post', 
      headers: { 
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
      }, 
      body: 'app='+obj.app+'&start='+obj.start+'&end='+obj.end+'&pageno='+obj.pageno+'&pagesize='+obj.pagesize
    }).then(function(res){
      return res.json();
    }).then(function(myJson){
      // console.log(JSON.stringify(myJson));
      // console.log(myJson,'-----');
      //总页面数
      let pagenum = Math.ceil(myJson.num/pagesize);
      // console.log(pageno,pagesize,pagenum);

      //将当前页面及页面总数数据信息添加到相应到页面位置
      document.getElementsByClassName('page-content')[0].innerText = pageno+'/'+pagenum;

      let str = '';
      //循环遍历数据并添加到页面中
      myJson.content.forEach((item,index)=>{
        // console.log(item);
        str  += `
          <tr>
            <td><a>${item.day}</a></td>
            <td>${item.payorder}</td>
            <td>${item.freeorder}</td>
            <td>${item.singleprice}</td>
            <td>${item.totalprice}</td>
            <td>${item.vipafterdatenum}</td>
            <td>${item.neworder}(${item.neworderpay}元)</td>
            <td>${item.againorder}(${item.againorderpay}元)</td>
            <td>${item.updateorder}(${item.updateorderpay}元)</td>
            <td>${item.autoagainorder}</td>
            <td>${item.vipagainpaynum}%</td>
            <td>${item.refunsorder}(${item.refunsprice}元)</td>
            <td>${item.aquartercycle}(${item.aquartercyclepay}元)</td>
            <td>${item.sixmonthscycle}(${item.sixmonthscyclepay}元)</td>
            <td>${item.ayearcycle}(${item.ayearcyclepay}元)</td>
            <td><a>分析</a></td>
          </tr>
        `;
      });
      
      //将数据展示到表格body中
      document.getElementsByTagName('tbody')[0].innerHTML = str;

      //为前一页元素绑定点击事件
      prev.onclick = function(){
        pageno>1?--pageno:1;
        obj = {
          ...obj,
          pageno
        }
        //将当前页面及页面总数数据信息添加到相应到页面位置
        document.getElementsByClassName('page-content')[0].innerText = pageno+'/'+pagenum
        //更新数据查询信息
        // findAllData(obj);
        getPage(obj);
      }
      //为后一页元素绑定点击事件
      next.onclick = function(){
        pageno<pagenum?++pageno:pagenum
        // console.log(pageno,pagenum)
        obj = {
          ...obj,
          pageno
        }
        //将当前页面及页面总数数据信息添加到相应到页面位置
        document.getElementsByClassName('page-content')[0].innerText = pageno+'/'+pagenum
        //更新数据查询信息
        // findAllData(obj);
        getPage(obj);
      }
    });
  }
}

