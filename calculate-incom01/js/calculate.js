//首页计算器交互数据
window.onload = function(){
  this.console.log(22222)
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
    console.log(item)
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
    getResult(str);
  }

  //计算结果
  function getResult(str){
    var result = eval(str);
    showData.innerHTML = result;
  }
}