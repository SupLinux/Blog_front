import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./component/login"
import Reg from './component/reg';
import Pub from './component/pub';
import { Menu, Icon ,Layout, LocaleProvider} from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import "antd/lib/layout/style";
import "antd/lib/menu/style";
import "antd/lib/Icon/style";
import L from './component/list';
import Post from './component/post';

const { Header, Content, Footer } = Layout;
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
      <ul>
        <li>采用前后端分离开发模式</li>
        <li>前端采用React技术，后端使用Django框架</li>
        <li>使用RestFul风格设计服务间API接口</li>
        <li>无session认证，强密码技术</li>
        <li>企业级Nginx+uWSGI+Django部署</li>
      </ul>
    </div>
  );
}

class Root extends React.Component {
  render () {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <Menu mode="horizontal" theme="dark">
              <Menu.Item key="home">
                <Link to="/"><Icon type="home" />主页</Link>
              </Menu.Item>
              <Menu.Item key="login">
                <Link to="/login"><Icon type="login" />登录</Link>
              </Menu.Item>
              <Menu.Item key="reg">
                <Link to="/reg">注册</Link>
              </Menu.Item>
              <Menu.Item key="pub">
                <Link to="/pub">发布</Link>
              </Menu.Item>
              <Menu.Item key="list">
               <Link to="/list"><Icon type="bars" />列表</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '8px 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/pub" component={Pub} />
              <Route path="/login" component={Login} />
              <Route path="/reg" component={Reg} />
              <Route path="/list" component={L} />
              <Route path="/post/:id" component={Post} />
            </div>
          </Content> 
          <Footer style={{ textAlign: 'center' }}>
              suplinux ©2019
          </Footer>
        </Layout>
      </Router>);
  }
}


ReactDom.render(<LocaleProvider locale={zh_CN}><Root /></LocaleProvider>, 
  document.getElementById("root"));