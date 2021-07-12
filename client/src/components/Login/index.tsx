import React from 'react'
import { Form, Button, Input } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    .ant-form {
        width: 400px;
        height: 300px;
        border: 1px solid #d9d9d9;
        border-radius: 10px;
        margin-top: 200px;
        padding: 40px;
    }

`

interface LoginProps {
    username: string,
    handleInputUsername?(): void,
    password: string,
    handleInputPassword?(): void,
    handleLogin?(): void
    handleReigster?(): void
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {

    const [form] = Form.useForm();

    return (
        <Wrapper>
            <Form form={form} labelAlign="right">
                <Form.Item label="用户名">
                    <Input placeholder="请输入用户名" value={props.username} onInput={props.handleInputUsername} ></Input>
                </Form.Item>
                <Form.Item label="密码">
                    <Input placeholder="请输入密码" value={props.password} onInput={props.handleInputPassword} />
                </Form.Item>
                <Button type="link" onClick={props.handleReigster}>注册</Button>
                <Form.Item>
                    <Button type="primary" onClick={props.handleLogin}>Login</Button>
                </Form.Item>
            </Form>
        </Wrapper>
    )
}

export default Login