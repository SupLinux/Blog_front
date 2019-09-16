import Axios from "axios";
import store from 'store';
import {observable} from "mobx"

export default class PostService {
    constructor() {
        this.instance = Axios.create({
            baseURL: '/api/post'
        });
    }
    @observable done = false ;
    @observable errMsg = '' ;
    @observable posts = [];
    @observable pagination = {page:1, size:20, pages:1, count:0};
    @observable post = {};
    //登录
    pub (title, content) {
        this.instance.post("pub",{
            title, content
    }, {
        headers: {'JWT': store.get('token')}
    }).then( response => {
        console.log(response)
        this.errMsg = "文章提交成功";
    }).catch( error => {
        console.log(error);
        this.errMsg = "文章提交错误";
    });
    }
    getall(search) {
        search = "?page=1";
        this.instance.get(search).then( 
            response => {
            console.log(response)
            this.posts = response.data.posts;
            this.pagination = response.data.pagination;
        }).catch( error => {
            console.log(error);
            this.errMsg = "文章列表错误";
        });
    }
    getpost(id){
        this.instance.get(id).then( 
            response => {
            console.log(response)
            this.post = response.data.post;
            console.log(post,"======");
        }).catch( error => {
            console.log(error);
            this.errMsg = "文章加载错误";
        });
    }
}