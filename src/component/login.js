import React from 'react';
import "../css/login.css";
import UserService from '../service/user';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import {observer} from "mobx-react"
import { message} from "antd";
import "antd/lib/message/style";
import { inject } from "../utils";
const service = new UserService();

// export default class Login extends React.Component {
//     render () {
//         return <_Login service={service} />;
//     }
// }
@inject({service})
@observer
export default class Login extends React.Component {
    handleClick(event) {
        event.preventDefault();
        let fm = event.target.form;
        this.props.service.login(fm[0].value, fm[1].value, this);
    }
    render () {
        if (this.props.service.errMsg){
            message.info(this.props.service.errMsg, 3, ()=> {
                    this.props.service.errMsg = '';
                });
            }
        if (this.props.service.loggedin){
            return (<Redirect to="/about" />);
        }

        return <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input type="text" placeholder="邮箱" />
                    <input type="password" placeholder="密码" />
                    <button onClick={this.handleClick.bind(this)}>登陆</button>
                    <p className="message">还未注册<Link to="/reg">请注册</Link></p>
                </form>
            </div>
        </div>;
    }
}