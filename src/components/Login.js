import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import $ from 'jquery'; // $ default import
import { API_ROOT } from "../constant";
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                $.ajax({
                    url: `${ API_ROOT }/login`,
                    method: 'POST',
                    data: JSON.stringify({
                        username: values.username,
                        password: values.password,
                    })
                }).then((response) => {
                    message.success('Login Successful');
                    this.props.handleLogin(response);
                    // localStorage
                    // localStorage.clear()
                    // both key and value must be String
                    // localStorage.setItem('myKey', 'myValue');
                    // localStorage.getItem('myKey')
                    // go to home page;
                }, (response) => {
                    message.error(response.responseText);
                }).catch( (e) => {
                    console.log('catch ' + e);
                    message.error(e);
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        // getFieldDecorator and this.props.form are from higher order components.
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to="/register">register now!</Link>
                </FormItem>
            </Form>
        );
    }
}

export const Login = Form.create()(NormalLoginForm);
