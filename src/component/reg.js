import React from 'react';
import "../css/login.css";
import UserService from '../service/user';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router';
import { message} from "antd";
import "antd/lib/message/style";

const service = new UserService()

export default class Reg extends React.Component {
    render () {
        return <_Reg service={service} />;
    }
}
// const inject = obj => Comp => props => <Comp {...obj} {...props} />
// @inject({service})
@observer
class _Reg extends React.Component {
    handleClick(event) {
        event.preventDefault();
        let fm = event.target.form;
        this.props.service.reg(fm[1].value, fm[2].value, fm[0].value);
    }
    render () {
        if (this.props.service.errMsg){
            message.info(this.props.service.errMsg, 3, ()=> {
                    this.props.service.errMsg = '';
                });
        }
        if (this.props.service.loggedin){
            return (<Redirect to='/' />);
        }
        return <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input type="text" placeholder="姓名" />
                    <input type="text" placeholder="邮箱" />
                    <input type="password" placeholder="密码" />
                    <input type="password" placeholder="确认密码" />
                    <button onClick={this.handleClick.bind(this)}>注册</button>
                    <p className="message">如果已经注册<Link to="/login">请登陆</Link></p>
                </form>
            </div>
        </div>;
    }
}