import Axios from "axios";
import store from 'store';
import {observable} from "mobx"
import { observer } from "mobx-react";


store.addPlugin(require('store/plugins/expire')) //过期插件

export default class UserService {
    @observable loggedin = false ;
    @observable reggged = false ;
    //登录
    login (email, password) {
        Axios.post("/api/user/login",{
            email, password
    }).then( response => {
        console.log(response)
        store.set("token", response.data.token, (new Date()).getTime()+ (8 *3600 * 1000));
        this.loggedin = true;
    }).catch( error => {
        console.log(error);
        this.error = "用户名或者密码错误";
    });
    }

    //注册
    reg (email, password, name) {
        Axios.post("/api/user/reg",{
            email,password,name
        }).then( response => {
            console.log(response)
            store.set("token", response.data.token, (new Date()).getTime()+ (8 *3600 * 1000));
            this.loggedin = true;
        }).catch( error => {
            console.log(error);
            this.error = "请检查数据";
    });
    }
    
}