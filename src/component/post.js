import React from 'react';
import "../css/login.css";
import {observer} from "mobx-react"
import {message, Card} from 'antd';
import PostService from "../service/post"
import "antd/lib/message/style";
import "antd/lib/list/style";
import "antd/lib/card/style";
import { inject, parse_qs } from "../utils";
import {Link} from "react-router-dom";
import "antd/lib/pagination";



const service = new PostService();

@inject({ service })
@observer
export default class Post extends React.Component {
    constructor (props){
        super();
        let {id=0} = props.match.params;
        props.service.getpost(id);
    }
    render () {
        const {title,author,author_id,pubdate,content} = this.props.service.post;
        return <Card title="标题" bordered={false} style={{ width: 600 }}>
        <p>作者 <a href={author_id}>{author}</a>日期 {new Date(pubdate * 1000).toLocaleDateString()}</p>
        <p>{content}</p>
      </Card>;
    }
}