/**
 * Core Modules
 */
import React from 'react';
import { Link, withRouter } from "react-router-dom";

/**
 * Services
 */
import { get, post} from '../../services/baseApi';

/**
 * Components UI
 */
import { Form, Icon, Input, Button } from 'antd';

/**
 * Assets Css's and Imgs
 */
import logoTwitter from '../../../assets/twitter-logo.png';
import 'antd/dist/antd.css';
import './login.css';


const Login = (props) => {

    const getPerson = () => {
        get('users?page=2').then(res => {
            console.log(res);
        })
    };

    const { getFieldDecorator } = props.form;
    
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) console.log(values);
        });
    };

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100vh',
            background: '#cecece'
        },
        imgLogo: {
            width: '150px',
            height: '150px',
            marginBottom: '20px'
        },
        boxLogin: {
            width: '500px',
            height: '200px'
        },
        loginFormButton: {
            width: '100%',
            height: '45px'
        },
        iconStyle: {
            color: 'rgba(0,0,0,.25)'
        }
    }

    return (
        <div style={styles.container}>
            <div>
                <img style={styles.imgLogo} src={logoTwitter}></img>
            </div>
            <div style={styles.boxLogin}>
                <Form onSubmit={handleSubmit}>
                    <Form.Item>
                        {
                            getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Preenchar o campo de e-mail!' }],
                            })(
                            <Input
                                prefix={<Icon type="user" style={styles.iconStyle} />}
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
                                prefix={<Icon type="lock" style={styles.iconStyle} />}
                                type="password"
                                placeholder="Senha"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={styles.loginFormButton}>
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>  
    );
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default withRouter(LoginForm);