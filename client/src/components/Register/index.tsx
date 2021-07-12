import { Form, Input, Button } from 'antd'
import React from 'react'

interface RegisterProps {
    username: string,
    password: string,
    handleRegister?(values: any): void
}

const Register:React.FC<RegisterProps> = (props: RegisterProps) => {
    return (
        <Form 
            className="w-24"
            onFinish={props.handleRegister}
            initialValues={{...props}}
        >
            <Form.Item name="username" rules={[{ required: true, message: "请输入账户"}]}>
                <Input />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入密码"}]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="rePassword" rules={[{required: true, message: "请输入密码"}, (({ getFieldValue }) => ({
                validator(_, value) {
                    if(!value || value === getFieldValue('password')) {
                        return Promise.resolve()
                    } else {
                        return Promise.reject(new Error('密码不一致'))
                    }
                }
            }))]}>
                <Input.Password />
            </Form.Item>
            <Button htmlType="submit">注册</Button>
        </Form>
    )
}

export default Register