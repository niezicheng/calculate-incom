//点击导航栏改变页面内容值
window.onload = function(){
  this.console.log(111111)
  // 获取所有tabs元素
  var tabs = document.querySelectorAll('nav li');
  // console.log(tabs);
  //获取所有的内容div
  var pages = document.querySelectorAll('.content .page');
  console.log(pages);

  //遍历tabs类数组并实现相应内容块的切换
  for(var i=0;i<tabs.length;i++){
    //设置属性index用于辨识点击的tab元素
    tabs[i].index = i;
    //为每个tab元素绑定点击时间
    tabs[i].onclick = function(){
      console.log(1111111);
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