import React from 'react';
import "../css/login.css";
import {observer} from "mobx-react"
import PostService from "../service/post"
import {message, Form, Input, Button} from 'antd';
import "antd/lib/message/style";
import "antd/lib/form/style";
import "antd/lib/input/style";
import "antd/lib/button/style" ;
import { inject } from "../utils";

const FormItem = Form.Item;
const service = new PostService();
const { TextArea } = Input;

// export default class Pub extends React.Component {
//     render () {
//         return <_Pub service={service} />;
//     }
// }
@inject({service})
@observer
export default class Pub extends React.Component {
    handleSubmit (event) {
        event.preventDefault();
        let fm = event.target;
        this.props.service.pub(fm[0].value, fm[1].value);
    }
    render () {
        return (
        <Form onSubmit={this.handleSubmit.bind(this)} >
            <Form.Item label="标题" wrapperCol={{span:10}} labelCol={{span:4}}>
                <Input />
            </Form.Item>
            <Form.Item label="内容" wrapperCol={{span:10}} labelCol={{span:4}}>
                <TextArea rows={20} />
            </Form.Item>
            <Form.Item  wrapperCol={{span:4, offset:8}}>
            <Button type="primary" htmlType="submit" className="login-form-button">
                提交内容
            </Button>
            </Form.Item>
        </Form>
        )
    }
}
