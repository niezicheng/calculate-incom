import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {  
  render() {
    return (
      // 头部信息
      <div className="header">
        {/* 头部部信息 */}
        <div className="header-top">
          <div className="header-top-left">
            <span>展现个人风采,选出异样情怀</span>
          </div>
          <div className="header-top-right">
            <span className="userLogin">nzc</span>
            <span className="loginOut">
              <a href="#top">退出</a>
            </span>
          </div>
        </div>
        {/* 头部底部导航信息 */}
        <div className='header-bottom'>
          {/* 头部底部导航 */}
          <Nav />
        </div>
      </div>
    );
  }
}

export default Header;