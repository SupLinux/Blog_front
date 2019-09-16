import React from 'react';
import "../css/login.css";
import {observer} from "mobx-react"
import {message, Form, Input, List} from 'antd';
import PostService from "../service/post"
import "antd/lib/message/style";
import "antd/lib/list/style";
import { inject, parse_qs } from "../utils";
import {Link} from "react-router-dom";
import "antd/lib/pagination";



const service = new PostService();

@inject({ service })
@observer
export default class L extends React.Component {
    constructor(props){
        super(props);
        const { location: {search}} = props;
        props.service.getall(search);
    }

    handleChange (pageNum, pageSize) {
        var search = "?page=" + pageNum + "&size=" + pageSize ;
        this.props.service.getall(search);
        // window.location.href = "/list" + search;
    }
    geturl(pageNum){
        const { location: {search}} = this.props;
        let {size=20} = parse_qs(search);
        return "/list?page=" + pageNum + "&size=" + size;
    }
    itemRender (current, type, originalElement) {
        if (type === "page"){
            return <Link to={this.geturl(current)} >{current}</Link>
        }
        if (current = 0 ) return originalElement;
        if (type === "prev"){
            return <Link to={this.geturl(current)} className='ant-pagination-item-link'>{'<'}</Link>;
        }
        if (type === "next"){
            return <Link to={this.geturl(current)} className='ant-pagination-item-link'>{'>'}</Link>;
        }
        return originalElement;
    }
    render() {
        const data = this.props.service.posts;
        const pagination = this.props.service.pagination;
        return (
        <List bordered={true}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={'/api/post/' + item.post_id }>{item.title}</Link>}
            />
          </List.Item>
        )}
        pagination={{
                onChange: this.handleChange.bind(this),
                pageSize: pagination.size,
                total: pagination.count,
                current: pagination.page,
                itemRender: this.itemRender.bind(this),
            }}
      />);
    }
}