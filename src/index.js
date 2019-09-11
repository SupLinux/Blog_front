import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./component/login"
import Reg from './component/reg';
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

class Root extends React.Component {
  render () {
    return (<Router>
        <div>
        <ul>
          <li><Link to="/">主页</Link></li>
          <li><Link to="/login">登录</Link></li>
          <li><Link to="/reg">注册</Link></li>
          <li><Link to="/about">关于</Link></li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
        </div>
    </Router>);
  }
}


ReactDom.render(<Root />, document.getElementById("root"));