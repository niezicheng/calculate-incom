import React, { Component } from 'react';
import { HashRouter,Switch,Route  } from 'react-router-dom';
import Index from './Index';
import IncomAnlyze from './IncomAnlyze';

class Content extends Component {
  render() {
    return (
      // 页面内容区域
      <div className="content">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/incomAnlyze" component={IncomAnlyze}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Content;