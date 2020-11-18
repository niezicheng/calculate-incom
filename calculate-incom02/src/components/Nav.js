/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { HashRouter,NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <HashRouter>
          <div className="nav-item">
            <NavLink activeClassName="active" exact to="/">首页</NavLink>
          </div>
          <div className="nav-item">
            <NavLink activeClassName="active" to="/incomAnlyze">收入分析</NavLink>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default Nav;