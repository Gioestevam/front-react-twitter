import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import logoTwitter from '../../../assets/twitter-logo.png';
import 'antd/dist/antd.css';
import './login.css';
import { Form, Icon, Input, Button } from 'antd';

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) console.log(values);
        });
    };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="container">
                <div className="img-logo">
                    <img src={logoTwitter}></img>
                </div>
                <div className="box-login">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Preenchar o campo de e-mail!' }],
                                })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="E-mail"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Preenchar o campo de senha!' }],
                                })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Senha"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Entrar
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>  
        );
      }
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default withRouter(LoginForm);